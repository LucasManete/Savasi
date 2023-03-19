import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'costumers' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: string;

  @Column({ nullable: false })
  description: string;

  @Column({ default: Date() })
  createdAt: string;

  @Column({ default: Date() })
  updatedAt: string;
}
