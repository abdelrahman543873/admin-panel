import { CategoryRepository } from './../repositories/category.repository';
import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class ExistingCategoryConstraint
  implements ValidatorConstraintInterface
{
  constructor(private categoryRepository: CategoryRepository) {}
  async validate(id: number): Promise<boolean> {
    const category = await this.categoryRepository.findCategoryById(id);
    if (!category) return false;
    return true;
  }

  defaultMessage() {
    return "this category doesn't exist";
  }
}

export function IsExistingCategory(validationOptions?: ValidationOptions) {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ExistingCategoryConstraint,
    });
  };
}
