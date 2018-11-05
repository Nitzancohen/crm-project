import React, { Component } from 'react';
import SearchClient from './SearchClient';

class UpdateClient extends Component {
    constructor() {
        super();
        this.state = {
            clientName: '',
            owner: '',
            emailType: ''
        }
    }

    generateOwnersTags = () => {
        return this.props.owners.map(o => <option value={o}>{o}</option>)
    }

    generateClientsNamesTags = () => {
        return this.props.clientNames.map(n => <option value={n}/>)
    }

    changeClient = (name) => this.setState({ clientName: name })

    bindInput = (e) => this.setState({ [e.target.name]: e.target.value })

    checkClientName = () => {
        if (!this.state.clientName.length || !this.props.clientNames.includes(this.state.clientName)) {
            alert('please enter a valid Client name...')    
            return false;
        }
        return true;
    }

    transferOwner = async () => {
        if (this.checkClientName()) {
            await this.props.update('owner', this.state.owner, this.state.clientName)
            this.doneMessage()
        }
    }

    sendEmail = async () => {
        if (this.checkClientName()) {
            await this.props.update('emailType', this.state.emailType, this.state.clientName)
            this.doneMessage()
        }
    }

    declareSale = async () => {
        if (this.checkClientName()) {
            await this.props.update('sold', true, this.state.clientName)
            this.doneMessage()
        }
    }

    doneMessage = () => {
        return alert('done!')
    }

    render() {
        return (
            <div className='page-section'>
                <h4>UPDATE</h4>
                <SearchClient names={this.generateClientsNamesTags} changeClient={this.changeClient}/>
                <p className='indent-update'>
                    <span>Transfer ownership to: </span>
                    <select name='owner' className='select-field underline-input' onChange={this.bindInput}>
                        <option>owner</option>
                        {this.generateOwnersTags()}
                    </select>
                    <span className='client-action' onClick={this.transferOwner}>TRANSFER</span>
                </p>
                <p className='indent-update'>
                    <span>Send email: </span>
                    <select name='emailType' className='select-field underline-input' onChange={this.bindInput}>
                        <option>Email Type</option>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                        <option>D</option>
                    </select>
                    <span className='client-action' onClick={this.sendEmail}>SEND</span>
                </p>
                <p className='indent-update'>Declare sale!<span className='client-action' onClick={this.declareSale}>DECLARE</span></p>
                <hr />
            </div>
        );
    }
}

export default UpdateClient;