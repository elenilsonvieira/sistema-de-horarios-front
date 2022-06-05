import axios from "../axios";
import {TurmaModel} from "../model/TurmaModel";

export class TurmaController {
    private static instance: TurmaController;

    private constructor() {
    }

    public static getInstance():TurmaController{
        if(!TurmaController.instance){
            TurmaController.instance = new TurmaController();
        }
        return TurmaController.instance;
    }
    public async create(turma: TurmaModel):Promise<boolean>{
        const response = await axios.post("/turma", turma);
        return response.status === 201;
    }
    public async list(): Promise<TurmaModel[]> {
        const response = await axios.get("/turma");
        return response.data as TurmaModel[];
    }
    public async delete(uuid: string): Promise<boolean> {
        const response = await axios.delete(`/turma/${uuid}`)
        return response.status === 200;
    }
}