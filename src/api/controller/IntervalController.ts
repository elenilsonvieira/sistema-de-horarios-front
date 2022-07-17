import axios from "../axios";
import {errorMessage, successMessage} from "../../components/libs/Toastr";
import {ShiftModel} from "../model/ShiftModel";
import {IntervalModel} from "../model/IntervalModel";

export class IntervalController {
    private static instance: IntervalController;

    private constructor() {
    }

    public static getInstance():IntervalController{
        if(!IntervalController.instance){
            IntervalController.instance = new IntervalController();
        }
        return IntervalController.instance;
    }
    public async create(intervalModel: any):Promise<void>{
        try {
            //console.log(intervalModel)
            await axios.post("/interval", intervalModel);
            successMessage('interval adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }
    public async list(): Promise<IntervalModel[]> {
        const response = await axios.get("/interval");
        return response.data as IntervalModel[];
    }
    public async delete(uuid: string): Promise<void> {
        try {
            await axios.delete(`/interval/${uuid}`)
            successMessage('interval deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}