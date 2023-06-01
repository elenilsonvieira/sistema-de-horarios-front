import { TurmaModel } from '../../../../../api/model/TurmaModel';
import { TurmaController } from '../../../../../api/controller/TurmaController';

export async function turmaReadControllerView(): Promise<TurmaModel[]> {
  return await TurmaController.getInstance().list();
}
