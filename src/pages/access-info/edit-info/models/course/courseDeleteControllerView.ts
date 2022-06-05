import {CourseController} from "../../../../../api/controller/CourseController";

export async function courseDeleteControllerView(uuid: string): Promise<boolean> {
    return CourseController.getInstance().delete(uuid);
}