import React from 'react';
import { useDrag } from 'react-dnd';

import {Main} from './styles';
import {LessonModel} from "../../../api/model/LessonModel";

interface IntfcCard {
    index: number;
    uuid?: string;
    lesson: LessonModel;
    change?: (event:any) => void;
}

export const CardDND: React.FC<IntfcCard> = ({lesson, index, change}: IntfcCard) => {
    
    const [{ isDragging }, dragRef] = useDrag({
        type: "CARD",
        item: () => {
          return { lesson }
        },
        collect: (monitor: any) => ({
          isDragging: monitor.isDragging(),
        }),
      })

    return (
        <Main id={lesson.uuid} onChange={change} ref={dragRef} isDragging={isDragging}>
            <header>
                <h2>{lesson.curricularComponent.name}</h2><button type="button" >Edit</button>
            </header>
            {lesson.professor && <p>{lesson.professor.name}</p>}
            {lesson.classroom && <p>{lesson.classroom.classBlockDTO.block+" - "+lesson.classroom.name}</p>}
        </ Main>
    )
}