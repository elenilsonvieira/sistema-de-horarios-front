import React, {createContext, useState, useEffect} from "react";

import AuthenticationApiService from "../api/auth/AuthenticationApiService";

const SessionProviderContext = createContext({});

export const SessionProvider = () => {

    const [loggedUser, setLoggedUser] = useState();
    const [context, setContext] = useState();

    const service = new AuthenticationApiService();

    async function componentDidMount() {
        const isAuthenticated = await service.isAuthenticated();

        if(isAuthenticated){
            this.start();
        }

        setLoadding(false);
    }

    const login = async(username, password) => {
        const user = await this.service.login(
            username,
            password
        );

        if(user) {
            this.start();
            setLoggedUser(user);
            return user;
        } else {
            return null;
        }
    }

    const start = () => {
        const loggedUser = service.getLoggedUser();
        const token = service.getToken();

        this.setState({loggedUser});
        this.service.registerToken(token);
    }

    const end = () => {
        console.log('ENCERRANDO SEÇÃO');
        setLoggedUser(null);
        service.logout();
    }

    const isAuthenticated = () => {
        return this.state.loggedUser != null;
    }

    useEffect(() => {
        setContext(
            {
                login: login(),
                start: start(),
                end: end(),
                isAuthenticated: isAuthenticated(),
                loggedUser: loggedUser,
            }
        )
    }, []);

    return (
        <SessionProviderContext.Provider value={context}>
            {children}
        </SessionProviderContext.Provider>
    )
}

export const useSessionProviderContext = () => {
    const context = useContext(SessionProviderContext);

    return context;
}


