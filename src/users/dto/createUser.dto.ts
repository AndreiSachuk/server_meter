import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({example: 'user@gmail.com', description: 'User email'})
  readonly email: string

  @ApiProperty({example: 'Qwr23rsdf!', description: 'User password'})
  readonly password: string
}