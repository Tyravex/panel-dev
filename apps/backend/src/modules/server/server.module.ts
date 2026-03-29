import { Module } from '@nestjs/common';
// Controllers
import { ServerController } from './server.controller';
// Services
import { ServerService } from './server.service';
import { PrismaService } from '@/prisma/prisma.service';
// Modules
import { AuthModule } from "@/modules/auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [ServerController],
  providers: [ServerService, PrismaService],
})

export class ServerModule {}