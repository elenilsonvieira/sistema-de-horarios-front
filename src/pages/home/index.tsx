import React, { useState } from 'react';
import { useSessionProviderContext } from '../../hooks/sessionProvider';
import {
  ButtonHome,
  InputContent,
  InputArea,
  ButtonAction,
} from '../../components';
import { Main, LoginSpan, Form, Container } from './styles';

import { successMessage, errorMessage } from '../../components/libs/Toastr';

export const Home = () => {
  const { login, loggedUser, isAuthenticated, end, refreshToken } =
    useSessionProviderContext();
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [enrollment, setEnrollment] = useState<string>();
  const [password, setPassword] = useState<string>();

  const refresh = refreshToken();

  const validate = () => {
    const errors = [];

    if (!enrollment) {
      errors.push('A matrícula é obrigatória');
    }
    if (!password) {
      errors.push('A senha é obrigatória');
    }
    return errors;
  };

  const AuthUser = async () => {
    const errors = validate();

    if (errors.length > 0) {
      errors.forEach((message) => {
        errorMessage(message);
      });
    } else {
      const user = await login(enrollment, password);
      if (user) {
        window.location.replace('/access-info');
        return successMessage('Usuário autorizado!');
      } else {
        return errorMessage('Verifique os dados e tente novamente.');
      }
    }
  };

  return (
    <Main>
      {showLogin ? (
        <Container>
          <Form>
            <InputContent labelText="Matrícula:" htmlFor="enrollment">
              <InputArea
                placeholder="Matrícula"
                id="enrollment"
                change={(event) => {
                  setEnrollment(event.target.value);
                }}
              />
            </InputContent>
            <InputContent labelText="Senha:" htmlFor="pass">
              <InputArea
                type="password"
                placeholder="Senha"
                id="pass"
                change={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </InputContent>
            <ButtonAction
              type="button"
              onClickFunction={AuthUser}
              textButton={'login'}
            />
          </Form>
          <LoginSpan onClick={() => setShowLogin(false)}>Voltar</LoginSpan>
        </Container>
      ) : (
        <Container>
          <LoginSpan className="user">{loggedUser.name}</LoginSpan>
          <ButtonHome />
          {isAuthenticated ? (
            <>
              <LoginSpan onClick={end}>Sair</LoginSpan>
            </>
          ) : (
            <LoginSpan onClick={() => setShowLogin(true)}>
              Fazer login
            </LoginSpan>
          )}
        </Container>
      )}
    </Main>
  );
};
