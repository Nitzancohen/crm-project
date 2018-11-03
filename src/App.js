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
        <h4>welcome to CRM</h4>
        <p>Start managing your customers today.</p>
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
