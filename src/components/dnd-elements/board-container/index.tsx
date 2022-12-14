import {useEffect, useState, useId} from "react"
import {Main} from './styles';

import {ContainerDND} from '../container-drag-drop/index';
import {LessonModel} from "../../../api/model/LessonModel";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { GapEnum } from "./Enums/GapEnum";
import { ShiftEnum } from "./Enums/ShiftEnum";
import { WeekDayEnum } from "./Enums/WeekDayEnum";


interface IntfcBoard {
    label: string;
    listLesson: LessonModel[];
    intervalList: IntervalModel[];
    change?: (event:any) => void;
}

export const BoardContainer: React.FC<IntfcBoard> = ({label, listLesson, intervalList, change}: IntfcBoard) => {

    return (
        <Main onChange={change} >
            <div>
                <header>
                    <h2 className="center">{label}</h2>
                </header>
                <br/>
                <tr>
                    <th></th>
                    <td className="center">Segunda</td>
                    <td className="center">Terça</td>
                    <td className="center">Quarta</td>
                    <td className="center">Quinta</td>
                    <td className="center">Sexta</td>
                </tr>
                <tr>
                    <th>18:30</th>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[0]} gap={GapEnum[0]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[1]} gap={GapEnum[0]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[2]} gap={GapEnum[0]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[3]} gap={GapEnum[0]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[4]} gap={GapEnum[0]} shift={ShiftEnum[2]}/></td>
                </tr>
                <tr>
                    <th>19:20</th>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[0]} gap={GapEnum[1]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[1]} gap={GapEnum[1]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[2]} gap={GapEnum[1]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[3]} gap={GapEnum[1]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[4]} gap={GapEnum[1]} shift={ShiftEnum[2]}/></td>
                </tr>
                <tr>
                    <th>20:20</th>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[0]} gap={GapEnum[2]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[1]} gap={GapEnum[2]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[2]} gap={GapEnum[2]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[3]} gap={GapEnum[2]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[4]} gap={GapEnum[2]} shift={ShiftEnum[2]}/></td>
                </tr>
                <tr>
                    <th>21:10</th>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[0]} gap={GapEnum[3]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[1]} gap={GapEnum[3]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[2]} gap={GapEnum[3]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[3]} gap={GapEnum[3]} shift={ShiftEnum[2]}/></td>
                    <td><ContainerDND key={useId()} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[4]} gap={GapEnum[3]} shift={ShiftEnum[2]}/></td>
                </tr>
            </div>
        </ Main>
    )
}