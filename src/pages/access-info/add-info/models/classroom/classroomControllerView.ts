import {ClassroomModel} from "../../../../../api/model/ClassroomModel";
import {ClassroomController} from "../../../../../api/controller/ClassroomController";

export async function classroomControllerView(data: any): Promise<void> {
    const classroom =  data as ClassroomModel;
    const controller = ClassroomController.getInstance();
    const response = await controller.create(classroom);
    if(response){
        alert("Criado com sucesso");
    }else{
        alert("Não criado com sucesso");
    }
}