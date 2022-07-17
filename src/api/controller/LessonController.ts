import axios from "../axios";
import {LessonModel} from "../model/LessonModel";
import {successMessage, errorMessage} from '../../components/libs/Toastr'

export class LessonController {
    private static instance: LessonController;

    private constructor() {
    }

    public static getInstance():LessonController{
        if(!LessonController.instance){
            LessonController.instance = new LessonController();
        }

        return LessonController.instance;

    }
    public async create(lesson: LessonModel):Promise<void>{
        try {
            const response = await axios.post("/lesson", lesson);
            successMessage('Aula adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }
    public async list(): Promise<LessonModel[]> {
        const response = await axios.get("/lesson");
        return response.data as LessonModel[];
    }

    public async getByCourseByBlockAndClassName(data: any): Promise<LessonModel[]> {
        const response = await axios.get("/lesson/getWithFilters",{
            headers: data
        })

        return response.data as LessonModel[];
    }

    public async delete(uuid: string): Promise<void> {
        try {
            const response = await axios.delete(`/lesson/${uuid}`);
            successMessage('Turma deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}