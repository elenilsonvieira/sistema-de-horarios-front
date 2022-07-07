import axios from "../axios";
import {CalendarModel} from "../model/CalendarModel";

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
    
    public async create(calendar: CalendarModel):Promise<boolean>{
        const response = await axios.post("/calendar", calendar);
        return response.status === 201
    }
    public async list(): Promise<CalendarModel[]> {
        const response = await axios.get("/calendar");
        return response.data as CalendarModel[];
    }
    public async delete(uuid: string): Promise<boolean> {
        const response = await axios.delete(`/calendar/${uuid}`)
        return response.status === 200;
    }
}