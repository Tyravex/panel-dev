import { Injectable } from '@nestjs/common';
// Services
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class ServerService {
  constructor(private prisma: PrismaService) {}
  
  async getUserServers(userId: number) {
  return this.prisma.server.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

  async createServer(userId: number, data: any) {
    return this.prisma.server.create({
      data: {
        name: data.name,
        userId,
      },
    });
  }
}