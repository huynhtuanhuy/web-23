import React, { Component } from "react";
import axios from '../axios';
import { Link } from 'react-router-dom';

class ProfilePanel extends Component {
  logout = () => {
    axios.delete("http://localhost:6969/api/auth/logout")
      .then(() => {
        window.location.href = "/";
      }).catch((err) => {
        console.log(err);
      });
  }
  
  render() {
    const display = this.props.username ? (
      <div>
        <span className="navbar-text">Welcome, {this.props.username}</span>
        <button
          className="btn btn-primary btn-block"
          onClick={this.logout}
        >
          Logout
        </button>
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
