import React, {useState} from "react";
import {SelectArea} from '../../../components';

import {Main, WrapperContainer, TypesContainer, FormContainer, Tab, TypeLabel} from './styles'

import {Calendar,
    Classroom,
    Course,
    CurricularComponent,
    Professor,
    Turma,
    Lesson} from './models'


enum TypeLabeEnuml {
    classroom = 'Sala de Aula',
    professor = 'Professor',
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
            <SelectArea id="type-select" value={typeSelected} change={(e) => setType(e.target.value)}>
                {types.map((type) => {
                    return(
                        <option value={type.value}>{type.title}</option>
                    )
                })}
            </SelectArea>
        </Main>
    )
}