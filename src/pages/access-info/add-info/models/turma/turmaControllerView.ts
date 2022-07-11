import {TurmaModel} from "../../../../../api/model/TurmaModel";
import {TurmaController} from "../../../../../api/controller/TurmaController";
import {successMessage, errorMessage} from '../../../../../components/libs/Toastr';

export async function turmaControllerView(data: any){
    const turma = data as TurmaModel;
    const controller = TurmaController.getInstance();
    const response = await controller.create(turma);
    if(response) {
        successMessage("Criado com sucesso");
    }else{
        errorMessage("Não criado com sucesso");
    }
}