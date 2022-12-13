import {httpClient} from "../axios";
import {errorMessage, successMessage} from "../../components/libs/Toastr";
import { ProfileModel } from "../model/ProfileModel";

export default class ProfileController{
    private static instance: ProfileController;

    private constructor() {
    }

    public static getInstance():ProfileController{
        if(!ProfileController.instance){
            ProfileController.instance = new ProfileController();
        }
        return ProfileController.instance;
    }
    public async create(profile: ProfileModel):Promise<void>{
        try {
            const response = await httpClient.post("/profile", profile);
            successMessage('Profile adicionado ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }
    public async list(): Promise<ProfileModel[]> {
        const response = await httpClient.get("/profile");
        return response.data as ProfileModel[];
    }
    public async delete(uuid: string): Promise<void> {
        try {
            const response = await httpClient.delete(`/profile/${uuid}`)
            successMessage('Profile deletado.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}