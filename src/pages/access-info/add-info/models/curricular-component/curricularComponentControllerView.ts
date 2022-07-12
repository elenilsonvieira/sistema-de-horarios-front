import {CurricularComponentModel} from "../../../../../api/model/CurricularComponentModel";
import {CurricularComponentController} from "../../../../../api/controller/CurricularComponentController";
import {successMessage, errorMessage} from '../../../../../components/libs/Toastr';

export async function curricularComponentControllerView(data: any){
    const course =  data as CurricularComponentModel;
    const controller = CurricularComponentController.getInstance();
    const response = await controller.create(course);
}