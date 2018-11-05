import React, { Component } from 'react';
import Badge from './Badge';

class Badges extends Component {
    constructor(props) {
        super(props);
        this.state = {
            badges: [
                {
                    id: 'newClients', name: 'New Clients',
                    icon: 'fas fa-chart-line bIcon', data: 'b1'
                },
                {id: 'emailsSent', name: 'Emails Sent', icon: 'fas fa-envelope bIcon', data: 'b2'},
                {id: 'outstandingClients', name: 'Outstanding Clients', icon: 'fas fa-user-circle bIcon', data: 'b3'},
                {id: 'hottestCountry', name: 'Hottest Country', icon: 'fas fa-globe-americas bIcon', data: 'b4'}
            ]
        }
    }

    generateBadges = () => {
        return this.state.badges.map(b => {
            return <Badge key={b.id} badge={b}/>
        })
    }

    render() {
        return (
            <div className='badges'>
                {this.generateBadges()}
            </div>
        );
    }
}

export default Badges;