import React from 'react';

import { Main } from './styles';

import { LessonModel } from '../../../api/model/LessonModel';
import { CardDND } from '../card-drag-drop/index';
import { IntervalModel } from '../../../api/model/IntervalModel';
import { ConnectableElement } from 'react-dnd';

interface IntfcContainerDND {
  listLesson: LessonModel[];
  lessonModel?: LessonModel;
  interval?: IntervalModel;

  change?: (event: any) => void;
}

export const ListDND: React.FC<IntfcContainerDND> = ({
  listLesson,
  change,
}: IntfcContainerDND) => {
  return (
    <Main onChange={change}>
      {listLesson.map((card) =>
        card.turma.uuid === 'default' || !card.interval ? (
          <CardDND
            lesson={card}
            key={card.uuid}
            dropRef={function (
              elementOrNode: ConnectableElement,
              options?: any,
            ): React.ReactElement<
              any,
              string | React.JSXElementConstructor<any>
            > | null {
              throw new Error('Function not implemented.');
            }}
          />
        ) : null,
      )}
    </Main>
  );
};
