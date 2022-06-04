
import axios from "../axios";
import {ClassroomModel} from "../model/ClassroomModel";

export class ClassroomController{

    public async create(classroom: ClassroomModel):Promise<boolean>{
        const response = await axios.post("/classroom", classroom);
        return response.status === 201
    }
}