import { useState, useEffect } from "react"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import {Main} from './styles';
import { LessonModel } from '../../../api/model/LessonModel';
import {lessonReadControllerView} from "./lessonReadControllerView";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { intervalReadControllerView } from "./intervalReadControllerView";
import { BoardContainer } from "../../../components/dnd-elements/board-container";
import { BoardList } from '../../../components/dnd-elements/board-list';

export const SetSchedules = () => {

    const [lessonList, setListLesson] = useState<LessonModel[]>();
    const [intervalList, setListInterval] = useState<IntervalModel[]>();
    
    const load =  async () => {
        try {
            const lesson  = await lessonReadControllerView();
            const interval  = await intervalReadControllerView();
            
            setListLesson(lesson);
            setListInterval(interval);
        }catch (Error:any){
        }
    }

    useEffect(() => {
        load();
    },[])
 

    return (
        <DndProvider backend={HTML5Backend}>
            <Main>
                {lessonList && intervalList ? (
                    <>
                    <div>
                        <BoardList label={'Aulas Livres'} listLesson={lessonList}/>
                    </div>
                    <div>
                        <BoardContainer label={'1º Período'} listLesson={lessonList} intervalList={intervalList}/>
                        <BoardContainer label={'2º Período'} listLesson={lessonList} intervalList={intervalList}/>
                        <BoardContainer label={'3º Período'} listLesson={lessonList} intervalList={intervalList}/>
                        <BoardContainer label={'4º Período'} listLesson={lessonList} intervalList={intervalList}/>
                        <BoardContainer label={'5º Período'} listLesson={lessonList} intervalList={intervalList}/>
                        <BoardContainer label={'6º Período'} listLesson={lessonList} intervalList={intervalList}/>
                        <BoardContainer label={'7º Período'} listLesson={lessonList} intervalList={intervalList}/>
                    </div>
                    </>
                ) : (
                    <p>Não há itens</p>
                )}
            </Main>
        </DndProvider>
    )
}