import { Injectable } from '@nestjs/common';
import { MerchantCategoryRepository } from '../category.repository';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class ExistingMerchantCategoryConstraint
  implements ValidatorConstraintInterface
{
  constructor(private merchantCategoryRepository: MerchantCategoryRepository) {}
  async validate(id: number): Promise<boolean> {
    const category = await this.merchantCategoryRepository.findCategoryById(id);
    if (!category) return false;
    return true;
  }

  defaultMessage() {
    return "this category doesn't exist";
  }
}

export function IsExistingMerchantCategory(
  validationOptions?: ValidationOptions,
) {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ExistingMerchantCategoryConstraint,
    });
  };
}
