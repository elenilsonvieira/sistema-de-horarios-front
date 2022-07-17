import {TurmaModel} from "../model/TurmaModel";
import axios from "../axios";
import {errorMessage, successMessage} from "../../components/libs/Toastr";
import {WeekDayModel} from "../model/WeekDayModel";

export class WeekDayController {
    private static instance: WeekDayController;

    private constructor() {
    }

    public static getInstance():WeekDayController{
        if(!WeekDayController.instance){
            WeekDayController.instance = new WeekDayController();
        }
        return WeekDayController.instance;
    }
    public async create(weekDayModel: WeekDayModel):Promise<void>{
        try {
            await axios.post("/weekDay", weekDayModel);
            successMessage('weekDay adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }
    public async list(): Promise<WeekDayModel[]> {
        const response = await axios.get("/weekDay");
        return response.data as WeekDayModel[];
    }
    public async delete(uuid: string): Promise<void> {
        try {
            await axios.delete(`/weekDay/${uuid}`)
            successMessage('weekDay deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}