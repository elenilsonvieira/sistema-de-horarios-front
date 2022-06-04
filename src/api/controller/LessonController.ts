import axios from "../axios";
import {LessonModel} from "../model/LessonModel";

export class LessonController {
    public async create(lesson: LessonModel):Promise<boolean>{
        const response = await axios.post("/lesson", lesson);
        return response.status === 201
    }
}