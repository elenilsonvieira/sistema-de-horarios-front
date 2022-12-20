import { LessonController } from "../../../../api/controller/LessonController"
import { LessonModel } from "../../../../api/model/LessonModel"

export async function lessonUpdateControllerView(lesson: LessonModel): Promise<void> {
    return LessonController.getInstance().update(lesson.uuid, lesson);
}