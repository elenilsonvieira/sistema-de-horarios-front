import React from "react";

import {Main} from './styles';

import { useDrop } from 'react-dnd';
import {LessonModel} from "../../../api/model/LessonModel";
import {CardDND} from "../card-drag-drop/index";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { TurmaModel } from "../../../api/model/TurmaModel";

interface IntfcContainerDND {
    listLesson: LessonModel[];
    interval?: IntervalModel;
    turma?: TurmaModel;

    change?: (event:any) => void;
}

export const ContainerDND: React.FC<IntfcContainerDND> = ({listLesson, change}: IntfcContainerDND) => {

    console.log(listLesson.length)
    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item: any, monitor) {
            listLesson.push(item)
            console.log(listLesson.length)
        }
    })

    return (
        <Main onChange={change} >
            {listLesson.map((card, index) => <CardDND lesson={card} index={index}/>)}
        </ Main>
    )
}