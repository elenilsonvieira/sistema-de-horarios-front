import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import {Main} from './styles';
import { BoardContainer } from "../../../../components/dnd-elements/board-container";

export const LessonDND = () => {
    
    return (
        <DndProvider backend={HTML5Backend}>
            <Main>
                <BoardContainer label={'Aulas'}/>
            </Main>
        </DndProvider>
    )
}