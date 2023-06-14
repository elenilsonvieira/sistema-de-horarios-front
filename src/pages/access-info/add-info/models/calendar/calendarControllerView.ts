import {CalendarModel} from '../../../../../api/model/CalendarModel';
import {CalendarController} from '../../../../../api/controller/CalendarController';

export async function calendarControllerView(data: any): Promise<void> {
    const calendar =  data as CalendarModel;
    const controller = CalendarController.getInstance();
    await controller.create(calendar);
}