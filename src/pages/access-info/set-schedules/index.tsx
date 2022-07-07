import React, {useEffect, useState} from "react";
import {InfoIcon, Expandir} from '../../../assets/img';
import {SelectArea, InputContent, ButtonEdit, ButtonCancel, ButtonDelete, ButtonConcluir} from '../../../components';
import {ActionContainer, ExpandDetails, RowVisualizer} from '../edit-info/models/styles/styles';
import {Main, SelectContainer, Info, Title, ContainerFilters, ContainerLessons, IntervalContainer} from './styles';

//vetores para exemplos
const turmasADS = [
    {
        id: 'uhiu',
        nome: '1º Período',
    },
    {
        id: 'saae',
        nome: '2º Período',
    },
    {
        id: 'qwdd',
        nome: '3º Período',
    },
    {
        id: 'gghf',
        nome: '4º Período',
    },
]

const turmasTCE = [
    {
        id: 'uhqu',
        nome: '1º Período',
    },
    {
        id: 'yrtd',
        nome: '2º Período',
    },
    {
        id: 'drgn',
        nome: '3º Período',
    },
]

const tce1 =[
    {
        id: '1-1p',
        semester: '2022.2',
        classroom: 'Sala1 - Bloco A',
        disciplina: 'engenharia 1',
        professor: 'aaa',
        interval: null
    },
    {
        id: '2-1p',
        semester: '2022.2',
        classroom: 'Sala2 - Bloco A',
        disciplina: 'concreto 1',
        professor: 'aaa',
        interval: null
    },
    {
        id: '3-1p',
        semester: '2022.2',
        classroom: 'Sala3 - Bloco A',
        disciplina: 'seguranca 1',
        professor: 'aaa',
        interval: null
    },
]

const tce2 =[
    {
        id: '1-2p',
        semester: '2022.2',
        classroom: 'Sala1 - Bloco A',
        disciplina: 'engenharia 2',
        professor: 'bbb',
        interval: null
    },
    {
        id: '2-2p',
        semester: '2022.2',
        classroom: 'Sala2 - Bloco A',
        disciplina: 'concreto 2',
        professor: 'bbb',
        interval: null
    },
    {
        id: '3-2p',
        semester: '2022.2',
        classroom: 'Sala3 - Bloco A',
        disciplina: 'seguranca 2',
        professor: 'bbb',
        interval: null
    },
]

const tce3 =[
    {
        id: '1-3p',
        semester: '2022.2',
        classroom: 'Sala1 - Bloco A',
        disciplina: 'engenharia 3',
        professor: 'bbb',
        interval: null
    },
    {
        id: '2-3p',
        semester: '2022.2',
        classroom: 'Sala2 - Bloco A',
        disciplina: 'concreto 3',
        professor: 'bbb',
        interval: 'informações do intervalo'
    },
    {
        id: '3-3p',
        semester: '2022.2',
        classroom: 'Sala3 - Bloco A',
        disciplina: 'seguranca 3',
        professor: 'bbb',
        interval: null
    },
]

const ads1 =[
    {
        id: '1-1p',
        semester: '2022.2',
        classroom: 'Sala1 - Bloco A',
        disciplina: 'programacao 1',
        professor: 'aaa',
        interval: null
    },
    {
        id: '2-1p',
        semester: '2022.2',
        classroom: 'Sala2 - Bloco A',
        disciplina: 'metodologia',
        professor: 'aaa',
        interval: null
    },
    {
        id: '3-1p',
        semester: '2022.2',
        classroom: 'Sala3 - Bloco A',
        disciplina: 'inglês',
        professor: 'aaa',
        interval: null
    },
]

const ads2 =[
    {
        id: '1-2p',
        semester: '2022.2',
        classroom: 'Sala1 - Bloco A',
        disciplina: 'bd1',
        professor: 'bbb',
        interval: 'informações do intervalo'
    },
    {
        id: '2-2p',
        semester: '2022.2',
        classroom: 'Sala2 - Bloco A',
        disciplina: 'programacao 2',
        professor: 'bbb',
        interval: null
    },
    {
        id: '3-2p',
        semester: '2022.2',
        classroom: 'Sala3 - Bloco A',
        disciplina: 'portugues 2',
        professor: 'bbb',
        interval: null
    },
]

const ads3 =[
    {
        id: '1-3p',
        semester: '2022.2',
        classroom: 'Sala1 - Bloco A',
        disciplina: 'eda',
        professor: 'bbb',
        interval: null
    },
    {
        id: '2-3p',
        semester: '2022.2',
        classroom: 'Sala2 - Bloco A',
        disciplina: 'bd2',
        professor: 'bbb',
        interval: null
    },
    {
        id: '3-3p',
        semester: '2022.2',
        classroom: 'Sala3 - Bloco A',
        disciplina: 'aps',
        professor: 'bbb',
        interval: 'informações do intervalo'
    },
]

const ads4 =[
    {
        id: '1-4p',
        semester: '2022.2',
        classroom: 'Sala1 - Bloco A',
        disciplina: 'pj2',
        professor: 'bbb',
        interval: 'informações do intervalo'
    },
    {
        id: '2-4p',
        semester: '2022.2',
        classroom: 'Sala2 - Bloco A',
        disciplina: 'tcc',
        professor: 'bbb',
        interval: null
    },
]

interface LessonProps {
    id: string;
    semester: string;
    classroom: string;
    disciplina: string;
    professor: string;
    interval: any;
}

interface TurmasProps {
    id: string;
    nome: string;
}

const SetSchedules = () => {
    const [course, setCourse] = useState<string>('');
    const [turmas, setTurmas] = useState<TurmasProps[]>();
    const [turmaAtual, setTurmaAtual] = useState<string>(turmas ? turmas[0].nome : '');
    const [lessons, setLessons] = useState<LessonProps[]>();

    const handleShowLessons = (course: string) => {
        if(course==='ads'){
            switch(turmaAtual){
                case '1º Período':
                    setLessons(ads1);
                    break;
                case '2º Período':
                    setLessons(ads2);
                    break;
                case '3º Período':
                    setLessons(ads3);
                    break;
                case '4º Período':
                    setLessons(ads4);
                    break;
                default:
                    setLessons(undefined);
            }
        } else if (course==='tce') {
            switch(turmaAtual){
                case '1º Período':
                    setLessons(tce1);
                    break;
                case '2º Período':
                    setLessons(tce2);
                    break;
                case '3º Período':
                    setLessons(tce3);
                    break;
                default:
                    setLessons(undefined);
            }
        }
    }

    const handleSelectedCourse = () => {
        if(course==='ads'){
            setTurmas(turmasADS);
        } else if (course==='tce') {
            setTurmas(turmasTCE);
        } else {
            setTurmas(undefined);
        }
        setTurmaAtual(turmas ? turmas[0].nome : '');
    }

    useEffect(() => {
        handleSelectedCourse();
    }, [course, turmas]);

    useEffect(() => {
        handleShowLessons(course);
    }, [turmaAtual, course, turmas]);

    
    return (
        <Main>
            <Title>
                Montar horários
            </Title>
            <ContainerFilters>
                {course==="" &&
                    <Info>
                        <img src={InfoIcon} alt="" />
                        <span>
                            Filtre por curso e turma para acessar as aulas.
                        </span>
                    </Info>
                }
                <SelectContainer>
                    <InputContent labelText="Selecione o curso:">
                        <SelectArea id={"course"} change={(e) => setCourse(e.target.value)}>
                            {course === '' &&
                                <option value="">Selecione um curso</option>
                            }
                            <option value="ads">ADS</option>
                            <option value="tce">TCE</option>
                        </SelectArea>
                    </InputContent>
                    <InputContent labelText="Selecione a turma:">
                        <SelectArea id={`turma-${course}`} change={(e) => setTurmaAtual(e.target.value)}>
                            {turmas ? turmas.map((turma) => (
                                <option key={turma.id} value={turma.nome}>{turma.nome}</option>
                            )) :
                                <option value="">Selecione um curso</option>
                            }
                        </SelectArea>
                    </InputContent>
                </SelectContainer>
            </ContainerFilters>
            <ContainerLessons>
            {lessons != null ? (
                lessons.map((lesson, index) => {
                    return (
                        <RowVisualizer key={lesson.id}>
                            <input type="radio" name='view-info' id={'expand-radio'+index}/>
                            <div>
                                <span>Aula {index+1} - {lesson.disciplina}</span>
                                <label htmlFor={'expand-radio'+index}>
                                    <img src={Expandir} alt=""/>
                                </label>

                            </div>
                            <ExpandDetails className='expand'>
                                <div>
                                    <span className='title'>Semestre:</span>
                                    <span className='info'>{lesson.semester}</span>
                                </div>
                                <div>
                                    <span className='title'>Sala de aula:</span>
                                    <span className='info'>{lesson.classroom}</span>
                                </div>
                                <div>
                                    <span className='title'>Disciplina:</span>
                                    <span className='info'>{lesson.disciplina}</span>
                                </div>
                                <div>
                                    {lesson.interval !== null ? 
                                    <>
                                        <span className='title'>Intervalo:</span>
                                        <span className='info'>{lesson.interval}</span>
                                    </>
                                        :
                                        <IntervalContainer>
                                            <div>
                                                <span className='title'>Dia da semana:</span>
                                                <SelectArea id={'c'+index}>
                                                    <option value="">segunda</option>
                                                    <option value="">terca</option>
                                                    <option value="">quarta</option>
                                                </SelectArea>
                                            </div>
                                            <div>
                                                <span className='title'>Turno:</span>
                                                <SelectArea id={'c'+index}>
                                                    <option value="">manhâ</option>
                                                    <option value="">tarde</option>
                                                    <option value="">noite</option>
                                                </SelectArea>
                                            </div>
                                            <div>
                                                <span className='title'>Horário:</span>
                                                <SelectArea id={'c'+index}>
                                                    <option value="">07:00</option>
                                                    <option value="">13:00</option>
                                                    <option value="">18:00</option>
                                                </SelectArea>
                                            </div>
                                        </IntervalContainer>
                                    }
                                </div>
                                <ActionContainer>
                                    {lesson.interval === null ?
                                        <ButtonConcluir />
                                        :
                                        <ButtonCancel /> //seta o intervalo da aula atual como null
                                    }
                                </ActionContainer>
                            </ExpandDetails>
                        </RowVisualizer>
                    )
                })
            ) : (
                <p>Não há itens</p>
            )}
            </ContainerLessons>
        </Main>
    )
}

export {SetSchedules};