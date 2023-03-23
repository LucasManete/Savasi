import { PartialType } from '@nestjs/mapped-types';
import { Product } from 'src/products/entities/product.entity';
import { CreateRequestDto } from './create-request.dto';

export class UpdateRequestDto extends PartialType(CreateRequestDto) {
  totalPrice?: string;
  dataDeEntrega?: string;
  products?: Product[];
}
