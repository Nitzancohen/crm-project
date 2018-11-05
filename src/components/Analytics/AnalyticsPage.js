import React, { Component } from 'react';
import './Analytics.css'
import Badges from './Badges';
import Charts from './Charts';

class AnalyticsPage extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className='page'>
                <Badges />
                <Charts />
            </div>
        );
    }
}

export default AnalyticsPage;