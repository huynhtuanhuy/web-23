import React, { Component } from 'react'

export default class LoginScreen extends Component {
    state = {
        username: '',
        password: '',
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onLogin(this.state.username, this.state.password);
    }

    render() {
        return (
            <div className="col-4 offset-4 my-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input required onChange={this.handleInputChange} className="form-control" name="username" type="text" />
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleInputChange} className="form-control" name="password" type="password" />
                    </div>
                    <div className="form-group text-center">
                        <input required className="form-control btn-primary" value="Login" type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}
