import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCostumerDto } from './dto/create-costumer.dto';
import { UpdateCostumerDto } from './dto/update-costumer.dto';
import { Customer } from './entities/costumer.entity';
import { DataSource, Repository } from 'typeorm';
import { generateHash } from 'src/utils/hash.util';
import { errorHandlingUtil } from 'src/utils/error-handling.util';
import { UnauthorizedException } from 'src/utils/custom-http-error.util';
import { Created } from 'src/utils/custom-http-success';


@Injectable()
export class CostumersService {
  constructor(
    @InjectRepository(Customer)
    private costumerRepository: Repository<Customer>,
    private dataSource: DataSource
  ) {}

  async create(createCostumerDto: CreateCostumerDto) {

    try {

    const user = await this.costumerRepository.findOneBy({ email: createCostumerDto.email })

    if(user){
      throw new UnauthorizedException('usuário já cadastrado no sistema.');
    }

    createCostumerDto.password = await generateHash(createCostumerDto.password);

    const data = await this.costumerRepository.save(createCostumerDto)
    return Created({
      message: 'Usuário Cadastrado com Sucesso',
      data
    })

    } catch (error) {
      return errorHandlingUtil(error);
    }
  }

  findAll() {
    return this.costumerRepository.find();
  }

  findOne(id: string): Promise<Customer> {
    return this.costumerRepository.findOne({ where: { id } });
  }

  async update(id: string, updateCostumerDto: UpdateCostumerDto) {

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      
      if(updateCostumerDto.password){
        updateCostumerDto.password = await generateHash(updateCostumerDto.password);
      }

      const updatedUser = await this.costumerRepository.update(id, updateCostumerDto);
     
      await queryRunner.commitTransaction();

      return updatedUser;
    } catch (error) {
      await queryRunner.rollbackTransaction();
    }
  }

  async remove(id: string) {
    return await this.costumerRepository.softDelete({ id });
  }
}
