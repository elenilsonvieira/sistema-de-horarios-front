import {useEffect, useState, useMemo, useCallback} from "react"

import {Main} from './styles';

import { useDrop } from 'react-dnd';
import { LessonModel } from "../../../api/model/LessonModel";
import { CardDND } from "../card-drag-drop/index";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { LessonController } from "../../../api/controller/LessonController";

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

const lessonController  = LessonController.getInstance();
export const ContainerDND: React.FC<IntfcContainerDND> = ({listLesson, gap, shift, weekDay, listInterval, turma, change}: IntfcContainerDND) => {
    const [interval, setInterval] = useState<IntervalModel>();
    const [lesson, setLesson] = useState<LessonModel>();
    
    const assigningInterval = useMemo(() => {
        listInterval.map((interval) => (
           interval.gapDTO.gap === gap && interval.shiftDTO.shift === shift && interval.weekDayDTO.dayOfWeek === weekDay
            ? setInterval(interval)
            : null
        ));
    }, []);

    const assigningLesson = useMemo(() => {
        listLesson.map((lesson) => (
            interval && lesson.interval && lesson.interval.uuid === interval.uuid && lesson.turma.name === turma
            ? setLesson(lesson)
            : null
        ));
    }, [interval]);

    const [{ item }, drop] = useDrop({
        accept: "CARD",
        collect: (monitor: any) => ({
            item: updateIntervalInLesson(monitor.getItem()),
        }),
    });

    const updateIntervalInLesson = (lessonUpdate:LessonModel) => {
        lessonUpdate.interval = interval;
        setLesson(lessonUpdate);
        if(lesson){
            lessonController.update(lesson.uuid, lesson).then(() => {window.location.reload()})
        }
    }

    return (
        <Main onChange={change} ref={drop}>
            {lesson && (<CardDND lesson={lesson} key={lesson.uuid}/>)}
         </ Main>
    )
}