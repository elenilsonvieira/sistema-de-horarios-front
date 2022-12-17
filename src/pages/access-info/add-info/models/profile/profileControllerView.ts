import {ProfileModel} from '../../../../../api/model/ProfileModel';
import { ProfileController } from '../../../../../api/controller/ProfileController';


export async function profileControllerView(data: any): Promise<void> {
    const Profile =  data as ProfileModel;
    const controller = ProfileController.getInstance();
    await controller.create(Profile);
}