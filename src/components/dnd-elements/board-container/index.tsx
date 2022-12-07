import {useCallback, useState} from "react"
import {Main} from './styles';

import {ListContainer} from '../list-container/index';
import {LessonModel} from "../../../api/model/LessonModel";
import {LessonController} from "../../../api/controller/LessonController";
import {bd} from '../../../bdsimulator/bd';

interface BoardC {
    change?: (event:any) => void;
}

export const BoardContainer: React.FC<BoardC> = ({change}: BoardC) => {
    
    const findLessons = useCallback(() => {
        let newLessons:LessonModel[] = [];
        let lessons  = bd.getLessons();
        newLessons = lessons;
        return newLessons;
      }, []);
    
    const [listLesson, setListLesson] = useState(findLessons);

    return (
        <Main onChange={change} >
            <ListContainer listLesson={listLesson} label={'Aulas'}/>
            <ListContainer listLesson={listLesson} label={'Destino'}/>
        </ Main>
    )
}