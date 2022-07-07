import React, {useState} from "react";
import {ButtonHome, InputContent, InputArea, ButtonAction} from '../../components';
import {Main, LoginSpan, Form, Container} from './styles';


export const Home = () => {

    const [showLogin, setShowLogin] = useState<boolean>(false);

    return (
        <Main>
            {showLogin ? 
                <Container>
                    <Form>
                        <InputContent labelText="E-mail:" htmlFor='email'>
                            <InputArea placeholder="E-mail" id="email"/>
                        </InputContent>
                        <InputContent labelText="Senha:" htmlFor='pass'>
                            <InputArea type="password" placeholder="Senha" id="pass"/>
                        </InputContent>
                        <ButtonAction textButton={"login"} />
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