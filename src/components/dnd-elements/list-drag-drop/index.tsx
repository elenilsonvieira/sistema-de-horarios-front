import React from "react";

import {Main} from './styles'

import { useDrop } from 'react-dnd';
import {LessonModel} from "../../../api/model/LessonModel";
import {CardDND} from "../card-drag-drop/index";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { TurmaModel } from "../../../api/model/TurmaModel";

interface IntfcContainerDND {
    listLesson: LessonModel[];
    lessonModel?:LessonModel;
    interval?: IntervalModel;

    change?: (event:any) => void;
}

export const ListDND: React.FC<IntfcContainerDND> = ({listLesson, change}: IntfcContainerDND) => {

    console.log(listLesson.length)
    const [{ isOver }, drop] = useDrop({
        accept: "CARD",
        collect: (monitor: any) => ({
            isOver: monitor.isOver(),
        }),
    });

    return (
        <Main onChange={change} >
            {listLesson.map((card, index) => (
                card.interval === null
                ? (<CardDND lesson={card} index={index}/>)
                : null
            ))}   
        </ Main>
    )
}