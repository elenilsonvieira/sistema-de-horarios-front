import {httpClient} from "../axios";
import {ClassroomModel} from "../model/ClassroomModel";
import {successMessage, errorMessage} from '../../components/libs/Toastr';

export class ClassroomController{
    private static instance: ClassroomController;

    private constructor() {
    }

    public static getInstance():ClassroomController{
        if(!ClassroomController.instance){
            ClassroomController.instance = new ClassroomController();
        }

        return ClassroomController.instance;

    }
    public async create(classroom: any):Promise<void>{
        try {
            await httpClient.post("/classroom", classroom);
            successMessage('Sala de aula adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async update(classroom: any):Promise<void>{
        try {
            await httpClient.put(`/classroom/${classroom.uuid}`, classroom);
            successMessage('Sala de aula atualizada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async list(): Promise<ClassroomModel[]> {
        const response = await httpClient.get("/classroom");
        return response.data as ClassroomModel[];
    }
    
    public async delete(uuid: string): Promise<void> {
        try {
            await httpClient.delete(`/classroom/${uuid}`);
            successMessage('Sala de aula deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}