import {useCallback, useState} from "react"
import {Main} from './styles';

import {ContainerDND} from '../container-drag-drop/index';
import {LessonModel} from "../../../api/model/LessonModel";
import {LessonController} from "../../../api/controller/LessonController";
import {bd} from '../../../bdsimulator/bd';

interface IntfcBoard {
    label: string;
    change?: (event:any) => void;
}

export const BoardContainer: React.FC<IntfcBoard> = ({label, change}: IntfcBoard) => {
    
    const findLessons = useCallback(() => {
        let newLessons:LessonModel[] = [];
        let lessons  = bd.getLessons();
        newLessons = lessons;
        return newLessons;
      }, []);
    
    const [listLesson, setListLesson] = useState(findLessons);

    return (
        <Main onChange={change} >
             <header>
                <h2>{label}</h2>
            </header>
            <ContainerDND listLesson={listLesson} />
            <ContainerDND listLesson={listLesson} />
        </ Main>
    )
}