import {CourseModel} from "../../../../../api/model/CourseModel";
import {CourseController} from "../../../../../api/controller/CourseController";

export async function courseControllerView(data: any): Promise<void> {
    const course =  data as CourseModel;
    const controller = new CourseController();
    const response = await controller.create(course);
    if(response){
        alert("Criado com sucesso");
    }else{
        alert("Não criado com sucesso");
    }
}