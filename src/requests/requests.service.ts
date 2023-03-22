import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CostumersService } from 'src/costumers/costumers.service';
import { Costumer } from 'src/costumers/entities/costumer.entity';
import { Repository } from 'typeorm';
// import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request } from './entities/request.entity';

@Injectable()
export class RequestsService {
  constructor(
    private costumer: CostumersService,
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
  ) {}
  
 async create(createRequestDto: any) {

    createRequestDto.custumer =  await this.costumer.findOne(createRequestDto.custumer)
    
    return this.requestRepository.save(createRequestDto);
  }

  findAll() {
    return this.requestRepository.find();
  }

  findOne(id: string) {
    return this.requestRepository.findOne({ where: { id }});
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
