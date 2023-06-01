import { RestrictionController } from '../../../../../api/controller/RestrictionController';

export async function restrictionDeleteControllerView(
  uuid: string,
): Promise<void> {
  return RestrictionController.getInstance().delete(uuid);
}
