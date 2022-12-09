import {useEffect, useState} from "react"

import {Main} from './styles';

import { useDrop } from 'react-dnd';
import {LessonModel} from "../../../api/model/LessonModel";
import {CardDND} from "../card-drag-drop/index";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { TurmaModel } from "../../../api/model/TurmaModel";

interface IntfcContainerDND {
    listLesson: LessonModel[];
    listInterval: IntervalModel[];
    gap: string;
    shift: string
    weekDay: string;
    lessonModel?:LessonModel;
    turma: string;

    change?: (event:any) => void;
}

export const ContainerDND: React.FC<IntfcContainerDND> = ({listLesson, gap, shift, weekDay, listInterval, turma, change}: IntfcContainerDND) => {
    const [interval, setInterval] = useState<IntervalModel>();
    
    useEffect(() => {
        listInterval.map((element) => (
            element.gapDTO.gap === gap && element.shiftDTO.shift === shift && element.weekDayDTO.dayOfWeek === weekDay
            ? setInterval(element)
            : null
        ))
    }, []);
      

    const [{ isOver }, drop] = useDrop({
        accept: "CARD",
        collect: (monitor: any) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <Main onChange={change} >
            {listLesson.map((card, index) => (
                interval && card.interval && card.interval.uuid === interval.uuid && card.turma.name === turma
                ? (<CardDND lesson={card} index={index}/>)
                : null
            ))}  
        </ Main>
    )
}