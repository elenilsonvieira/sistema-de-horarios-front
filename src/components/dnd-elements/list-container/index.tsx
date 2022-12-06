import React from "react";

import {Main} from './styles';

import {LessonModel} from "../../../api/model/LessonModel";
import {CardDragDrop} from "../card-drag-drop/index";

interface ListC {
    label: string;
    listLesson: LessonModel[];
    change?: (event:any) => void;
}

export const ListContainer: React.FC<ListC> = ({label, listLesson, change}: ListC) => {

    return (
        <Main onChange={change} >
            <header>
                <h2>{label}</h2>
            </header>
            {listLesson.map((card, index) => <CardDragDrop lesson={card} index={index}/>)}
        </ Main>
    )
}