import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { Costumer } from './entities/costumer.entity';
import { Repository } from 'typeorm';


@Injectable()
export class CostumersService {
  constructor(
    @InjectRepository(Costumer)
    private costumerRepository: Repository<Costumer>,
  ) {}

  async create(createCostumerDto: CreateCostumerDto): Promise<Costumer> {
    return this.costumerRepository.save(createCostumerDto);
  }

  findAll() {
    return this.costumerRepository.find();
  }

  findOne(id: string): Promise<Costumer> {
    return this.costumerRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCostumerDto: UpdateCostumerDto) {
    return await this.costumerRepository.update(id, updateCostumerDto);
  }

  async remove(id: string) {
    return await this.costumerRepository.softDelete({ id });
  }
}
