import { Customer } from "src/costumers/entities/costumer.entity";

export class CreateRequestDto {
  totalPrice: string;
  dataDeEntrega: string;
  customer: Customer;
}
