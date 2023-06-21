import { Player } from 'src/player/player.entity';
import { Team } from 'src/teams/teams.entity';
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Matches {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  league: string;

  @Column()
  time: string;

  @Column()
  result: string;

  @ManyToMany(()=> Player , player => player.matches)
  @JoinTable()
  players: Player[];


  @ManyToMany(() => Team,(team)=> team.matches)
  @JoinTable()
  team:Team[]
}
