import React, { Component } from "react";
import { Link } from 'react-router-dom';

class ProfilePanel extends Component {
  render() {
    const display = this.props.username ? (
      <div>
        <span className="navbar-text">Welcome, {this.props.username}</span>
      </div>
    ) : (
      <Link to="/login">
        <button
          className="btn btn-primary btn-block"
          // onClick={this.props.onLogin}
        >
          Login
        </button>
      </Link>
    );
    return <div className="col-3 profile_panel text-right">{display}</div>;
  }
}

export default ProfilePanel;
