import { Matches } from 'src/mathces/matches.entity';
import { Team } from 'src/teams/teams.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  salary: number;

  @Column()
  ranking: number;

  @ManyToOne(() => Team, team => team.players) 
  @JoinColumn()
  team: Team;

  @ManyToMany(() => Matches, match => match.players) 
  matches: Matches[];
}

