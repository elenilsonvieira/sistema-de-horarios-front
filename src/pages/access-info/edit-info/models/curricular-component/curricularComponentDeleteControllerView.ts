import {CurricularComponentController} from "../../../../../api/controller/CurricularComponentController";

export async function curricularComponentDeleteControllerView(uuid: string): Promise<boolean> {
    return await CurricularComponentController.getInstance().delete(uuid);
}