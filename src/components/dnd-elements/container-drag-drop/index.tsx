import { useState, useMemo } from "react"

import { Main } from './styles';

import { useDrop } from 'react-dnd';
import { LessonModel } from "../../../api/model/LessonModel";
import { CardDND } from "../card-drag-drop";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { LessonController } from "../../../api/controller/LessonController";
import {data} from "jquery";

interface IntfcContainerDND {
    listLesson: LessonModel[];
    listInterval: IntervalModel[];
    gap: string;
    shift: string
    weekDay: string;
    lessonModel?: LessonModel;
    turma: string;

    change?: (event: any) => void;
}

const lessonController = LessonController.getInstance();
export const ContainerDND: React.FC<IntfcContainerDND> = ({ listLesson, gap, shift, weekDay, listInterval, turma, change }: IntfcContainerDND) => {

    const [interval, setInterval] = useState<IntervalModel>();
    const [lesson, setLesson] = useState<LessonModel>();

    const assigningInterval = useMemo(() => {
        if (listInterval.length > 0) {
            listInterval.forEach((interval) => (
                interval.gapDTO.gap === gap && interval.shiftDTO.shift === shift && interval.weekDayDTO.dayOfWeek === weekDay
                    ? setInterval(interval)
                    : null
            ));
        }
    }, []);

    const assigningLesson = useMemo(() => {
        if (listLesson.length > 0) {
            listLesson.forEach((lesson) => (
                interval && lesson.interval && lesson.interval.uuid === interval.uuid && lesson.turma.name === turma
                    ? setLesson(lesson)
                    : null
            ));
        }
    }, [interval]);

    const updateIntervalInLesson = (lessonUpdate: LessonModel) => {
        if (lessonUpdate) {
            lessonUpdate.interval = interval;
            setLesson(lessonUpdate);
            if (lesson) {
                lessonController.update(lesson.uuid, lesson).then(() => {})
            }
        }
    }

    const [, dropRef] = useDrop({
        accept: "CARD",
        hover(item: { lesson: any, uuid: string}, monitor){
            console.log(item.lesson);
            console.log(listLesson)
        },
        collect: (monitor: any) => ({
            // item: updateIntervalInLesson(monitor.getItem()),
        })

    });


    return (
        <Main onChange={change} ref={dropRef}>
            {lesson && (<CardDND lesson={lesson} key={lesson.uuid} dropRef={dropRef}/>)}
        </Main>
    )
}