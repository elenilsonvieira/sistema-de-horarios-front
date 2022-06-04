import {CalendarModel} from "../../../../../api/model/CalendarModel";
import {CalendarController} from "../../../../../api/controller/CalendarController";

export async function calendarControllerView(data: any): Promise<void> {
    const calendar =  data as CalendarModel;
    const controller = new CalendarController();
    const response = await controller.create(calendar);
    if(response){
        alert("Criado com sucesso");
    }else{
        alert("Não criado com sucesso");
    }
}