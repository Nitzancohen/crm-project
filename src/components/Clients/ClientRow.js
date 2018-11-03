import React, { Component } from 'react';
import EditClientPopup from './EditClientPopup';
import './Popup.css'

class ClientRow extends Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        }
    }

    openPopup = () => this.setState({ showPopup: true })

    closePopup = () => this.setState({ showPopup: false })

    updateClient = async (newClientInfo) => {
        await this.props.update(this.props.client._id, newClientInfo)
        this.closePopup();
    }

    render() {
        const clientInfo = {
            name: this.props.client.name.split(' ')[0],
            surname: this.props.client.name.split(' ')[1],
            country: this.props.client.country
        }
        return (
            <div>
                <EditClientPopup show={this.state.showPopup} close={this.closePopup} clientInfo={clientInfo} update={this.updateClient}/>
                <div className='client-row' onClick={this.openPopup}>
                    <p>{this.props.client.name.split(' ')[0]}</p>
                    <p>{this.props.client.name.split(' ')[1]}</p>
                    <p>{this.props.client.country}</p>
                    <p>{this.props.client.firstContact.substring(0, 10)}</p>
                    {this.props.client.emailType ? <p>{this.props.client.emailType}</p> : <p>-</p>}
                    {this.props.client.sold ? <p><i className="fas fa-check"></i></p> : <p>-</p>}
                    <p>{this.props.client.owner}</p>
                    <hr />
                </div>
            </div>
        );
    }
}

export default ClientRow;