import React, {useState} from "react";
import SessionProvider from "../../hooks/sessionProvider";
import {ButtonHome, InputContent, InputArea, ButtonAction} from '../../components';
import {Main, LoginSpan, Form, Container} from './styles';

import { successMessage, errorMessage } from "../../components/libs/Toastr";

export const Home = () => {

    const sectionProvider = new SessionProvider();
    const [showLogin, setShowLogin] = useState<boolean>(false);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    const AuthUser = async () => {

        const user = await sectionProvider.login(email, password);
        if (user) {
            return successMessage(`Usuário autorizado!`);
        } else {
            return errorMessage(`Verifique os dados e tente novamente.`);
        }
    }

    return (
        <Main>
            {showLogin ? 
                <Container>
                    <Form>
                        <InputContent labelText="E-mail:" htmlFor='email'>
                            <InputArea placeholder="E-mail" id="email" change={(event) => {
                                setEmail(event.target.value)}}/>
                        </InputContent>
                        <InputContent labelText="Senha:" htmlFor='pass'>
                            <InputArea type="password" placeholder="Senha" id="pass" change={(event) => {
                                setPassword(event.target.value)}}/>
                        </InputContent>
                        <ButtonAction type="button" onClickFunction={AuthUser} textButton={"login"} />
                    </Form>
                    <LoginSpan onClick={() => setShowLogin(false)}>
                        Voltar
                    </LoginSpan>
                </Container>
            :
                <Container>
                    <ButtonHome />
                    <LoginSpan onClick={() => setShowLogin(true)}>
                        Fazer login
                    </LoginSpan>
                </Container>
            }
        </Main>
    )
}