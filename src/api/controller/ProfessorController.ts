import {httpClient} from "../axios";
import {ProfessorModel} from "../model/ProfessorModel";
import {successMessage, errorMessage} from '../../components/libs/Toastr'

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

    public async create(professorModel: ProfessorModel):Promise<void>{
        try {
            const response = await httpClient.post("/professor", professorModel);
            successMessage('Professor(a) adicionado(a) ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async update(professorModel: ProfessorModel):Promise<void>{
        try {
            const response = await httpClient.put(`/professor/${professorModel.uuid}`, professorModel);
            successMessage('Professor(a) atualizado(a) ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async list(): Promise<ProfessorModel[]> {
        const response = await httpClient.get("/professor");
        return response.data as ProfessorModel[];
    }

    public async delete(uuid: string):Promise<void>{
        try {
            const response = await httpClient.delete(`/professor/${uuid}`);
            successMessage('Professor(a) deletado.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}