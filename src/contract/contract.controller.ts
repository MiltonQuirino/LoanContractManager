import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateContractDto } from './dto/createContractDto';

@Controller('contract')
export class ContractController {

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() createContractDto: CreateContractDto) {
        return `This action updates a #${id} cat`;
    }
}
