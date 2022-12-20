import {RestrictionModel} from '../../../../../api/model/RestrictionModel';
import {RestrictionController} from '../../../../../api/controller/RestrictionController';


export async function restrictionControllerView(data: any): Promise<void> {
    const Restriction =  data as RestrictionModel;
    const controller = RestrictionController.getInstance();
    await controller.create(Restriction);
}