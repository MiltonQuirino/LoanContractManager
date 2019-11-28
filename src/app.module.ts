import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContractController } from './contract/contract.controller';
import { ContractService } from './contract/contract.service';
import { ContractModule } from './contract/contract.module';
import { DocumentModule } from './document/document.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { ContractStatusModule } from './contract-status/contract-status.module';

@Module({
  imports: [ContractModule, DocumentModule, UserModule, AddressModule, ContractStatusModule],
  controllers: [AppController, ContractController],
  providers: [AppService, ContractService],
})
export class AppModule {}
