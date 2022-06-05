import {TurmaController} from "../../../../../api/controller/TurmaController";

export async function turmaDeleteControllerView(uuid: string): Promise<boolean> {
    return TurmaController.getInstance().delete(uuid)
}