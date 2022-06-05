import axios from "../axios";
import {CurricularComponentModel} from "../model/CurricularComponentModel";

export class CurricularComponentController {
    private static instance: CurricularComponentController;

    private constructor() {
    }

    public static getInstance():CurricularComponentController{
        if(!CurricularComponentController.instance){
            CurricularComponentController.instance = new CurricularComponentController();
        }

        return CurricularComponentController.instance;

    }
    public async create(curricularComponent: CurricularComponentModel):Promise<boolean>{
        const response = await axios.post("/curricularComponent", curricularComponent);
        return response.status === 201
    }
    public async list(): Promise<CurricularComponentModel[]> {
        const response = await axios.get("/curricularComponent");
        return response.data as CurricularComponentModel[];
    }
    public async delete(uuid: string): Promise<boolean> {
        const response = await axios.delete(`/curricularComponent/${uuid}`)
        return response.status === 200;
    }
}