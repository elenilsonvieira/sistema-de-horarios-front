import { httpClient } from "../axios";
import { LessonModel } from "../model/LessonModel";
import { successMessage, errorMessage } from '../../components/libs/Toastr'

export class LessonController {
    private static instance: LessonController;

    private constructor() {
    }

    public static getInstance(): LessonController {
        if (!LessonController.instance) {
            LessonController.instance = new LessonController();
        }

        return LessonController.instance;

    }
    public async create(lesson: LessonModel): Promise<void> {
        try {
            await httpClient.post("/lesson", lesson);
            successMessage('Aula adicionada ao banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }
    public async list(): Promise<LessonModel[]> {
        const response = await httpClient.get("/lesson");
        return response.data as LessonModel[];
    }

    public async getByCourseByBlockAndClassName(data: any): Promise<LessonModel[]> {
        const response = await httpClient.get("/lesson/getWithFilters", {
            headers: data
        })

        return response.data as LessonModel[];
    }

    public async update(uuid: string, lesson: LessonModel): Promise<void> {
        try {
            const lessonDRO = {
                calendarUuid: lesson.calendar.uuid,
                classroomUuid: lesson.classroom.uuid,
                curricularComponentUuid: lesson.curricularComponent.uuid,
                turmaUuid: lesson.turma.uuid,
                courseUuid: lesson.course.uuid,
                professorUuid: lesson.professor ? lesson.professor.uuid :null,
                intervalUuid: lesson.interval ? lesson.interval.uuid : null
            }
            const response = await httpClient.put(`/lesson/${uuid}`, lessonDRO);
            successMessage('Aula atualizada no banco.')
        } catch (error) {
            errorMessage('Verifique os campos ou a conexão.')
        }
    }

    public async delete(uuid: string): Promise<void> {
        try {
            console.log(uuid);
            const response = await httpClient.delete(`/lesson/${uuid}`);
            successMessage('Turma deletada.')
        } catch (error) {
            errorMessage('Não foi possível deletar.')
        }
    }
}