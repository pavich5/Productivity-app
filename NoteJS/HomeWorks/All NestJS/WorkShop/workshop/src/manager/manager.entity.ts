import { Team } from 'src/teams/teams.entity';
import { Column, Entity, OneToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Manager {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @Column()
  salary: number;

  @OneToOne(() => Team, team => team.manager)
  team: Team;
}
