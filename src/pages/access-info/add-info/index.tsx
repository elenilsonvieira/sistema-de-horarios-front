import React, {useState} from "react";

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
    const [type, setType] = useState('professor');

    function handleChangeType(event:any) {
        setType(event.target.value);
    }

    return (
        <Main>
            <WrapperContainer>
                <FormContainer>
                    <Tab>
                        <h1>
                            {(TypeLabeEnuml as any)[type]}
                        </h1>
                    </Tab>
                    {type === 'classroom' && 
                        <Classroom />
                    }
                    {type === 'professor' && 
                        <Professor />
                    }
                    {type === 'course' && 
                        <Course />
                    }
                    {type === 'curricularComponent' &&
                        <CurricularComponent />
                    }
                    {type === 'calendar' &&
                        <Calendar />
                    }
                    {type === 'turma' &&
                        <Turma />
                    }
                    {type === 'lesson' &&
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
        </Main>
    )
}