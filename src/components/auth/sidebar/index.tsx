import React from "react";
import SessionProvider from "../../../hooks/sessionProvider";
import {Main, Username, UserId, Button, UserData, ButtonsContainer} from './styles';

const Sidebar = () => {

    const sectionProvider = new SessionProvider();

    return (
        <Main>
            <UserData>
                <Username>
                    Nome do Usuário
                </Username>
                <UserId>
                    ID: 1462587654565
                </UserId>
            </UserData>
            <ButtonsContainer>
                <Button>
                    Meus dados
                </Button>
                <Button onClick={sectionProvider.end}>
                    Sair
                </Button>
            </ButtonsContainer>
        </Main>
    )
}

export {Sidebar};