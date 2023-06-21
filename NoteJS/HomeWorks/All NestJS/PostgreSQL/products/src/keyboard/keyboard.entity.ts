import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Keyboard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  stock: number;

  @Column()
  price: number;

  @Column()
  Type: string;
}
