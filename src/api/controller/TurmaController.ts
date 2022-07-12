import axios from "../axios";
import {TurmaModel} from "../model/TurmaModel";
import {successMessage, errorMessage} from '../../components/libs/Toastr'

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
    public async create(turma: TurmaModel):Promise<void>{
        try {
            const response = await axios.post("/turma", turma);
            successMessage('Turma adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }
    public async list(): Promise<TurmaModel[]> {
        const response = await axios.get("/turma");
        return response.data as TurmaModel[];
    }
    public async delete(uuid: string): Promise<void> {
        try {
            const response = await axios.delete(`/turma/${uuid}`)
            successMessage('Turma deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}