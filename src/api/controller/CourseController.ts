import {CourseModel} from "../model/CourseModel";
import axios from "../axios";

export class CourseController {
    private static instance: CourseController;

    private constructor() {
    }

    public static getInstance():CourseController{
        if(!CourseController.instance){
            CourseController.instance = new CourseController();
        }

        return CourseController.instance;

    }
    public async create(course: CourseModel):Promise<boolean>{
        const response = await axios.post("/course", course);
        return response.status === 201
    }

    public async list(): Promise<CourseModel[]> {
        const response = await axios.get("/course");
        return response.data as CourseModel[];
    }
    public async delete(uuid: string): Promise<boolean> {
        const response = await axios.delete(`/course/${uuid}`)
        return response.status === 200;
    }
}