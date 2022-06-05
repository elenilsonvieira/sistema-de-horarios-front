import {TurmaModel} from "../../../../../api/model/TurmaModel";
import {TurmaController} from "../../../../../api/controller/TurmaController";

export async function turmaControllerView(data: any){
    const turma = data as TurmaModel;
    const controller = TurmaController.getInstance();
    const response = await controller.create(turma);
    if(response) {
        alert("Criado com sucesso");
    }else{
        alert("Não criado com sucesso");
    }
}