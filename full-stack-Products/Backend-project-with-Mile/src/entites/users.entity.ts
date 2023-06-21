import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
  name: "users",
})
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: "firstname",
    type: "varchar",
  })
  firstName: string;

  @Column({
    name: "lastname",
    type: "varchar",
  })
  lastName: string;

  @Column()
  age: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    name: "refreshtokens",
  })
  refreshTokens: string;
}
