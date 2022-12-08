import {ClassroomModel} from "../../../../../api/model/ClassroomModel";
import {ClassroomController} from "../../../../../api/controller/ClassroomController";


export async function classroomControllerView(data: any): Promise<void> {
    const classroom =  data as ClassroomModel;
    const controller = ClassroomController.getInstance();
    await controller.create(classroom);
}
