import {ProfileModel} from '../../../../../api/model/ProfileModel';
import {ProfileController} from '../../../../../api/controller/ProfileController';


export async function profileReadView(): Promise<ProfileModel[]> {
    return await ProfileController.getInstance().list();
}