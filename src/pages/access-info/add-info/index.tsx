import React, {useState} from "react";
import {SelectArea, InputContent} from '../../../components';

import {Main, WrapperContainer, TypesContainer, FormContainer, Tab, TypeLabel} from './styles'

import {Calendar,
    Classroom,
    Course,
    CurricularComponent,
    Professor,
    Profile,
    Restriction,
    Turma,
    Lesson} from './models'


enum TypeLabeEnuml {
    classroom = 'Sala de Aula',
    professor = 'Professor',
    profile = 'Perfil',
    restriction = 'Restrição',
    calendar = 'Calendário',
    course = 'Curso',
    turma = 'Turma',
    curricularComponent = 'Disciplina',
    lesson = 'Aula',
}

const types = [
    {
        id: '99899',
        value: 'professor',
        title: 'Professor',
        checked: true,
    },
    {
        id: '99877',
        value: 'profile',
        title: 'Perfil do Professor',
    },
    {
        id: '99887',
        value: 'restriction',
        title: 'Restrição de Professor',
    },
    {
        id: '99879',
        value: 'curricularComponent',
        title: 'Disciplina',
    },
    {
        id: '99885',
        value: 'calendar',
        title: 'Calendário',
    },
    {
        id: '99499',
        value: 'turma',
        title: 'Turma',
    },
    {
        id: '74899',
        value: 'course',
        title: 'Curso',
    },
    {
        id: '99823',
        value: 'classroom',
        title: 'Sala de aula',
    },
    {
        id: '99119',
        value: 'lesson',
        title: 'Aula',
    },
]

export const AddInfo = () => {
    const [typeSelected, setType] = useState('professor');

    function handleChangeType(event:any) {
        setType(event.target.value);
    }

    return (
        <Main>
            <WrapperContainer>
                <FormContainer>
                    <Tab>
                        <h1>
                            {(TypeLabeEnuml as any)[typeSelected]}
                        </h1>
                    </Tab>
                    {typeSelected === 'classroom' && 
                        <Classroom />
                    }
                    {typeSelected === 'professor' && 
                        <Professor />
                    }
                    {typeSelected === 'profile' && 
                        <Profile />
                    }
                    {typeSelected === 'restriction' && 
                        <Restriction />
                    }
                    {typeSelected === 'course' && 
                        <Course />
                    }
                    {typeSelected === 'curricularComponent' &&
                        <CurricularComponent />
                    }
                    {typeSelected === 'calendar' &&
                        <Calendar />
                    }
                    {typeSelected === 'turma' &&
                        <Turma />
                    }
                    {typeSelected === 'lesson' &&
                        <Lesson />
                    }
                </FormContainer>
                <TypesContainer>
                    <div>
                        {types.map((type) => {
                            return(
                                <div key={type.id}>
                                    <input defaultChecked={type.checked} type='radio' value={type.value} id={type.value} name='type-select' onClick={(e) => handleChangeType(e)}/>
                                    <TypeLabel htmlFor={type.value}>
                                        <span>
                                            {type.title}
                                        </span>
                                        <div></div>
                                    </TypeLabel>
                                </div>
                            )})}
                    </div>
                </TypesContainer>
            </WrapperContainer>
            <InputContent labelText='Selecione o tipo de dado para inserir:' className="select-label">
                <SelectArea id="type-select" value={typeSelected} change={(e) => setType(e.target.value)}>
                    {types.map((type) => {
                        return(
                            <option value={type.value}>{type.title}</option>
                        )
                    })}
                </SelectArea>
            </InputContent>
        </Main>
    )
}