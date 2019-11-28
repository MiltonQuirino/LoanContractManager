import { Test, TestingModule } from '@nestjs/testing';
import { ContractStatusService } from './contract-status.service';

describe('ContractStatusService', () => {
  let service: ContractStatusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContractStatusService],
    }).compile();

    service = module.get<ContractStatusService>(ContractStatusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
