import React from "react";
import SessionProvider, { useSessionProviderContext } from "../../../hooks/sessionProvider";
import {Main, Username, Button, UserData, ButtonsContainer} from './styles';

const Sidebar = () => {

    const { end, loggedUser } = useSessionProviderContext(); 
    console.log("logged", loggedUser);

    return (
        <Main>
            <UserData>
                <Username>
                    {loggedUser.name}
                </Username>
            </UserData>
            <ButtonsContainer>
                <Button>
                    Meus dados
                </Button>
                <Button onClick={end}>
                    Sair
                </Button>
            </ButtonsContainer>
        </Main>
    )
}

export {Sidebar};