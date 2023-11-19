import React from 'react';

import { ButtonMenu, Sidebar } from '../../components';

import { AddInfo, Horario, Editar, Ver } from '../../assets/img';

import { Main, Container, Col, Menu, SuperDiv } from './styles';

export const AccessInfo = () => {
  return (
    <SuperDiv>
      <Main>
        <Sidebar></Sidebar>
        <Menu>
          <Container>
            <Col>
              <ButtonMenu
                tittle="ADICIONAR INFORMAÇÕES"
                icon={AddInfo}
                discription="Ex: Turma, salas, disciplinas, professores..."
                to={'/add-info'}
                className="description"
              />
              <ButtonMenu
                tittle="MONTAR HORÁRIOS"
                icon={Horario}
                discription="De acordo com as informações inseridas
                                no sistema."
                to={'/set-schedules'}
                className="description"
              />
            </Col>
            <Col>
              <ButtonMenu
                tittle="EDITAR INFORMAÇÕES"
                icon={Editar}
                discription="Editar ou excluir dados."
                to={'/edit-info'}
                className="description"
              />
            </Col>
          </Container>
        </Menu>
      </Main>
    </SuperDiv>
  );
};
