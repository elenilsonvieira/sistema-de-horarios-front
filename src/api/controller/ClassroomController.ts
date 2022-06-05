
import axios from "../axios";
import {ClassroomModel} from "../model/ClassroomModel";


export class ClassroomController{
    private static instance: ClassroomController;

    private constructor() {
    }

    public static getInstance():ClassroomController{
        if(!ClassroomController.instance){
            ClassroomController.instance = new ClassroomController();
        }

        return ClassroomController.instance;

    }
    public async create(classroom: ClassroomModel):Promise<boolean>{
        const response = await axios.post("/classroom", classroom);
        return response.status === 201
    }
    public async list(): Promise<ClassroomModel[]> {
        const response = await axios.get("/classroom");
        return response.data as ClassroomModel[];
    }
    public async delete(uuid: string): Promise<boolean> {
        const response = await axios.delete(`/classroom/${uuid}`)
        return response.status === 200;
    }
}