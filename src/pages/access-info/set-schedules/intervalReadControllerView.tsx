import { IntervalModel } from '../../../api/model/IntervalModel';
import { IntervalController } from '../../../api/controller/IntervalController';

export async function intervalReadControllerView(): Promise<IntervalModel[]> {
  return await IntervalController.getInstance().list();
}
