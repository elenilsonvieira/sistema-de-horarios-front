import {ClassroomController} from "../../../../../api/controller/ClassroomController";

export async function classroomDeleteControllerView(uuid: string) {
    return ClassroomController.getInstance().delete(uuid);
}