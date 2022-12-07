import lessons from './lessons.json'
import { LessonModel } from '../api/model/LessonModel';

export class bd {

    public static getLessons(): LessonModel[] {
        return lessons as LessonModel[];
    }

}