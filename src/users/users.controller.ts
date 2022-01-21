import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {CreateUserDto} from "./dto/createUser.dto";
import {UsersService} from "./users.service";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.model";
import {Roles} from "../auth/roles-auth.decorator";
import {RolesGuard} from "../auth/roles.guard";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

@ApiTags('Users')
@Controller('users')
export class UsersController {

  constructor(
    private userService: UsersService
  ) {
  }

  @ApiOperation({summary: 'Create user'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.createUser(userDto)
  }

  @ApiOperation({summary: 'Get all users'})
  @ApiResponse({status: 200, type: [User]})
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Get()
  getAll(){
    return this.userService.getAllUsers()
  }

  @ApiOperation({summary: 'Set user role'})
  @ApiResponse({status: 200})
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/role')
  addRole(@Body() dto: AddRoleDto){
    return this.userService.addRole(dto)
  }

  @ApiOperation({summary: 'User ban'})
  @ApiResponse({status: 200})
  @Roles('admin')
  @UseGuards(RolesGuard)
  @Post('/ban')
  ban(@Body() dto: BanUserDto){
    return this.userService.ban(dto)
  }

}
