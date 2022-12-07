import React from "react";

import {Main} from './styles';

import {LessonModel} from "../../../api/model/LessonModel";
import {CardDND} from "../card-drag-drop/index";

interface IntfcContainerDND {
    label: string;
    listLesson: LessonModel[];
    change?: (event:any) => void;
}

export const ContainerDND: React.FC<IntfcContainerDND> = ({label, listLesson, change}: IntfcContainerDND) => {

    return (
        <Main onChange={change} >
            <header>
                <h2>{label}</h2>
            </header>
            {listLesson.map((card, index) => <CardDND lesson={card} index={index}/>)}
        </ Main>
    )
}