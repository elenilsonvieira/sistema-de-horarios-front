import {ClassroomModel} from "../model/ClassroomModel";
import axios from "../axios";
import {CurricularComponentModel} from "../model/CurricularComponentModel";

export class CurricularComponentController {

    public async create(curricularComponent: CurricularComponentModel):Promise<boolean>{
        const response = await axios.post("/curricularComponent", curricularComponent);
        return response.status === 201
    }
}