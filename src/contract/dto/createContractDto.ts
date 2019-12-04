import { ContractStatus } from '../interfaces/contractStatus.interface';
import { Model } from 'mongoose';

export class CreateContractDto {

    _id: Model.Schema.Types.ObjectId;
    createadAt: Date;
    status: ContractStatus[];
    readonly updateadAt: Date;
    readonly loanAmount: number;
    readonly civilStatus: string;
    readonly monthlyIncome: number;

}
