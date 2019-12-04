import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateContractDto } from './dto/createContractDto';
import { ContractService } from './contract.service';
// import { Contract } from './interfaces/contractStatus.interface';
import { ContractStatus } from './interfaces/contractStatus.interface';

@Controller('contract')
export class ContractController {

    constructor(private readonly contractService: ContractService) { }

    @Post()
    create(@Body() createCatDto: CreateContractDto): any {
        return this.contractService.create(createCatDto);
    }

    // @Get()
    // async findAll(): Promise<CreateContractDto[]> {
    //     return this.contractService.findAll();
    // }

    @Put(':id')
    update(@Param('id') id: string, @Body() createContractDto: CreateContractDto) {
        return `This action updates a #${id} contract`;
    }
}
