/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { httpClient } from '../axios';
import { errorMessage, successMessage } from '../../components/libs/Toastr';
import { IntervalModel } from '../model/IntervalModel';

export class IntervalController {
  private static instance: IntervalController;

  private constructor() {}

  public static getInstance(): IntervalController {
    if (!IntervalController.instance) {
      IntervalController.instance = new IntervalController();
    }
    return IntervalController.instance;
  }
  public async create(intervalModel: any): Promise<IntervalModel> {
    try {
      // console.log(intervalModel)
      const response = await httpClient.post('/interval', intervalModel);
      successMessage('interval adicionada ao banco.');
      return response.data as IntervalModel;
    } catch (error) {
      errorMessage('Verifique os campos ou a conexão.');
      return undefined as unknown as IntervalModel;
    }
  }
  public async list(): Promise<IntervalModel[]> {
    const response = await httpClient.get('/interval');
    return response.data as IntervalModel[];
  }
  public async delete(uuid: string, lessonUuid: string): Promise<void> {
    try {
      await httpClient.delete(`/interval/${uuid}/${lessonUuid}`);
      successMessage('interval deletado.');
    } catch (error) {
      errorMessage('Não foi possível deletar.');
    }
  }
}
