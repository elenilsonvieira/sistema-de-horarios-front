import axios from "../axios";
import {LessonModel} from "../model/LessonModel";


export class LessonController {
    private static instance: LessonController;

    private constructor() {
    }

    public static getInstance():LessonController{
        if(!LessonController.instance){
            LessonController.instance = new LessonController();
        }

        return LessonController.instance;

    }
    public async create(lesson: LessonModel):Promise<boolean>{
        const response = await axios.post("/lesson", lesson);
        return response.status === 201;
    }
    public async list(): Promise<LessonModel[]> {
        const response = await axios.get("/lesson");
        return response.data as LessonModel[];
    }

    public async delete(uuid: string): Promise<boolean> {
        const response = await axios.delete(`/lesson/${uuid}`);
        return response.status === 200;
    }
}