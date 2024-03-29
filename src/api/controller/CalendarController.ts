import {httpClient} from "../axios";
import {CalendarModel} from "../model/CalendarModel";
import {successMessage, errorMessage} from '../../components/libs/Toastr';

export class CalendarController {

    private static instance: CalendarController;

    private constructor() {
    }

    public static getInstance():CalendarController{
        if(!CalendarController.instance){
            CalendarController.instance = new CalendarController();
        }
        return CalendarController.instance;
    }
    
    public async create(calendar: CalendarModel):Promise<void>{
        try {
            await httpClient.post("/calendar", calendar);
            successMessage('Calendário adicionado ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async update(calendar: CalendarModel):Promise<void>{
        try {
            await httpClient.put(`/calendar/${calendar.uuid}`, calendar);
            successMessage('Calendário atualizado ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async list(): Promise<CalendarModel[]> {
        const response = await httpClient.get("/calendar");
        return response.data as CalendarModel[];
    }
    public async delete(uuid: string): Promise<void> {
        try {
            await httpClient.delete(`/calendar/${uuid}`);
            successMessage('Calendário deletado.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}