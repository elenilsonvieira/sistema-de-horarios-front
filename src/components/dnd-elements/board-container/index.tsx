import { useId } from "react"
import { Main } from './styles';

import { ContainerDND } from '../container-drag-drop';
import { useDrop } from "react-dnd";
import { LessonModel } from "../../../api/model/LessonModel";
import { IntervalModel } from "../../../api/model/IntervalModel";
import { GapEnum } from "./Enums/GapEnum";
import { ShiftEnum } from "./Enums/ShiftEnum";
import { WeekDayEnum } from "./Enums/WeekDayEnum";


interface IntfcBoard {
    label: string;
    listLesson: LessonModel[];
    intervalList: IntervalModel[];
    change?: (event: any) => void;
}

export const BoardContainer: React.FC<IntfcBoard> = ({ label, listLesson, intervalList, change }: IntfcBoard) => {

    function getUuidInterval(week: string, gap: string, shift: string) {
        return intervalList.filter((i) => i.gapDTO.gap === gap && i.shiftDTO.shift === shift && i.weekDayDTO.dayOfWeek === week)[0].uuid
    }

    return (
        <Main onChange={change}>
            <div>
                <header>
                    <h2 className="center">{label}</h2>
                </header>
                <br />
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <td className="center">Segunda</td>
                            <td className="center">Terça</td>
                            <td className="center">Quarta</td>
                            <td className="center">Quinta</td>
                            <td className="center">Sexta</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th>18:30</th>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[0], GapEnum[0], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[0]} gap={GapEnum[0]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[1], GapEnum[0], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[1]} gap={GapEnum[0]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[2], GapEnum[0], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[2]} gap={GapEnum[0]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[3], GapEnum[0], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[3]} gap={GapEnum[0]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[4], GapEnum[0], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[4]} gap={GapEnum[0]} shift={ShiftEnum[2]} /></td>
                        </tr>
                        <tr>
                            <th>19:20</th>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[0], GapEnum[1], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[0]} gap={GapEnum[1]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[1], GapEnum[1], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[1]} gap={GapEnum[1]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[2], GapEnum[1], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[2]} gap={GapEnum[1]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[3], GapEnum[1], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[3]} gap={GapEnum[1]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[4], GapEnum[1], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[4]} gap={GapEnum[1]} shift={ShiftEnum[2]} /></td>
                        </tr>
                        <tr>
                            <th>20:20</th>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[0], GapEnum[2], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[0]} gap={GapEnum[2]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[1], GapEnum[2], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[1]} gap={GapEnum[2]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[2], GapEnum[2], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[2]} gap={GapEnum[2]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[3], GapEnum[2], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[3]} gap={GapEnum[2]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[4], GapEnum[2], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[4]} gap={GapEnum[2]} shift={ShiftEnum[2]} /></td>
                        </tr>
                        <tr>
                            <th>21:10</th>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[0], GapEnum[3], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[0]} gap={GapEnum[3]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[1], GapEnum[3], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[1]} gap={GapEnum[3]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[2], GapEnum[3], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[2]} gap={GapEnum[3]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[3], GapEnum[3], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[3]} gap={GapEnum[3]} shift={ShiftEnum[2]} /></td>
                            <td><ContainerDND key={useId()} id={getUuidInterval(WeekDayEnum[4], GapEnum[3], ShiftEnum[2])} listLesson={listLesson} listInterval={intervalList} turma={label} weekDay={WeekDayEnum[4]} gap={GapEnum[3]} shift={ShiftEnum[2]} /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ Main>
    )
}