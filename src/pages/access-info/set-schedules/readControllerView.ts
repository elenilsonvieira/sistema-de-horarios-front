import {LessonModel} from "../../../api/model/LessonModel";
import {LessonController} from "../../../api/controller/LessonController";
import {CourseController} from "../../../api/controller/CourseController";
import {CourseModel} from "../../../api/model/CourseModel";
import {ClassroomController} from "../../../api/controller/ClassroomController";
import {ClassroomModel} from "../../../api/model/ClassroomModel";
import ClassNameController from "../../../api/controller/ClassNameController";
import {ClassNameModel} from "../../../api/model/ClassNameModel";
import {ClassBlockModel} from "../../../api/model/ClassBlockModel";
import ClassBlockController from "../../../api/controller/ClassBlockController";

export async function lessonReadControllerView(data: any): Promise<LessonModel[]> {

    return await LessonController.getInstance().getByCourseByBlockAndClassName(data);
}
export async function courseReadControllerView(): Promise<CourseModel[]> {

    return await CourseController.getInstance().list();
}
export async function classNameReadControllerView(): Promise<ClassNameModel[]> {

    return await ClassNameController.getInstance().list();
}
export async function classBlockReadControllerView(): Promise<ClassBlockModel[]> {

    return await ClassBlockController.getInstance().list();
}