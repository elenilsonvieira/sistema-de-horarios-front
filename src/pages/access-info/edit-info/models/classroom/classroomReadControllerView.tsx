import { ClassroomModel } from '../../../../../api/model/ClassroomModel';
import { ClassroomController } from '../../../../../api/controller/ClassroomController';

export async function classroomReadControllerView(): Promise<ClassroomModel[]> {
  return await ClassroomController.getInstance().list();
}
