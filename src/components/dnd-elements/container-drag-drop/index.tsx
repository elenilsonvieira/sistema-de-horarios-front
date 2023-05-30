import { useState, useMemo, useCallback, useEffect } from "react";

import { Main, BusyCard} from "./styles";

import { useDrop } from "react-dnd";
import { LessonModel } from "../../../api/model/LessonModel";
import { CardDND } from "../card-drag-drop";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { LessonController } from "../../../api/controller/LessonController";
import useRefreshContext from "../../../hooks/useRefreshContext";

interface IntfcContainerDND {
  idClass: string,
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
  idClass
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
        lessonController.update(lessonUpdate.uuid, lessonUpdate).then(() => {
          refreshBool()
          location.reload()
        });
      }
    },
    [lesson, setLesson]
  );

  const [, dropRef] = useDrop({
    accept: "CARD",
    drop: (item: { lesson: any; uuid: string }, monitor) => {
      let updateLesson = item.lesson;
      updateLesson.interval = interval;
      updateLesson.turma = {name: turma, uuid: idClass}
      
      updateIntervalInLesson(updateLesson);
    },
  });

  useEffect(() => {
    setLesson(listLesson.filter(ls => ls.interval.uuid === id && ls.turma.uuid === idClass)[0])
  }, [listLesson])
  
  return (
    <Main onChange={change} ref={dropRef}>
      {/* {console.log(listLesson)} */}
      {/* {console.log(lesson)} */}
      {listLesson.includes(lesson) ? (
        <CardDND lesson={lesson} key={lesson.uuid} dropRef={dropRef} />
      ):
        lesson && lesson.turma.uuid === idClass && <BusyCard>Card Ocupado</BusyCard>
      }
    </Main>
  );
};
