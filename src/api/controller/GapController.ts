import axios from "../axios";
import {errorMessage, successMessage} from "../../components/libs/Toastr";
import {GapModel} from "../model/GapModel";

export class GapController {
    private static instance: GapController;

    private constructor() {
    }

    public static getInstance():GapController{
        if(!GapController.instance){
            GapController.instance = new GapController();
        }
        return GapController.instance;
    }
    public async create(gapModel: GapModel):Promise<void>{
        try {
            await axios.post("/gap", gapModel);
            successMessage('gap adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }
    public async list(): Promise<GapModel[]> {
        const response = await axios.get("/gap");
        return response.data as GapModel[];
    }
    public async delete(uuid: string): Promise<void> {
        try {
            await axios.delete(`/gap/${uuid}`)
            successMessage('interval deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}