import {ProfessorModel} from "../../../../api/model/ProfessorModel";
import {ProfessorController} from "../../../../api/controller/ProfessorController";

export async function professorControllerView(data: any):Promise<void>{
    const professor = data as ProfessorModel;
    const professorController = new ProfessorController();
    const response = await professorController.create(professor);
    if(response) {
        alert("Criado com sucesso");
    }else{
        alert("Não criado com sucesso");
    }
}