import {
  Injectable,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Extract JWT token from cookies instead of Authorization header
   */
  getRequest(context: ExecutionContext): Request {
    const req = context.switchToHttp().getRequest<Request>();

    return req;
  }

  /**
   * Optional: handle errors globally for cleaner responses
   */
  handleRequest(err: any, user: any) {
    if (err || !user) {
      throw new UnauthorizedException('Unauthorized');
    }

    return user; // gets attached to req.user
  }
}