import { useState, useMemo, useCallback, useEffect } from 'react';

import { Main, BusyCard } from './styles';

import { useDrop } from 'react-dnd';
import { LessonModel } from '../../../api/model/LessonModel';
import { CardDND } from '../card-drag-drop';
import { IntervalModel } from '../../../api/model/IntervalModel';
import { LessonController } from '../../../api/controller/LessonController';
import useRefreshContext from '../../../hooks/useRefreshContext';

interface IntfcContainerDND {
  idClass: string;
  id: string;
  listLesson: LessonModel[];
  listInterval: IntervalModel[];
  gap: string;
  shift: string;
  weekDay: string;
  lessonModel?: LessonModel;
  turma: string;
  defaultListLesson: LessonModel[];
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
  defaultListLesson,
  turma,
  change,
  idClass,
}: IntfcContainerDND) => {
  const [interval, setInterval] = useState<IntervalModel>({
    gapDTO: gap,
    shiftDTO: shift,
    weekDayDTO: weekDay,
    uuid: id,
  });

  const [lesson, setLesson] = useState<LessonModel>();
  const { bool, refreshBool } = useRefreshContext();

  // Mesmo que acuse que o valor nunca é lido, NÃO REMOVA ESSE MÉTODO
  // Garantirá que a atualização dinâmica dos cards de forma rápida seja feita
  const assigningLesson = useMemo(() => {
    if (listLesson.length > 0) {
      listLesson.forEach((lesson) =>
        interval &&
          lesson.interval &&
          lesson.interval.uuid === interval.uuid &&
          lesson.turma.name === turma
          ? setLesson(lesson)
          : null,
      );
    }
  }, [interval, bool]);

  const updateIntervalInLesson = useCallback(
    (lessonUpdate: LessonModel) => {
      if (lessonUpdate) {
        setLesson(lessonUpdate);
        lessonController.update(lessonUpdate.uuid, lessonUpdate).then(() => {
          refreshBool();
        });
      }
    },
    [lesson, setLesson, bool],
  );
  
  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop: (item: { lesson: any; uuid: string }, monitor) => {
      const updateLesson = item.lesson;
      updateLesson.turma = { name: turma, uuid: idClass };
      
      let lessonInCard = listLesson.filter((l) => l.uuid !== updateLesson.uuid && l.interval && l.interval.uuid === interval.uuid)[0]
      
      if (lessonInCard && lessonInCard.turma.uuid === updateLesson.turma.uuid) {
        if (!updateLesson.interval || updateLesson.turma.uuid === 'default') {
          lessonInCard.turma = {uuid: "default", name: "-1 Periodo Padrao", course_uuid: null}
        }else{
          lessonInCard.interval = updateLesson.interval
        }
        updateIntervalInLesson(lessonInCard);
      }

      updateLesson.interval = interval;
      updateIntervalInLesson(updateLesson)
    },
  });

  useEffect(() => {
    setLesson(
      listLesson.filter(
        (ls) =>
          ls.interval != null &&
          ls.interval.uuid === id &&
          ls.turma.uuid === idClass,
      )[0],
    );
  }, [listLesson, bool]);

  return (
    <Main onChange={change} ref={dropRef}>
      {lesson && listLesson.includes(lesson) ? (
        <CardDND lesson={lesson} key={lesson.uuid} dropRef={dropRef} />
      ) : (
        listLesson.filter((l) => l.uuid === lesson?.uuid)[0] &&
        lesson?.turma.uuid === idClass && <BusyCard>Card Ocupado</BusyCard>
      )}
    </Main>
  );
};
