import { Costumer } from 'src/costumers/entities/costumer.entity';
import { Product } from 'src/products/entities/product.entity';
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    ManyToOne,
    ManyToMany,
    JoinTable,
    JoinColumn,
  } from 'typeorm';
  @Entity({ name: 'requests' })
  export class Request {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false })
    totalPrice: number;
  
    @Column({ nullable: false })
    dataDeEntrega: string;
  
    @CreateDateColumn({ select: true })
    createdAt: Date;
  
    @UpdateDateColumn({ select: true })
    updatedAt: Date;
  
    @DeleteDateColumn({ select: true })
    deletedAt: Date;

    @ManyToOne(() => Costumer, (costumer) => costumer.id, { nullable: false, eager: false })
    @JoinColumn({name : 'custumerId'})
    custumer: Costumer

    @ManyToMany(() => Product)
    @JoinTable()
    product: Product[]
  }
  
