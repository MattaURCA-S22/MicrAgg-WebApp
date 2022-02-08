import React from "react"
import "./DashboardLogin.css"

export default class DashboardLogin extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                username: props.username,
                password: props.password
            }
        }
    }

    handleUsernameChanged(event) {
        var user = this.state.user;
        user.username = event.target.value;
        this.setState ({ user: user });
    }

    handlePasswordChanged(event) {
        var user = this.state.user;
        user.password = event.target.value;
        this.setState ({ user: user});
    }

    handleCredentialSubmission() {
        alert("Username: " + this.state.user.username + "\nPassword: " + this.state.user.password);
    }

    render() {
        return (
            <div className="DashboardLogin-Login">
                <div className="DashboardLogin-Entry">
                    <h3>Dashboard Login</h3>
                </div>
                <div className="DashboardLogin-Body">
                    <div className="DashboardLogin-Credentials">
                        <form onSubmit={this.handleSubmit}>
                            <div className="DashboardLogin-Username">
                                <label for="usernameLabel">
                                    Username<br/>
                                </label>
                            </div>
                                <input type="text" value={this.state.user.username} onChange={this.handleUsernameChanged.bind(this)} name="username" />
                        <br/>
                            <div className="DashboardLogin-Password">
                                <label for="passwordLabel">
                                    Password<br/>
                                </label>
                            </div>
                            <input type="password" value={this.state.user.password} onChange={this.handlePasswordChanged.bind(this)} name="password"/>
                            <br/>
                            <input type="submit" onClick={this.handleCredentialSubmission.bind(this)} value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}