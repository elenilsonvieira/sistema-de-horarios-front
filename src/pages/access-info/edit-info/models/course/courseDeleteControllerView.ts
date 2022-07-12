import {CourseController} from "../../../../../api/controller/CourseController";

export async function courseDeleteControllerView(uuid: string): Promise<void> {
    return CourseController.getInstance().delete(uuid);
}