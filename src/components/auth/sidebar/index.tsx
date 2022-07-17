import React from "react";
import {Main, Username, UserId, Button, UserData, ButtonsContainer} from './styles';

const Sidebar = () => {
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
                <Button>
                    Sair
                </Button>
            </ButtonsContainer>
        </Main>
    )
}

export {Sidebar};