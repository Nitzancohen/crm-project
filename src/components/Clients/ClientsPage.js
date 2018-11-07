import React, { Component } from 'react';
import Axios from 'axios';
import Clients from './Clients';
import ColumnHeaders from './ColumnHeaders';
import FilterClient from './FilterClient';
import ShowClientsBlock from './ShowClientsBlock';
import './Clients.css'
import './Loader.css'

class ClientsPage extends Component {
    constructor() {
        super();
        this.state = {
            gotData: false,
            clients: [],
            filteredClients: null,
            showFrom: 0
        }
    }

    componentDidMount = () => {
        Axios.get('/clients').then(clients => {
            this.setState({ clients: clients.data, gotData: true })
        })
    }

    showClientsBlock = (showFrom) => this.setState({ showFrom: showFrom })

    currentClients = () => {
        let clients = [...this.state.clients]
        return clients.slice(this.state.showFrom, this.state.showFrom + 20)
    }

    filterClients = (filtered) => this.setState({ filteredClients: filtered })

    findClientById = (id) => {
        let clients = this.currentClients();
        return clients.find(c => c._id === id)
    }

    updateClient = (clientId, newClientInfo) => {
        let clients = [...this.state.clients]
        let clientToUpdate = this.findClientById(clientId);
        let index = clients.indexOf(clientToUpdate);
        clients[index].name = newClientInfo.name + ' ' + newClientInfo.surname;
        clients[index].country = newClientInfo.country;

        Axios({
            url: '/clients/' + clientId,
            method: 'put',
            data: {
                client: clientToUpdate
            }
        })
    }

    showTable = () => {
        return (
            <div className='page'>
                <div className='clients-search'>
                    <FilterClient clients={this.currentClients()} filterClients={this.filterClients} />
                    <ShowClientsBlock showFrom={this.state.showFrom} showClientsBlock={this.showClientsBlock} />
                </div>
                <div className='clients-table'>
                    <ColumnHeaders />
                    {this.state.filteredClients ? <Clients clients={this.state.filteredClients} showFrom={this.state.showFrom} update={this.updateClient} />
                        : <Clients clients={this.currentClients()} showFrom={this.state.showFrom} update={this.updateClient} />}
                </div>
            </div>
        )
    }

    showLoader = () => {
        return (
            <div className='spinner page'>
                <div className='rect1'></div>
                <div className='rect2'></div>
                <div className='rect3'></div>
                <div className='rect4'></div>
                <div className='rect5'></div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.gotData ? this.showTable() : this.showLoader()}
            </div>
        );
    }
}

export default ClientsPage;