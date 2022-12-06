import React from "react";

import {Main, Label} from './styles';
import {LessonModel} from "../../../api/model/LessonModel";

interface CDragDrop {
    index: number;
    uuid?: string;
    lesson: LessonModel;
    change?: (event:any) => void;
}

export const CardDragDrop: React.FC<CDragDrop> = ({lesson, index, change}: CDragDrop) => {
    return (
        <Main id={lesson.uuid} onChange={change} >
            <header>
                <h2>{lesson.curricularComponent.name}</h2>
            </header>
            <button type="button" >Edit</button>
            <p>{lesson.professor.name}</p>
            <p>{lesson.turma.name}</p>
        </ Main>
    )
}