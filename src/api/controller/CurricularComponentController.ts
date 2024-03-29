import {httpClient} from "../axios";
import {CurricularComponentModel} from "../model/CurricularComponentModel";
import {successMessage, errorMessage} from '../../components/libs/Toastr';

export class CurricularComponentController {
    private static instance: CurricularComponentController;

    private constructor() {
    }

    public static getInstance():CurricularComponentController{
        if(!CurricularComponentController.instance){
            CurricularComponentController.instance = new CurricularComponentController();
        }

        return CurricularComponentController.instance;

    }
    public async create(curricularComponent: CurricularComponentModel):Promise<void>{
        try {
            const response = await httpClient.post("/curricularComponent", curricularComponent);
            successMessage('Disciplina adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async update(curricularComponent: CurricularComponentModel):Promise<void>{
        try {
            const response = await httpClient.put(`/curricularComponent/${curricularComponent.uuid}`, curricularComponent);
            successMessage('Disciplina atualizada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async list(): Promise<CurricularComponentModel[]> {
        const response = await httpClient.get("/curricularComponent");
        return response.data as CurricularComponentModel[];
    }

    public async delete(uuid: string): Promise<void> {
        try {
            const response = await httpClient.delete(`/curricularComponent/${uuid}`)
            successMessage('Disciplina deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}