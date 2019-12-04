import { ContractStatus } from './contractStatus.interface';

export interface Contract {

    _id: any;
    createadAt: Date;
    status: ContractStatus[];
    loanAmount: number;
    monthlyIncome: number;

}
