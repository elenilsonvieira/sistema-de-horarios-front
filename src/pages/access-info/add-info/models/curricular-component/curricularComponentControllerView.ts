import {CurricularComponentModel} from "../../../../../api/model/CurricularComponentModel";
import {CurricularComponentController} from "../../../../../api/controller/CurricularComponentController";

export async function curricularComponentControllerView(data: any){
    const course =  data as CurricularComponentModel;
    const controller = CurricularComponentController.getInstance();
    const response = await controller.create(course);
    if(response){
        alert("Criado com sucesso");
    }else{
        alert("Não criado com sucesso");
    }
}