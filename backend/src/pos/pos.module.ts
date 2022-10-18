import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PosController } from './pos.controller';
import { Pos } from './pos.entity';
import { PosService } from './pos.service';
import { PosRepository } from './pos.repository';
import { ExistingPosConstraint } from './validators/is-existing-pos.validator';

@Module({
  imports: [TypeOrmModule.forFeature([Pos])],
  controllers: [PosController],
  providers: [PosService, PosRepository, ExistingPosConstraint],
})
export class PosModule {}
