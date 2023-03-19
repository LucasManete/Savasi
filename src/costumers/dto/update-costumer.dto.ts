import { PartialType } from '@nestjs/mapped-types';
import { CreateCostumerDto } from './create-costumer.dto';

export class UpdateCostumerDto extends PartialType(CreateCostumerDto) {
  name?: string;
  email?: string;
  address?: string;
  password?: string;
}
