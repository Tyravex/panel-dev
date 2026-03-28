import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthTokenResponse, UserDTO } from '@shared/types';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) { }

  async validateUser(
    usernameOrEmail: string,
    password: string,
  ): Promise<UserDTO | null> {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [
          { email: usernameOrEmail },
          { username: usernameOrEmail }
        ],
      },
      include: {
        role: {
          include: {
            permissions: true,
          },
        },
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      return this.toUserDTO(user);
    }

    return null;
  }

  async login(user: UserDTO): Promise<AuthTokenResponse> {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
      permissions: user.permissions,
    };

    const access_token = this.jwtService.sign(payload, {
      expiresIn: '3600s',
    });

    const refresh_token = this.jwtService.sign(payload, {
      expiresIn: '7d',
      secret: process.env.JWT_REFRESH_SECRET,
    });
    console.log(user)
    return {
      access_token,
      refresh_token,
      user,
    };
  }

  async refreshToken(user: UserDTO): Promise<AuthTokenResponse> {
    return this.login(user);
  }

  async register(
    username: string,
    email: string,
    password: string,
    role = 'user',
  ): Promise<UserDTO> {
    const hashed = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        username,
        email,
        password: hashed,
        role: {
          connect: {
            name: role,
          },
        },
      },
    });

    return this.toUserDTO(user);
  }

  private toUserDTO(user: any): UserDTO {
    return {
      id: user.id,
      email: user.email,
      username: user.username,

      role: user.role?.name ?? null,
      permissions: user.role?.permissions.map((p: any) => p.name) ?? [],
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }
}
