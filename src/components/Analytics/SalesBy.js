import React, { Component } from 'react';
import { BarChart, XAxis, YAxis, Tooltip, Bar } from 'recharts';
import Axios from 'axios';

class SalesBy extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            category: 'country'
        }
    }

    componentDidMount = () => this.getData()

    getData = async () => {
        let data = await Axios.get('/charts/salesby/'+this.state.category)
        let salesBy = [...data.data]
        for (let s of salesBy) {
            s.dataType = s.dataType.split(' ')[0]
        }
        this.setState({ data: salesBy })
    }

    changeCategory = (e) => this.setState({ category: e.target.value }, () => {
        this.getData()
    })

    render() {
        return (
            <div>
                <h4>
                    Sales By <select value={this.state.category} onChange={this.changeCategory}>
                        <option>country</option>
                        <option>email</option>
                        <option>owner</option>
                    </select>
                </h4>
                <br />
                <BarChart barCategoryGap="20%" width={600} height={150} data={this.state.data}>
                    <XAxis dataKey="dataType" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#955196" />
                </BarChart>
            </div>
        )
    }
}

export default SalesBy;