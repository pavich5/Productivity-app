import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
  name: "users",
})
export class UpdateUsersEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({
    name: "firstname",
    nullable: true,
  })
  firstName?: string;

  @Column({
    name: "lastname",
    nullable: true,
  })
  lastName?: string;

  @Column({
    nullable: true,
  })
  age?: number;

  @Column({
    nullable: true,
  })
  email?: string;

  @Column({
    nullable: true,
  })
  password?: string;

  @Column({
    name: "refreshtokens",
    nullable: true,
  })
  refreshTokens?: string;
}
