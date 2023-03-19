import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  description: string;

  @CreateDateColumn({ select: true })
  createdAt: Date;

  @UpdateDateColumn({ select: true })
  updatedAt: Date;

  @DeleteDateColumn({ select: true })
  deletedAt: Date;
}
