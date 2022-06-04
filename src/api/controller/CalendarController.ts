import axios from "../axios";
import {CalendarModel} from "../model/CalendarModel";

export class CalendarController {
    public async create(calendar: CalendarModel):Promise<boolean>{
        const response = await axios.post("/classroom", calendar);
        return response.status === 201
    }
}