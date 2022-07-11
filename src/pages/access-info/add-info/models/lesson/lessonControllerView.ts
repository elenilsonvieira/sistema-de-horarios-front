import {LessonModel} from "../../../../../api/model/LessonModel";
import {LessonController} from "../../../../../api/controller/LessonController";
import {successMessage, errorMessage} from '../../../../../components/libs/Toastr';

export async function lessonControllerView(data: any) {
    const lesson =  data as LessonModel;
    const controller = LessonController.getInstance();
    const response = await controller.create(lesson);
    if(response){
        successMessage("Criado com sucesso");
    }else{
        errorMessage("Não criado com sucesso");
    }
}