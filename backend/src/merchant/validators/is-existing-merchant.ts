import { Injectable } from '@nestjs/common';
import { MerchantRepository } from '../repositories/merchant.repository';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class ExistingMerchantConstraint
  implements ValidatorConstraintInterface
{
  constructor(private merchantRepository: MerchantRepository) {}
  async validate(id: number): Promise<boolean> {
    const merchant = await this.merchantRepository.findMerchantById(id);
    if (!merchant) return false;
    return true;
  }

  defaultMessage() {
    return "this merchant doesn't exist";
  }
}

export function IsExistingMerchant(validationOptions?: ValidationOptions) {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ExistingMerchantConstraint,
    });
  };
}
