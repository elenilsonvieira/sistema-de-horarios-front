import {httpClient} from '../axios';
import {errorMessage, successMessage} from '../../components/libs/Toastr';
import {ShiftModel} from '../model/ShiftModel';

export class ShiftController {
    private static instance: ShiftController;

    private constructor() {
    }

    public static getInstance():ShiftController{
        if(!ShiftController.instance){
            ShiftController.instance = new ShiftController();
        }
        return ShiftController.instance;
    }
    public async create(shiftModel: ShiftModel):Promise<void>{
        try {
            await httpClient.post('/shift', shiftModel);
            successMessage('shift adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }
    public async list(): Promise<ShiftModel[]> {
        const response = await httpClient.get('/shift');
        return response.data as ShiftModel[];
    }
    public async delete(uuid: string): Promise<void> {
        try {
            await httpClient.delete(`/shift/${uuid}`)
            successMessage('shift deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}