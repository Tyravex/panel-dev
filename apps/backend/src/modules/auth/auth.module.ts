import { Module } from '@nestjs/common';
// Modules
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
// Services
import { PrismaService } from '@/prisma/prisma.service';
import { AuthService } from './auth.service';
// Controller
import { AuthController } from './auth.controller';
// Strategy
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_secret_key',
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  providers: [AuthService, JwtStrategy, PrismaService],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})

export class AuthModule {}