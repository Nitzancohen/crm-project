import React, { Component } from 'react';

class SearchClient extends Component {
    constructor() {
        super();
        this.state = {
            clientName: ''
        }
    }

    searchClient = (e) => this.setState({ clientName: e.target.value }, ()=>{console.log(this.state.clientName)})

    changeClient = (e) => {
        let clientName = e.target.value
        this.setState({ clientName: clientName }, ()=>{
            this.props.changeClient(clientName)
        })
    }

    render() {
        return (
            <div>
                <span>Client: </span>
                <input list="names" className='underline-input' onChange={this.changeClient}></input>
                <datalist id="names">
                    {this.props.names()}
                </datalist>
            </div>
        );
    }
}

export default SearchClient;