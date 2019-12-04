import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateContractDto } from './dto/createContractDto';
import { ContractStatus } from './interfaces/contractStatus.interface';
import { Contract } from './interfaces/contract.interface';

@Injectable()
export class ContractService {

    constructor(@InjectModel('Contract') private readonly contractModel: Model<Contract>,
                @InjectModel('ContractStatus') private readonly contractStatusModel: Model<ContractStatus>) { }

    async create(createCatDto: CreateContractDto): Promise<CreateContractDto> {

        createCatDto.createadAt = new Date();
        const createdContract = new this.contractModel(createCatDto);

        return await createdContract.save().then(result => {

            const contractStatus: ContractStatus = {
                createadAt: new Date(),
                status: 'CREATION',
                _id: result._id,
            };

            const createdContractStatus = new this.contractStatusModel(contractStatus);

            createdContractStatus.save();

            return result as CreateContractDto;

        }, error => {
            console.log(error);

        });
    }

    async findAll(): Promise<Contract[]> {
        return await this.contractModel.find().exec();
    }
}
