import axios from "../axios";
import {ProfessorModel} from "../model/ProfessorModel";

export class ProfessorController {

    create(professorModel: ProfessorModel){
        return axios.post("/professor", professorModel);
    }
}