import { ProfessorController } from '../../../../../api/controller/ProfessorController';

export async function professorDeleteControllerView(
  uuid: string,
): Promise<void> {
  return ProfessorController.getInstance().delete(uuid);
}
