import React, {useState} from "react"
import {Main,
    TabsBar,
    Tab,
    TabLabel,} from './styles';

import {Calendar,
    Classroom,
    Course,
    CurricularComponent,
    Professor,
    Turma,
    Lesson} from './models';

enum TypeLabeEnuml {
    classroom = 'Sala de Aula',
    professor = 'Professor',
    calendar = 'Calendário',
    course = 'Curso',
    turma = 'Turma',
    curricularComponent = 'Disciplina',
    lesson = 'Aula',
};

const models = [
    {
        id: 'aaa',
        type: 'professor',
        title: 'Professor',
        checked: true,
    },
    {
        id: 'bbb',
        type: 'classroom',
        title: 'Sala de aula'
    },
    {
        id: 'ccc',
        type: 'curricular_component',
        title: 'Disciplina'
    },
    {
        id: 'ddd',
        type: 'calendar',
        title: 'Calendário'
    },
    {
        id: 'eee',
        type: 'turma',
        title: 'Turma'
    },
    {
        id: 'fff',
        type: 'course',
        title: 'Curso'
    },
    {
        id: 'ggg',
        type: 'lesson',
        title: 'Aula'
    },
]

export const EditInfo = () => {
    const [type, setType] = useState('professor');

    function handleChangeType(event:any) {
        setType(event.target.value); 
        console.log(event.target.value)
    }

    return (
        <Main>
            <TabsBar>
                {models.map((model) => {
                    return(
                        <Tab key={model.id}>
                            <input type='radio' defaultChecked={model.checked} value={model.type} id={model.type} name='type-select' onClick={(e) => handleChangeType(e)}/>
                            <TabLabel htmlFor={model.type}>
                                <span>{model.title}</span>
                            </TabLabel>
                        </Tab>
                    )
                })}
            </TabsBar>
            <div className="list-items">
                {type === 'classroom' && 
                    <Classroom />
                }
                {type === 'professor' && 
                    <Professor />
                }
                {type === 'course' && 
                    <Course />
                }
                {type === 'curricular_component' &&
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
            </div>
        </Main>
    )
}