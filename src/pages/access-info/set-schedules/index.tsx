import React from "react";
import {SelectArea, InputContent} from '../../../components';
import {Main, SelectContainer} from './styles';

const SetSchedules = () => {
    return (
        <Main>
            montar horarios
            <SelectContainer>
                <InputContent labelText="Selecione o curso:">
                    <SelectArea id={""}>
                        <option value="">ADS</option>
                        <option value="">TCE</option>
                    </SelectArea>
                </InputContent>
                <InputContent labelText="Selecione a turma:">
                    <SelectArea id={""}>
                        <option value="">1º Período</option>
                        <option value="">2º Período</option>
                        <option value="">3º Período</option>
                        <option value="">4º Período</option>
                        <option value="">5º Período</option>
                        <option value="">6º Período</option>
                        <option value="">7º Período</option>
                    </SelectArea>
                </InputContent>
            </SelectContainer>
        </Main>
    )
}

export {SetSchedules};