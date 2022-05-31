import React from "react";

import {ButtonMenu} from '../../components'

import {AddInfo, Horario, Editar, Ver} from '../../assets/img'

import {Main, Container, Col} from './styles'

export const AccessInfo = () => {
    return (
        <Main>
            <Container>
                <Col>
                    <ButtonMenu 
                        tittle="ADICIONAR INFORMAÇÕES" 
                        icon={AddInfo} 
                        discription="Ex: Turma, salas, disciplinas, professores..."
                        to={"/add-info"}
                    />
                    <ButtonMenu 
                        tittle="MONTAR HORÁRIOS" 
                        icon={Horario} 
                        discription="De acordo com as informações inseridas
                            no sistema."
                        to={"/access-info"}
                    />
                </Col>
                <Col>
                    <ButtonMenu 
                        tittle="EDITAR INFORMAÇÕES" 
                        icon={Editar} 
                        discription="Editar ou excluir dados."
                        to={"/access-info"}
                    />
                    <ButtonMenu 
                        tittle="VISUALIZAR INFORMAÇÕES" 
                        icon={Ver} 
                        discription="Veja com detalhes todos os dados 
                            inseridos de acordo com seu tipo."
                            to={"/access-info"}
                    />
                </Col>
            </Container>
        </Main>
    )
}