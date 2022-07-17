import {ClassroomModel} from "../../../../../api/model/ClassroomModel";
import {ClassroomController} from "../../../../../api/controller/ClassroomController";
import ClassNameController from "../../../../../api/controller/ClassNameController";

const classNameController = ClassNameController.getInstance();

export async function classroomControllerView(data: any): Promise<void> {
    const {name, capacity,classBlockUuid} = data;
    const className = await classNameController.create({name, capacity})

    const classroomController = ClassroomController.getInstance();
    await classroomController.create({
        classNameUuid: className.uuid,
        classBlockUuid
    });
}
