import {IntervalModel} from "../../../api/model/IntervalModel";
import {IntervalController} from "../../../api/controller/IntervalController";

export async function intervalCreateControllerView(intervalModel:any){
    await IntervalController.getInstance().create(intervalModel);
}