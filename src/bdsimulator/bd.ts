import lessons from './lessons.json';
import interval from './interval.json';
import { LessonModel } from '../api/model/LessonModel';
import { IntervalModel } from '../api/model/IntervalModel';

export class bd {

    public static getLessons(): LessonModel[] {
        return lessons as LessonModel[];
    }

    public static getInterval(): IntervalModel[] {
        return interval as IntervalModel[];
    }

}