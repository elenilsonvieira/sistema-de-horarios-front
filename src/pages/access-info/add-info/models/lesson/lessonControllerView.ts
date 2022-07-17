import {LessonModel} from "../../../../../api/model/LessonModel";
import {LessonController} from "../../../../../api/controller/LessonController";

export async function lessonControllerView(data: any) {
    const lesson =  data as LessonModel;
    const controller = LessonController.getInstance();
    await controller.create(lesson);
}