import { Costumer } from "src/costumers/entities/costumer.entity";

export class CreateRequestDto {
  totalPrice: string;
  dataDeEntrega: string;
  custumer: Costumer;
}
