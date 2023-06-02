import {CalendarModel} from '../../../../../api/model/CalendarModel';
import {CalendarController} from '../../../../../api/controller/CalendarController';

export async function calendarReadControllerView(): Promise<CalendarModel[]> {
    return await CalendarController.getInstance().list();
}