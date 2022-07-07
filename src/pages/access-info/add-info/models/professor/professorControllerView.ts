import {ProfessorModel} from '../../../../../api/model/ProfessorModel';
import {ProfessorController} from '../../../../../api/controller/ProfessorController';

import {successMessage, errorMessage} from '../../../../../components/libs/Toastr';

export async function professorControllerView(data: any):Promise<void>{
    const professor = data as ProfessorModel;
    const controller = ProfessorController.getInstance();
    const response = await controller.create(professor);
    if(response) {
        successMessage('Professor(a) adicionado(a) ao banco.')
    }else{
        errorMessage("Não criado com sucesso");
    }
}