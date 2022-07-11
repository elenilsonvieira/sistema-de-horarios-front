import {CalendarModel} from "../../../../../api/model/CalendarModel";
import {CalendarController} from "../../../../../api/controller/CalendarController";
import {successMessage, errorMessage} from '../../../../../components/libs/Toastr';

export async function calendarControllerView(data: any): Promise<void> {
    const calendar =  data as CalendarModel;
    const controller = CalendarController.getInstance();
    const response = await controller.create(calendar);
    if(response){
        successMessage("Criado com sucesso");
    }else{
        errorMessage("Não criado com sucesso");
    }
}