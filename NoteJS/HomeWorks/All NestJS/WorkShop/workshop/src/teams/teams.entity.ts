import { Manager } from 'src/manager/manager.entity';
import { Matches } from 'src/mathces/matches.entity';
import { Player } from 'src/player/player.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ranking: number;

  @Column()
  budget: number;

  @OneToOne(() => Manager, manager => manager.team)
  @JoinColumn()
  manager: Manager;

  @OneToMany(() => Player, player => player.team)
  players:Player[]

  @ManyToMany(()=> Matches, match => match.team)
  matches:Matches[];
}
