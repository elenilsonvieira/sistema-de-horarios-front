import {useCallback, useState} from "react"
import {Main} from './styles';

import {ContainerDND} from '../container-drag-drop/index';
import {LessonModel} from "../../../api/model/LessonModel";


interface IntfcBoard {
    label: string;
    listLesson: LessonModel[];
    change?: (event:any) => void;
}

export const BoardContainer: React.FC<IntfcBoard> = ({label, listLesson, change}: IntfcBoard) => {
    
    return (
        <Main onChange={change} >
            <div>
                <header>
                    <h2>{label}</h2>
                </header>
                <br/>
                <tr>
                    <th></th>
                    <td>Segunda</td>
                    <td>Terça</td>
                    <td>Quarta</td>
                    <td>Quinta</td>
                    <td>Sexta</td>
                </tr>
                <tr>
                    <th>18:30</th>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                </tr>
                <tr>
                    <th>19:20</th>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                </tr>
                <tr>
                    <th>20:20</th>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                </tr>
                <tr>
                    <th>21:10</th>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                    <td><ContainerDND listLesson={listLesson} /></td>
                </tr>
            </div>
        </ Main>
    )
}