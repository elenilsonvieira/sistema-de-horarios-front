import { useCallback, useState } from "react"
import { Main } from './styles'

import { ListDND } from "../list-drag-drop";
import { LessonModel } from "../../../api/model/LessonModel";


interface IntfcBoard {
    label: string;
    listLesson: LessonModel[];
    change?: (event: any) => void;
}

export const BoardList: React.FC<IntfcBoard> = ({ label, listLesson, change }: IntfcBoard) => {

    return (
        <Main onChange={change} >
            <header>
                <h2>{label}</h2>
            </header>
            <ListDND listLesson={listLesson} />
        </ Main>
    )
}