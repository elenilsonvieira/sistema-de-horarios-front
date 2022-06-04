import { useState } from 'react';
import {InputArea, ButtonAction, InputContent, SelectArea} from '../../../../../components'
import { Form, Main } from '../form-styles/styles';

export const Lesson = () => {
    return (
        <Main>
            <Form>
                <InputContent labelText='Calendário:' htmlFor="calendario">
                    <SelectArea id="calendario">
                        <option value="">2020.1</option>
                        <option value="">2020.2</option>
                        <option value="">2021.1</option>
                        <option value="">2021.2</option>
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Sala de aula:' htmlFor="classroom">
                    <SelectArea id="classroom">
                        <option value="">Sala 1</option>
                        <option value="">Sala 2</option>
                        <option value="">Sala 3</option>
                        <option value="">Sala 4</option>
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Disciplina:' htmlFor="disciplina">
                    <SelectArea id="disciplina">
                        <option value="">DAC</option>
                        <option value="">Técnica de Testes</option>
                        <option value="">Análise de Algorítmos</option>
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Professor:' htmlFor="professor">
                    <SelectArea id="professor">
                        <option value="">Elenilson Vieira</option>
                        <option value="">Tiago Brasileiro</option>
                        <option value="">Larissa Vasconcelos</option>
                    </SelectArea>
                </InputContent>
                <InputContent labelText='Turma:' htmlFor="turma">
                    <SelectArea id="turma">
                        <option value="">1º Período</option>
                        <option value="">2º Período</option>
                        <option value="">3º Período</option>
                    </SelectArea>
                </InputContent>
            </Form>

            <ButtonAction textButton="adicionar aula" onClickFunction={ async ()=>{
            }}/>
        </ Main>
    );
}