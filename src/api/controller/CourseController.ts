import {CourseModel} from "../model/CourseModel";
import axios from "../axios";

export class CourseController {

    public async create(course: CourseModel):Promise<boolean>{
        const response = await axios.post("/course", course);
        return response.status === 201
    }
}