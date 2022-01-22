import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'user@gmail.com', description: 'User email'})
  @IsString({message: 'Must be a string'})
  @IsEmail({},{message: 'Incorrect email'})
  readonly email: string

  @ApiProperty({example: 'Qwr23rsdf!', description: 'User password'})
  @IsString({message: 'Must be a string'})
  @Length(4, 16, {message: 'Password must be longer than 4 and less than 16 characters'})
  readonly password: string
}
