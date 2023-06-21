import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Productss {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  description: string;
}
