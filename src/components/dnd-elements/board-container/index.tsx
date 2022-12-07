import {useCallback, useState} from "react"
import {Main} from './styles';

import {ContainerDND} from '../container-drag-drop/index';
import {LessonModel} from "../../../api/model/LessonModel";
import {LessonController} from "../../../api/controller/LessonController";
import {bd} from '../../../bdsimulator/bd';

interface IntfcBoard {
    change?: (event:any) => void;
}

export const BoardContainer: React.FC<IntfcBoard> = ({change}: IntfcBoard) => {
    
    const findLessons = useCallback(() => {
        let newLessons:LessonModel[] = [];
        let lessons  = bd.getLessons();
        newLessons = lessons;
        return newLessons;
      }, []);
    
    const [listLesson, setListLesson] = useState(findLessons);

    return (
        <Main onChange={change} >
            <ContainerDND listLesson={listLesson} label={'Aulas'}/>
            <ContainerDND listLesson={listLesson} label={'Destino'}/>
        </ Main>
    )
}