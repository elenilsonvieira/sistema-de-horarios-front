import {CourseModel} from "../../../../../api/model/CourseModel";
import {CourseController} from "../../../../../api/controller/CourseController";

export async function courseReadControllerView(): Promise<CourseModel[]> {
    return await CourseController.getInstance().list();
}