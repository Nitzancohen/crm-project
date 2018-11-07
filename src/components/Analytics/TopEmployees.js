import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import Axios from 'axios';

class TopEmployees extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount = async () => {
        let data = await Axios.get('/charts/employees')
        let topEmployees = [...data.data]
        for (let e of topEmployees) {
            e.owner = e.owner.split(' ')[0]
        }
        this.setState({ data: topEmployees })
    }

    render() {
        return (
            <div>
                <h4>Top Employees</h4><br />
                <BarChart barCategoryGap="20%" layout="vertical" width={600} height={150} data={this.state.data}>
                    <XAxis type='number' />
                    <YAxis dataKey='owner' type='category' />
                    <Tooltip />
                    <Bar dataKey='count' fill="#003f5c" />
                </BarChart>
            </div>
        )
    }
}

export default TopEmployees;