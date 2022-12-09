import {useCallback, useState} from "react"
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import {Main} from './styles';
import { LessonModel } from '../../../../api/model/LessonModel';
import { BoardContainer } from "../../../../components/dnd-elements/board-container";
import { BoardList } from '../../../../components/dnd-elements/board-list';

import { LessonController } from '../../../../api/controller/LessonController';
import { bd } from '../../../../bdsimulator/bd';

export const LessonDND = () => {
    
    //só pra teste
    let aaLessons:LessonModel[] = [];

    const findLessons = useCallback(() => {
        let newLessons:LessonModel[] = [];
        let lessons  = bd.getLessons();
        newLessons = lessons;
        return newLessons;
    }, []);
    //só pra teste
 
    const [listLesson, setListLesson] = useState(findLessons);

    return (
        <DndProvider backend={HTML5Backend}>
            <Main>
                <div>
                    <BoardList label={'Aulas Livres'} listLesson={listLesson}/>
                </div>
                <div>
                    <BoardContainer label={'1º Período'} listLesson={listLesson}/>
                    <BoardContainer label={'2º Período'} listLesson={aaLessons}/>
                </div>
            </Main>
        </DndProvider>
    )
}