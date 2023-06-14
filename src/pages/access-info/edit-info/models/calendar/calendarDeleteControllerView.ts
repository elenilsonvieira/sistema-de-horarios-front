import {CalendarController} from '../../../../../api/controller/CalendarController';

export async function calendarDeleteControllerView(uuid: string): Promise<void> {
    return CalendarController.getInstance().delete(uuid);
}