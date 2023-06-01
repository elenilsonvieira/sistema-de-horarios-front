import { CurricularComponentController } from '../../../../../api/controller/CurricularComponentController';

export async function curricularComponentDeleteControllerView(
  uuid: string,
): Promise<void> {
  return await CurricularComponentController.getInstance().delete(uuid);
}
