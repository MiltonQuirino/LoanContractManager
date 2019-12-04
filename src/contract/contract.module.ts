import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContractSchema } from '../schemas/contract.schema';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { ContractStatusSchema } from '../schemas/contractStatus.schema';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://pontte:71CUYsCMxrFq9MYQ@cluster0-0olus.mongodb.net/test?retryWrites=true&w=majority'),
        MongooseModule.forFeature([
            { name: 'Contract', schema: ContractSchema },
            { name: 'ContractStatus', schema: ContractStatusSchema },
        ]),
    ],
    controllers: [
        ContractController,
    ],
    providers: [
        ContractService,
    ],
})
export class ContractModule { }
