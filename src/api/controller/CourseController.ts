/* eslint-disable @typescript-eslint/no-empty-function */
import { CourseModel } from '../model/CourseModel';
import { httpClient } from '../axios';
import { successMessage, errorMessage } from '../../components/libs/Toastr';

export class CourseController {
  private static instance: CourseController;

  private constructor() {}

  public static getInstance(): CourseController {
    if (!CourseController.instance) {
      CourseController.instance = new CourseController();
    }

    return CourseController.instance;
  }
  public async create(course: CourseModel): Promise<void> {
    try {
      await httpClient.post('/course', course);
      successMessage('Curso adicionado ao banco.');
    } catch (error) {
      errorMessage('Verifique os campos ou a conexão.');
    }
  }

  public async list(): Promise<CourseModel[]> {
    const response = await httpClient.get('/course');
    return response.data as CourseModel[];
  }
  public async delete(uuid: string): Promise<void> {
    try {
      await httpClient.delete(`/course/${uuid}`);
      successMessage('Curso deletado.');
    } catch (error) {
      errorMessage('Não foi possível deletar.');
    }
  }
}
