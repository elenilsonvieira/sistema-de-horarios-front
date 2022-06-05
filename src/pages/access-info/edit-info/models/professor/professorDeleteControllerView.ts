import {ProfessorController} from "../../../../../api/controller/ProfessorController";

export async function professorDeleteControllerView(uuid: string): Promise<boolean> {
    return ProfessorController.getInstance().delete(uuid)
}