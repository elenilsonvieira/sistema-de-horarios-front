import axios from "../axios";
import {ProfessorModel} from "../model/ProfessorModel";

export class ProfessorController {
    private static instance: ProfessorController;

    private constructor() {
    }

    public static getInstance():ProfessorController{
        if(!ProfessorController.instance){
            ProfessorController.instance = new ProfessorController();
        }

        return ProfessorController.instance;

    }

    public async create(professorModel: ProfessorModel):Promise<boolean>{
        const response = await axios.post("/professor", professorModel);
        return response.status === 201
    }
    public async list(): Promise<ProfessorModel[]> {
        const response = await axios.get("/professor");
        return response.data as ProfessorModel[];
    }

    public async delete(uuid: string): Promise<boolean> {
        const response = await axios.delete(`/professor/${uuid}`);
        return response.status === 200;
    }
}