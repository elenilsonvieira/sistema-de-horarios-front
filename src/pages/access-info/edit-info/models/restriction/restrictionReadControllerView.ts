import {RestrictionModel} from "../../../../../api/model/RestrictionModel";
import {RestrictionController} from "../../../../../api/controller/RestrictionController";
export async function restrictionReadControllerView(): Promise<RestrictionModel[]> {
    return await RestrictionController.getInstance().list();
}