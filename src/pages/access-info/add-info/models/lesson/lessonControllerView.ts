import {LessonModel} from '../../../../../api/model/LessonModel';
import {LessonController} from '../../../../../api/controller/LessonController';

export async function lessonControllerView(data: any) {
    const lesson =  data as LessonModel;
    console.log(lesson);
    
    const controller = LessonController.getInstance();
    await controller.create(lesson);
}