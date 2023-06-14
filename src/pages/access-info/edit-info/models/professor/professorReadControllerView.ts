import {ProfessorModel} from '../../../../../api/model/ProfessorModel';
import {ProfessorController} from '../../../../../api/controller/ProfessorController';
export async function professorReadControllerView(): Promise<ProfessorModel[]> {
    return await ProfessorController.getInstance().list();
}