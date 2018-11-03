import React, { Component } from 'react';

class ColumnHeaders extends Component {
    render() {
        return (
            <div className='column-header'>
                <h4>Name</h4>
                <h4>Surname</h4>
                <h4>Country</h4>
                <h4>First Contact</h4>
                <h4>Email</h4>
                <h4>Sold</h4>
                <h4>Owner</h4>
            </div>
        );
    }
}

export default ColumnHeaders;