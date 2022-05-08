import React, {useState} from "react";

import {Main} from './styles'

import {Professor} from './professor'
import {Classroom} from './classroom'

export const AddInfo = () => {
    const [type, setType] = useState('none');

    function handleChange(e) {
        setType(e.target.value); 
        console.log(type);
    }

    return (
        <Main>
            <h1>
                ADICIONE INFORMAÇÕES
            </h1>

            <select value={type} id="type-info" onChange={e => handleChange(e)}>
                <option value="none">Selecione o tipo </option>
                <option value="classroom">Sala de aula</option>
                <option value="professor">Professor</option>
            </select>
            <div>
                {type === 'none' && 
                    <h1>nenhum tipo selecionado</h1>
                }
                {type === 'classroom' && 
                    <Classroom />
                }
                {type === 'professor' && 
                    <Professor />
                }

            </div>
        </Main>
    )
}