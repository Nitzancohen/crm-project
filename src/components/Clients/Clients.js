import React, { Component } from 'react';
import ClientRow from './ClientRow.js';

class Clients extends Component {
    render() {
        return this.props.clients.map(c => <ClientRow key={c._id} client={c} update={this.props.update}/>);
    }
}

export default Clients;