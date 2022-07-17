import {ProfessorModel} from '../../../../../api/model/ProfessorModel';
import {ProfessorController} from '../../../../../api/controller/ProfessorController';


export async function professorControllerView(professor: ProfessorModel):Promise<void>{
    const controller = ProfessorController.getInstance();
    await controller.create(professor);
}