import {LessonModel} from "../../../api/model/LessonModel";
import {LessonController} from "../../../api/controller/LessonController";
import {CourseController} from "../../../api/controller/CourseController";
import {CourseModel} from "../../../api/model/CourseModel";
import { ClassroomModel } from "../../../api/model/ClassroomModel";
import {ClassroomController} from "../../../api/controller/ClassroomController";
import {ClassBlockModel} from "../../../api/model/ClassBlockModel";
import ClassBlockController from "../../../api/controller/ClassBlockController";
import {GapModel} from "../../../api/model/GapModel";
import {GapController} from "../../../api/controller/GapController";
import {ShiftController} from "../../../api/controller/ShiftController";
import {ShiftModel} from "../../../api/model/ShiftModel";
import {WeekDayModel} from "../../../api/model/WeekDayModel";
import {WeekDayController} from "../../../api/controller/WeekDayController";

export async function lessonReadControllerView(data: any): Promise<LessonModel[]> {

    return await LessonController.getInstance().getByCourseByBlockAndClassName(data);
}

export async function courseReadControllerView(): Promise<CourseModel[]> {

    return await CourseController.getInstance().list();
}

export async function classroomReadControllerView(): Promise<ClassroomModel[]>{

    return await ClassroomController.getInstance().list()
}

export async function classBlockReadControllerView(): Promise<ClassBlockModel[]> {

    return await ClassBlockController.getInstance().list();
}

export async function gapReadControllerView(): Promise<GapModel[]> {

    return await GapController.getInstance().list();
}

export async function shiftReadControllerView(): Promise<ShiftModel[]> {

    return await ShiftController.getInstance().list();
}

export async function weekDayReadControllerView(): Promise<WeekDayModel[]> {

    return await WeekDayController.getInstance().list();
}