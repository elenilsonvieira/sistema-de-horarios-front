import Modal from 'react-modal';
import { useState } from "react"
import { useDrag } from 'react-dnd';

import {Main} from './styles';
import {LessonModel} from "../../../api/model/LessonModel";
import { LessonModal } from './modal-edit-lesson';

interface IntfcCard {
    uuid?: string;
    lesson: LessonModel;
    change?: (event:any) => void;
}

export const CardDND: React.FC<IntfcCard> = ({lesson, change}: IntfcCard) => {
    const [modalStatus, setModalStatus] = useState(false)

    function handleModal(){
        if(modalStatus === false){
            setModalStatus(true)
        }else{
            setModalStatus(false)
        }
    }

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };
      
    
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
                <h2>{lesson.curricularComponent.name}</h2><button type="button" onClick={handleModal}>Edit</button>
            </header>
            {lesson.professor && <p>{lesson.professor.name}</p>}
            {lesson.classroom && <p>{lesson.classroom.classBlockDTO.block+" - "+lesson.classroom.name}</p>}
            <Modal
                isOpen={modalStatus}
                onRequestClose={handleModal}
                style={customStyles}
                contentLabel="Editar Aula"
            >
                <LessonModal lessonModal={lesson}/>
                <button type="button" onClick={handleModal}>Voltar</button>
            </Modal>
        </ Main>
    )
}