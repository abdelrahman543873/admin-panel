import { Injectable } from '@nestjs/common';
import { PosRepository } from '../repositories/pos.repository';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class ExistingPosConstraint implements ValidatorConstraintInterface {
  constructor(private posRepository: PosRepository) {}
  async validate(id: number): Promise<boolean> {
    const pos = await this.posRepository.findPosById(id);
    if (!pos) return false;
    return true;
  }

  defaultMessage() {
    return "this pos doesn't exist";
  }
}

export function IsExistingPos(validationOptions?: ValidationOptions) {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ExistingPosConstraint,
    });
  };
}
