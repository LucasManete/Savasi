import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CostumersService } from 'src/costumers/costumers.service';
import { ProductsService } from 'src/products/products.service';
import { DataSource, Repository } from 'typeorm';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestsService {
  constructor(
    private costumer: CostumersService,
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
    private dataSource: DataSource
  ) {}
  
 async create(createRequestDto): Promise<Request[]> {
  const queryRunner = this.dataSource.createQueryRunner();
  await queryRunner.connect();
  await queryRunner.startTransaction();

  try {

    createRequestDto.customer =  await this.costumer.findOne(createRequestDto.customer)

    const request = await this.requestRepository.save(createRequestDto)
    await queryRunner.commitTransaction();

    return request
  } catch (error) {
    await queryRunner.rollbackTransaction();
  }

  }

  findAll() {
    return this.requestRepository.find();
  }

  findOne(id: string) {
    return this.requestRepository.findOne({ where: { id }});
  }

 async  update(id: string, updateRequestDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

  try {
    const updatedRequest =  this.requestRepository.update({ id }, updateRequestDto);
    await queryRunner.commitTransaction();

    return updatedRequest
  } catch (error) {
    await queryRunner.rollbackTransaction();
  }
  }

  remove(id: string) {
    return this.requestRepository.softDelete(id);
  }
}
