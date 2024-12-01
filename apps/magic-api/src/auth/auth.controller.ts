import { 
    Body, 
    Controller, 
    Get, 
    Post, 
    Delete, 
    UseGuards, 
    Param, 
    Put 
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { SignUpDto } from './dto/signup.dto';
  import { LoginDto } from './dto/login.dto';
  import { User } from './schemas/user.schema';
  import { AuthGuard } from '@nestjs/passport';
  
  @Controller('auth')
  export class AuthController {
    constructor(private readonly authService: AuthService) {}
  
    @Post('/signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
      return this.authService.signUp(signUpDto);
    }
  
    @Post('/login')
    login(@Body() loginDto: LoginDto): Promise<{ token: string }> {
      return this.authService.login(loginDto);
    }
  
    @Get('/allUsers')
    async getAllUsers(): Promise<User[]> {
      return this.authService.findAll();
    }
  
    @Put('/updateUser/:id')
    @UseGuards(AuthGuard())
    async updateUser(
      @Param('id') id: string,
      @Body() user: User,
    ): Promise<User> {
      return this.authService.updateById(id, user);
    }
  
    @Delete('/deleteUser/:id')
    @UseGuards(AuthGuard())
    async deleteById(@Param('id') id: string): Promise<User> {
      return this.authService.deleteById(id);
    }
  }
  
