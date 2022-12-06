import {useCallback, useState} from "react"
import {Main} from './styles';

import {ListContainer} from '../list-container/index';
import {LessonModel} from "../../../api/model/LessonModel";
import {LessonController} from "../../../api/controller/LessonController";

interface BoardC {
    change?: (event:any) => void;
}

export const BoardContainer: React.FC<BoardC> = ({change}: BoardC) => {
    
    const findLessons = useCallback(() => {
        let newLessons:LessonModel[] = [];
        let lessons  = Promise.resolve(LessonController.getInstance().list());
        lessons.then((value) => {
            newLessons = value;
            });
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