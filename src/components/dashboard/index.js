import React, { Component } from 'react';

class Dashboard extends Component {
  handleLogout = () => {
    this.props.logout();
    localStorage.removeItem('user');
    this.props.history.push('/login');
  };
  render() {
    return (
      <div>
        Dashboard <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
