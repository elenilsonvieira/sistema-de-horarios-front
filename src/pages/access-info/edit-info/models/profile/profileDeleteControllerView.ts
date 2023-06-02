import {ProfileController} from '../../../../../api/controller/ProfileController';

export async function profileDeleteControllerView(uuid: string): Promise<void> {
    return await ProfileController.getInstance().delete(uuid);
}