import React, { Component } from 'react';

class AddClient extends Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            surname: '',
            country: '',
            owner: ''
        }
    }

    bindInput = (e) => this.setState({ [e.target.name]: e.target.value })

    addClient = async () => {
        let newName = this.state.firstName + ' ' + this.state.surname
        let newClientInfo = {name: newName, country: this.state.country, owner: this.state.owner}
        await this.props.addClient(newClientInfo)
        alert('done!')
    }

    render() {
        return (
            <div className='page-section'>
                <h4>ADD CLIENT</h4>
                <p>First name: <input type='text' className='underline-input new-client-input' value={this.state.firstName} name='firstName' onChange={this.bindInput}></input></p>
                <p>Surname: <input type='text' className='underline-input new-client-input' value={this.state.surname} name='surname' onChange={this.bindInput}></input></p>
                <p>Country: <input type='text' className='underline-input new-client-input' value={this.state.country} name='country' onChange={this.bindInput}></input></p>
                <p>Owner: <input type='text' className='underline-input new-client-input' value={this.state.owner} name='owner' onChange={this.bindInput}></input></p>
                <button type='button' id='add-new-client' onClick={this.addClient}>Add New Client</button>
            </div>
        );
    }
}

export default AddClient;