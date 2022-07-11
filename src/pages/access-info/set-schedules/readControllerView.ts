import {LessonModel} from "../../../api/model/LessonModel";
import {LessonController} from "../../../api/controller/LessonController";
import {CourseController} from "../../../api/controller/CourseController";
import {CourseModel} from "../../../api/model/CourseModel";
import {ClassroomController} from "../../../api/controller/ClassroomController";
import {ClassroomModel} from "../../../api/model/ClassroomModel";

export async function lessonReadControllerView(data: any): Promise<LessonModel[]> {

    return await LessonController.getInstance().getByCourseByBlockAndClassName(data);
}
export async function courseReadControllerView(): Promise<CourseModel[]> {

    return await CourseController.getInstance().list();
}
export async function classroomReadControllerView(): Promise<ClassroomModel[]> {

    return await ClassroomController.getInstance().list();
}