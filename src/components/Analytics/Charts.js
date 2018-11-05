import React, { Component } from 'react';
import SalesBy from './SalesBy';
import TopEmployees from './TopEmployees';

class Charts extends Component {
    render() {
        return (
            <div className='charts-container'>
                <TopEmployees />
                <SalesBy />
            </div>
        )
    }
}

export default Charts;