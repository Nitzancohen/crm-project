import React, { Component } from 'react';
import Axios from 'axios';
import UpdateClient from './UpdateClient';
import AddClient from './AddClient';
import './Actions.css'

class ActionsPage extends Component {
    constructor() {
        super();
        this.state = {
            clients: [],
            clientNames: [],
            owners: []
        }
    }

    componentDidMount = () => {
        Axios.get('http://localhost:8000/clients').then(clients => {
            this.setState({ clients: clients.data })
            this.generateData(clients.data)
        })
    }

    generateData = (data) => {
        let clients = [...data]
        let names = clients.map(c => c.name)
        let dupes = {};
        let owners = [];
        for (let c of clients) {
            if (!dupes[c.owner]) {
                dupes[c.owner] = 1;
                owners.push(c.owner)
            }
        }
        this.setState({ clientNames: names, owners: owners });
    }

    updateClient = (prop, value, clientName) => {
        let clients = [...this.state.clients]
        let index = this.state.clientNames.indexOf(clientName)
        let clientToUpdate = clients[index]
        let clientId = clientToUpdate._id;
        clientToUpdate[prop] = value;

        Axios({
            url: 'http://localhost:8000/clients/' + clientId,
            method: 'put',
            data: {
                client: clientToUpdate
            }
        })
    }

    generateClientId = () => {
        let id = '';
        for (let i = 0; i < 24; i++) {
            let chooseDigit = Math.round(Math.random())
            if (chooseDigit === 0) {
                let n = Math.floor(Math.random() * 10 + 48)
                id += String.fromCharCode(n)
            }
            else {
                let c = Math.floor(Math.random() * 6 + 97)
                id += String.fromCharCode(c)
            }
        }
        return id;
    }

    formatDate = () => {
        const d = new Date()
        let month = '' + (d.getMonth() + 1)
        let day = '' + d.getDate()
        let year = d.getFullYear()
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;

        let date = [year, month, day].join('-')
    
        return date.concat('T21:00:00.000Z')
    }

    addClient = (newClientInfo) => {
        let newClient = {
            _id: this.generateClientId(),
            name: newClientInfo.name,
            email: '',
            firstContact: this.formatDate(),
            emailType: null,
            sold: false,
            owner: newClientInfo.owner,
            country: newClientInfo.country
        }
        Axios({
            url: 'http://localhost:8000/clients',            
            method: 'post',
            data: {
                client: newClient
            }
        })
    }

    render() {
        return (
            <div className='page'>
                <UpdateClient clientNames={this.state.clientNames} owners={this.state.owners} update={this.updateClient}/>
                <AddClient addClient={this.addClient}/>
            </div>
        );
    }
}

export default ActionsPage;