import {httpClient} from "../axios";
import {errorMessage, successMessage} from "../../components/libs/Toastr";
import {ClassBlockModel} from "../model/ClassBlockModel";

export default class ClassBlockController{
    private static instance: ClassBlockController;

    private constructor() {
    }

    public static getInstance():ClassBlockController{
        if(!ClassBlockController.instance){
            ClassBlockController.instance = new ClassBlockController();
        }
        return ClassBlockController.instance;
    }
    
    //public async create(classBlock: ClassBlockModel):Promise<void>{
    //    try {
    //        await httpClient.post("/classBlock", classBlock);
    //        successMessage('Bloco adicionado ao banco.')
    //     } catch (error) {
    //        errorMessage('Verifique os campos ou a conexão.')
    //     }
    //}

    public async list(): Promise<ClassBlockModel[]> {
        const response = await httpClient.get("/classBlock");
        return response.data as ClassBlockModel[];
    }

    public async delete(uuid: string): Promise<void> {
        try {
            await httpClient.delete(`/classBlock/${uuid}`);
            successMessage('Bloco deletado.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}