import axios from "../axios";
import {ProfessorModel} from "../model/ProfessorModel";

export class ProfessorController {

    public async create(professorModel: ProfessorModel):Promise<boolean>{
        const response = await axios.post("/professor", professorModel);
        return response.status === 201
    }
}