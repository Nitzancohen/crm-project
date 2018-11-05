import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ActionsPage from './components/Actions/ActionsPage';
import ClientsPage from './components/Clients/ClientsPage';
import AnalyticsPage from './components/Analytics/AnalyticsPage';

class App extends Component {
  home = () => {
    return (
      <div className='homepage'>
        <h4>WELCOME TO CRM</h4>
        <p id='info'>Start managing your customers today.</p>
        <p id='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" render={this.home} />
            <Route exact path="/clients" render={() => <ClientsPage />} />
            <Route exact path="/actions" render={() => <ActionsPage />} />
            <Route exact path="/analytics" render={() => <AnalyticsPage />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
