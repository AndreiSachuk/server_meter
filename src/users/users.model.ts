import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/post.model";

interface UserCreationAttrs {
  email: string,
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

  @ApiProperty({example: '1', description: 'Unique identify'})
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({example: 'user@gmail.com', description: 'User email'})
  @Column({type: DataType.STRING, unique: true, allowNull: true})
  email: string;

  @ApiProperty({example: 'Qwr23rsdf!', description: 'User password'})
  @Column({type: DataType.STRING, allowNull: true})
  password: string;

  @ApiProperty({example: 'true', description: 'Is user banned?'})
  @Column({type: DataType.BOOLEAN, defaultValue: false})
  banned: boolean;

  @ApiProperty({example: 'bad behaviour', description: 'Why user was banned?'})
  @Column({type: DataType.STRING, allowNull: true})
  banReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[]

  @HasMany(() => Post)
  posts: Post[]
}
