import {LessonModel} from "../../../../../api/model/LessonModel";
import {LessonController} from "../../../../../api/controller/LessonController";

export async function lessonControllerView(data: any) {
    const lesson =  data as LessonModel;
    const controller = LessonController.getInstance();
    const response = await controller.create(lesson);
    if(response){
        alert("Criado com sucesso");
    }else{
        alert("Não criado com sucesso");
    }
}