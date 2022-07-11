import {CourseModel} from "../../../../../api/model/CourseModel";
import {CourseController} from "../../../../../api/controller/CourseController";
import {successMessage, errorMessage} from '../../../../../components/libs/Toastr';

export async function courseControllerView(data: any): Promise<void> {
    const course =  data as CourseModel;
    const controller = CourseController.getInstance();
    const response = await controller.create(course);
    if(response){
        successMessage("Criado com sucesso");
    }else{
        errorMessage("Não criado com sucesso");
    }
}