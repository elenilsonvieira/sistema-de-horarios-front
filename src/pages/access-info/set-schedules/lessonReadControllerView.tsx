import { LessonModel } from '../../../api/model/LessonModel';
import { LessonController } from '../../../api/controller/LessonController';

export async function lessonReadControllerView(): Promise<LessonModel[]> {
  return await LessonController.getInstance().list();
}
