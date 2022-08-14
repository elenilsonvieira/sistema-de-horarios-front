import React from "react";

import AuthenticationApiService from "../api/auth/AuthenticationApiService";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export default class SessionProvider extends React.Component {

    state = {
        loggedUser: null,
        loading: true,
    }

    constructor(){
        super();
        this.service = new AuthenticationApiService();
    }

    async componentDidMount() {
        const isAuthenticated = await this.service.isAuthenticated();
        
        if(isAuthenticated){
            this.start();
        }

        this.setState({loading: false});
    }

    login = async(username, password) => {
        const user = await this.service.login(
            username,
            password
        );

        if(user) {
            this.start();
            return user;
        } else {
            return null;
        }
    }

    start = () => {
        const loggedUser = this.service.getLoggedUser();
        const token = this.service.getToken();
        
        this.service.registerToken(token);
        this.setState({loggedUser});

    }

    end = () => {
        this.setState({loggedUser: null});
        this.service.logout();
    }

    isAuthenticated = () => {
        return this.state.loggedUser != null;
    }

    refreshToken = () => {
        return this.service.refreshToken();
    }

    render() {
        if(this.state.loading) {
            return false;
        }

        const context = {
            loggedUser: this.state.loggedUser,
            isAuthenticated: this.isAuthenticated(),
            start: this.start,
            end: this.end,
            login: this.login,
            refreshToken: this.refreshToken,
        }

        return(
            <AuthContext.Provider value={context}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export const useSessionProviderContext = () => React.useContext(AuthContext);