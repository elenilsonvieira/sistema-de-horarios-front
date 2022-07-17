import axios from "../axios";
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
    // public async create(classBlock: ClassBlockModel):Promise<void>{
    //     try {
    //         await axios.post("/classBlock", classBlock);
    //         successMessage('Sala de aula adicionada ao banco.')
    //     } catch (error) {
    //         errorMessage('Verifique os campos ou a conexão.')
    //     }
    // }
    public async list(): Promise<ClassBlockModel[]> {
        const response = await axios.get("/classBlock");
        return response.data as ClassBlockModel[];
    }

    public async delete(uuid: string): Promise<void> {
        try {
            await axios.delete(`/classBlock/${uuid}`);
            successMessage('Sala de aula deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}