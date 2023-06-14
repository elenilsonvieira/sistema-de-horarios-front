import {TurmaModel} from '../../../../../api/model/TurmaModel';
import {TurmaController} from '../../../../../api/controller/TurmaController';

export async function turmaControllerView(turma: TurmaModel){
    const controller = TurmaController.getInstance();
    await controller.create(turma);
}