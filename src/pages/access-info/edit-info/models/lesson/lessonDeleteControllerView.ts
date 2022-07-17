import {LessonController} from "../../../../../api/controller/LessonController";

export async function lessonDeleteControllerView(uuid: string): Promise<void> {
    return await LessonController.getInstance().delete(uuid);
}