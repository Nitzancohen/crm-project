import React, { Component } from 'react';
import Axios from 'axios';

class Badge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newClientsCount: 0,
            emailsSent: 0,
            outstandingClients: 0,
            hottestCountry: ' '
        }
    }

    componentDidMount = async () => {
        let newClientsCount = await Axios.get('http://localhost:8000/badges/newclients')
        let emailsSent = await Axios.get('http://localhost:8000/badges/emails')
        let outstanding = await Axios.get('http://localhost:8000/badges/outstanding')
        let hottestCountry = await Axios.get('http://localhost:8000/badges/hottestCountry')
        this.setState({
                newClientsCount: newClientsCount.data,
                emailsSent: emailsSent.data,
                outstandingClients: outstanding.data,
                hottestCountry: hottestCountry.data
        })
    }

    badgeData = () => {
        switch (this.props.badge.id) {
            case 'newClients': return this.state.newClientsCount
            case 'emailsSent': return this.state.emailsSent
            case 'outstandingClients': return this.state.outstandingClients
            case 'hottestCountry': return this.state.hottestCountry
            default: return '';
        }
    }

    badgeName = () => {
        if (this.props.badge.id !== 'newClients') return this.props.badge.name;
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date = new Date();
        let month = monthNames[date.getMonth()]
        return `New ${month} Clients`
    }

    render() {
        return (
            <div className='badge'>
                <div className='icon-container' id={this.props.badge.id}>
                    <i className={this.props.badge.icon}></i>
                </div>
                <div className='data-container'>
                    <h4>{this.badgeData()}</h4>
                    <p>{this.badgeName()}</p>
                </div>
            </div>
        );
    }
}

export default Badge;