import {httpClient} from "../axios";
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
            const response = await httpClient.post("/turma", turma);
            successMessage('Turma adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async update(turma: TurmaModel):Promise<void>{
        try {
            const response = await httpClient.put(`/turma/${turma.uuid}`, turma);
            successMessage('Turma modificada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async list(): Promise<TurmaModel[]> {
        const response = await httpClient.get("/turma");
        return response.data as TurmaModel[];
    }
    public async delete(uuid: string): Promise<void> {
        try {
            const response = await httpClient.delete(`/turma/${uuid}`)
            successMessage('Turma deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}