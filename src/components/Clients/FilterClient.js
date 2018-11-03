import React, { Component } from 'react';

class FilterClient extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            searchField: 'name'
        }
    }

    changeSearchTerm = (e) => this.setState({ searchTerm: e.target.value.toLowerCase() }, () => {this.search()})

    changeSearchField = (e) => this.setState({ searchField: e.target.value }, () => {this.search()})

    search = () => {
        if (this.state.searchTerm === '') return this.props.filterClients(null);
        let clients = [...this.props.clients]
        let filtered = clients.filter(c => c[this.state.searchField].toLowerCase().includes(this.state.searchTerm))
        this.props.filterClients(filtered)
    }

    render() {
        return (
            <div id='filter-clients'>
                <input type='text' value={this.state.searchTerm} onChange={this.changeSearchTerm} placeholder='Search' />
                <select value={this.state.searchField} onChange={this.changeSearchField}>
                    <option value='name'>Name</option>
                    <option value='owner'>Owner</option>
                    <option value='country'>Country</option>
                </select>
            </div>
        );
    }
}

export default FilterClient;