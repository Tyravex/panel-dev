import { Controller, Post, Body, UseGuards, Request, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginRequest, AuthTokenResponse } from '@shared/types';
import { JwtAuthGuard } from './guards/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() body: any) {
    return this.authService.register(
      body.username,
      body.email,
      body.password,
    );
  }

  @Post('login')
  async login(@Body() loginRequest: AuthLoginRequest): Promise<AuthTokenResponse> {
    const user = await this.authService.validateUser(loginRequest.usernameOrEmail, loginRequest.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  async refresh(@Request() req: any): Promise<AuthTokenResponse> {
    return this.authService.refreshToken(req.user);
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(): Promise<{ message: string }> {
    return { message: 'Logged out successfully' };
  }
}
