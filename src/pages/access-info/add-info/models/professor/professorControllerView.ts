import {ProfessorModel} from '../../../../../api/model/ProfessorModel';
import {ProfessorController} from '../../../../../api/controller/ProfessorController';


export async function professorControllerView(data: any): Promise<void> {
    const professor =  data as ProfessorModel;
    const controller = ProfessorController.getInstance();
    await controller.create(professor);
}