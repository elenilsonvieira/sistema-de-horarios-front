import {IntervalController} from "../../../api/controller/IntervalController";
import {IntervalModel} from "../../../api/model/IntervalModel";

export async function intervalCreateControllerView(intervalModel:any):Promise<IntervalModel>{
    return await IntervalController.getInstance().create(intervalModel);
}