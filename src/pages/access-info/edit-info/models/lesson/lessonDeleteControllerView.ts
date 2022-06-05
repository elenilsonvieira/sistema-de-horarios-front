import {LessonController} from "../../../../../api/controller/LessonController";

export async function lessonDeleteControllerView(uuid: string): Promise<boolean> {
    return await LessonController.getInstance().delete(uuid);
}