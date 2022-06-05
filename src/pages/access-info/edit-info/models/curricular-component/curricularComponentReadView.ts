import {CurricularComponentModel} from "../../../../../api/model/CurricularComponentModel";
import {CurricularComponentController} from "../../../../../api/controller/CurricularComponentController";


export async function curricularComponentReadView(): Promise<CurricularComponentModel[]> {
    return await CurricularComponentController.getInstance().list();
}