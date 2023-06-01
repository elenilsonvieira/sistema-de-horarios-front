import {httpClient} from '../axios';
import {RestrictionModel} from '../model/RestrictionModel';
import {successMessage, errorMessage} from '../../components/libs/Toastr';

export class RestrictionController{
    private static instance: RestrictionController;

    private constructor() {
    }

    public static getInstance():RestrictionController{
        if(!RestrictionController.instance){
            RestrictionController.instance = new RestrictionController();
        }
        return RestrictionController.instance;
    }

    public async create(restriction: any):Promise<void>{
        try {
            await httpClient.post('/restriction', restriction);
            successMessage('Restrição adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async list(): Promise<RestrictionModel[]> {
        const response = await httpClient.get('/restriction');
        return response.data as RestrictionModel[];
    }
    
    public async delete(uuid: string): Promise<void> {
        try {
            await httpClient.delete(`/restriction/${uuid}`);
            successMessage('Restrição deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}