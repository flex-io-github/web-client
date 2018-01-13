import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types"
import { userActions } from '../_actions';

class UserEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: this.props.selecteduser.firstName ? this.props.selecteduser.firstName : "",
                lastName: this.props.selecteduser.lastName ? this.props.selecteduser.lastName: "",
                username: this.props.selecteduser.username ? this.props.selecteduser.username : "",
                password: this.props.selecteduser.password ? this.props.selecteduser.password : "",
                confirmPassword: "",
                id: this.props.selecteduser.id
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.username && user.password) {
            dispatch(userActions.update(user));
        }
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
            [name]: value
            },
        });

    }

    render() {
        const { users } = this.props;
        const { user } = this.state;

        return (
            <div>
                <h1>Edit User</h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="control-label">First Name</label>
                        <input
                            value={this.state.user.firstName}
                            name="firstName"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Last Name</label>
                        <input
                            value={this.state.user.lastName}
                            name="lastName"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Username</label>
                        <input
                            value={this.state.user.username}
                            name="username"
                            className="form-control"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Password</label>
                        <input
                            value={this.state.user.password}
                            name="password"
                            className="form-control"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Confirm Password</label>
                        <input
                            value={this.state.user.confirmPassword}
                            name="confirmPassword"
                            className="form-control"
                            type="password"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    // const { user } = authentication;
    if (props.match.params.UserId) {
        const { users, authentication } = state;
        const selecteduser = state.users.items.filter(c => c.id.toString() == props.match.params.UserId);
        return {
            selecteduser: selecteduser[0],
            users
        };
    }

    
}

// const connectedUserEditPage = connect(mapStateToProps)(UserEditPage);
// export { connectedUserEditPage as UserEditPage };

export default connect(mapStateToProps)(UserEditPage);