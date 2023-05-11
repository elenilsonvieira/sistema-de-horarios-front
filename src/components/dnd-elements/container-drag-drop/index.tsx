import { useState, useMemo, useCallback } from "react";

import { Main } from "./styles";

import { useDrop } from "react-dnd";
import { LessonModel } from "../../../api/model/LessonModel";
import { CardDND } from "../card-drag-drop";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { LessonController } from "../../../api/controller/LessonController";
import useRefreshContext from "../../../hooks/useRefreshContext";

interface IntfcContainerDND {
  id: string;
  listLesson: LessonModel[];
  listInterval: IntervalModel[];
  gap: string;
  shift: string;
  weekDay: string;
  lessonModel?: LessonModel;
  turma: string;

  change?: (event: any) => void;
}

const lessonController = LessonController.getInstance();
export const ContainerDND: React.FC<IntfcContainerDND> = ({
  id,
  listLesson,
  gap,
  shift,
  weekDay,
  listInterval,
  turma,
  change,
}: IntfcContainerDND) => {

  const [interval, setInterval] = useState<IntervalModel>({
    gapDTO: gap,
    shiftDTO: shift,
    weekDayDTO: weekDay,
    uuid: id,
  });

  const [lesson, setLesson] = useState<LessonModel>();
  const { refreshBool } = useRefreshContext()

  // const assigningInterval = useMemo(() => {

  //   if (listInterval.length > 0) {
  //     listInterval.forEach((interval) =>
  //       interval.gapDTO.gap === gap &&
  //       interval.shiftDTO.shift === shift &&
  //       interval.weekDayDTO.dayOfWeek === weekDay
  //         ? setInterval(interval)
  //         : null
  //     );
  //   }
  // }, []);

  const assigningLesson = useMemo(() => {
    turma = turma.split("º")[0] + turma.split("º")[1]
    turma = turma.replace("í", "i")
    // console.log(listLesson);


    if (listLesson.length > 0) {
      listLesson.forEach((lesson) =>
        interval &&
          lesson.interval &&
          lesson.interval.uuid === interval.uuid &&
          lesson.turma.name === turma
          ? setLesson(lesson)
          : null
      );
    }
  }, [interval]);

  const updateIntervalInLesson = useCallback(
    (lessonUpdate: LessonModel) => {
      if (lessonUpdate) {
        setLesson(lessonUpdate);
        lessonController.update(lessonUpdate.uuid, lessonUpdate).then(() => refreshBool());
      }
    },
    [lesson, setLesson]
  );

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop: (item: { lesson: any; uuid: string }, monitor) => {
      let updateLesson = item.lesson;
      updateLesson.interval = interval;
      updateIntervalInLesson(updateLesson);
    },
  });

  return (
    <Main onChange={change} ref={dropRef}>
      {lesson && (
        <CardDND lesson={lesson} key={lesson.uuid} dropRef={dropRef} />
      )}
    </Main>
  );
};
