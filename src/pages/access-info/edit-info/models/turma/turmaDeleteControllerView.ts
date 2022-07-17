import {TurmaController} from "../../../../../api/controller/TurmaController";

export async function turmaDeleteControllerView(uuid: string): Promise<void> {
    return TurmaController.getInstance().delete(uuid)
}