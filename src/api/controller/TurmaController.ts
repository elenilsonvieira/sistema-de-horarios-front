import {CurricularComponentModel} from "../model/CurricularComponentModel";
import axios from "../axios";
import {TurmaModel} from "../model/TurmaModel";

export class TurmaController {

    public async create(turma: TurmaModel):Promise<boolean>{
        const response = await axios.post("/turma", turma);
        return response.status === 201
    }
}