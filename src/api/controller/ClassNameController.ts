import {httpClient} from "../axios";
import {errorMessage, successMessage} from "../../components/libs/Toastr";
import {ClassBlockModel} from "../model/ClassBlockModel";
import {ClassNameModel} from "../model/ClassNameModel";

export default class ClassNameController{
    private static instance: ClassNameController;

    private constructor() {
    }

    public static getInstance():ClassNameController{
        if(!ClassNameController.instance){
            ClassNameController.instance = new ClassNameController();
        }

        return ClassNameController.instance;

    }

    public async create(classNameModel: ClassNameModel):Promise<any>{
        try {
            const result = await httpClient.post("/className", classNameModel);
            return result.data;
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async list(): Promise<ClassNameModel[]> {
        const response = await httpClient.get("/className");
        return response.data as ClassNameModel[];
    }

    public async delete(uuid: string): Promise<void> {
        try {
            await httpClient.delete(`/className/${uuid}`);
            successMessage('Sala de aula deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}