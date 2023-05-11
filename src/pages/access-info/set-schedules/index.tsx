import { useState, useEffect } from "react"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { Main } from './styles';
import { LessonModel } from '../../../api/model/LessonModel';
import { lessonReadControllerView } from "./lessonReadControllerView";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { intervalReadControllerView } from "./intervalReadControllerView";
import { BoardContainer } from "../../../components/dnd-elements/board-container";
import { BoardList } from '../../../components/dnd-elements/board-list';
import { TurmaModel } from '../../../../../api/model/TurmaModel';
import useRefreshContext from "../../../hooks/useRefreshContext";
import { turmaReadControllerView } from "../edit-info/models/turma/turmaReadControllerView";

export const SetSchedules = () => {

    const [lessonList, setListLesson] = useState<LessonModel[]>();
    const [intervalList, setListInterval] = useState<IntervalModel[]>();
    const [classList, setClassList] = useState<TurmaModel[]>();


    const { bool } = useRefreshContext()

    const load = async () => {
        try {
            const lesson = await lessonReadControllerView();
            const interval = await intervalReadControllerView();
            const classListt = await turmaReadControllerView();

            setClassList(classListt)
            setListLesson(lesson);
            setListInterval(interval);
        } catch (Error: any) {
        }
    }

    function getIdClass(name: string) {
        return classList?.filter((c) => c.name === name)[0].uuid
    }

    useEffect(() => {
        load();

    }, [bool])


    return (
        <DndProvider backend={HTML5Backend}>
            <Main>
                {lessonList && intervalList && classList ? (
                    <>
                        <div>
                            <BoardList label={'Aulas Livres'} listLesson={lessonList} />
                        </div>
                        <div>
                            <BoardContainer key={"ADS1ºPeriodo"} label={'1º Período'} idClass={getIdClass('1 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS2ºPeriodo"} label={'2º Período'} idClass={getIdClass('2 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS3ºPeriodo"} label={'3º Período'} idClass={getIdClass('3 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS4ºPeriodo"} label={'4º Período'} idClass={getIdClass('4 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS5ºPeriodo"} label={'5º Período'} idClass={getIdClass('5 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS6ºPeriodo"} label={'6º Período'} idClass={getIdClass('6 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                            <BoardContainer key={"ADS7ºPeriodo"} label={'7º Período'} idClass={getIdClass('7 Periodo')} listLesson={lessonList} intervalList={intervalList} />
                        </div>
                    </>
                ) : (
                    <p>Não há itens</p>
                )}
            </Main>
        </DndProvider>
    )
}