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
    private usersRepository: Repository<Costumer>,
  ) {}

  async create(createCostumerDto: CreateCostumerDto): Promise<Costumer> {
    return this.usersRepository.create(createCostumerDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Costumer> {
    return this.usersRepository.findOneBy({ id });
  }

  update(id: string, updateCostumerDto: UpdateCostumerDto) {
    return this.usersRepository.update(id, updateCostumerDto);
  }

  remove(id: string) {
    return this.usersRepository.softDelete(id);
  }
}
