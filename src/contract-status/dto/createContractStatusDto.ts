import { Model } from 'mongoose';

export class CreateContractStatusDto {

    _id: Model.Schema.Types.ObjectId;
    createadAt: Date;
    status: string;
    storage: string;

}
