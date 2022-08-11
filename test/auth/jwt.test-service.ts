import { JwtService } from '@nestjs/jwt';

export const jwtTestService = (): JwtService => global.jwtService;
