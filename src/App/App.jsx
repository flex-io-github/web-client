import React from "react";
import PropTypes from "prop-types";

import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { history } from "../_helpers";
import { alertActions } from "../_actions";
import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import { Content, Footer, NavBar, SidebarMenu } from "./_components";
import "./_styles/App.css";

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        return (
            <div className="App">
                <div className="header">
                    <NavBar />
                </div>
                <div className="body">
                    <div className="content">
                        <div className="container">
                            <Router history={history}>
                                <div>
                                    <PrivateRoute
                                        exact
                                        path="/"
                                        component={HomePage}
                                    />
                                    <Route
                                        path="/login"
                                        component={LoginPage}
                                    />
                                    <Route
                                        path="/register"
                                        component={RegisterPage}
                                    />
                                </div>
                            </Router>
                        </div>
                    </div>
                    <div className="sidebar">
                        <SidebarMenu />
                    </div>
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    const { loggedIn } = state.authentication;
    return {
        alert,
        loggedIn
    };
}

// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App };

const connectedApp = compose(connect(mapStateToProps))(App);

export { connectedApp as App };
