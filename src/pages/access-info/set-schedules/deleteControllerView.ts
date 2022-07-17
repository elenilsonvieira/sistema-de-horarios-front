import {IntervalController} from "../../../api/controller/IntervalController";

export async function deleteControllerView(uuid:string, lessonUuid: string) {
    const response = await IntervalController.getInstance().delete(uuid, lessonUuid);
}