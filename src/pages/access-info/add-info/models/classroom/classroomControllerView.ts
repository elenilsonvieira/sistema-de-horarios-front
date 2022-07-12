import {ClassroomModel} from "../../../../../api/model/ClassroomModel";
import {ClassroomController} from "../../../../../api/controller/ClassroomController";
import {successMessage, errorMessage} from '../../../../../components/libs/Toastr';

export async function classroomControllerView(data: any): Promise<void> {
    const classroom =  data as ClassroomModel;
    const controller = ClassroomController.getInstance();
    const response = await controller.create(classroom);
}