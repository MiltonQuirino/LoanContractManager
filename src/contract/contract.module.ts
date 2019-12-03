import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://pontte:71CUYsCMxrFq9MYQ@cluster0-0olus.mongodb.net/test?retryWrites=true&w=majority')],
})
export class ContractModule { }
