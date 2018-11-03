import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            clients: 'nav-item',
            actions: 'nav-item',
            analytics: 'nav-item'
        }
    }

    resetActive = () => this.setState({ clients: 'nav-item', actions: 'nav-item', analytics: 'nav-item' })

    changeActive = (e) => {
        this.resetActive()
        this.setState({ [e.target.id]: 'nav-item-active' })
    }

    render() {
        return (
            <div className="navbar">
                <div className='nav-item'>
                    <Link className='nav-link' to='/' onClick={this.resetActive}><i className="fas fa-home"></i></Link>
                </div>
                <div className={this.state.clients}>
                    <Link className="nav-link" to="/clients" id='clients' onClick={this.changeActive}>Clients</Link>
                </div>
                <div className={this.state.actions}>
                    <Link className="nav-link" to="/actions" id='actions' onClick={this.changeActive}>Actions</Link>
                </div>
                <div className={this.state.analytics}>
                    <Link className="nav-link" to="/analytics" id='analytics' onClick={this.changeActive}>Analytics</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;