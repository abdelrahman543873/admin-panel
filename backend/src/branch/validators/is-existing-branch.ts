import { CategoryRepository } from '../../merchant/repositories/category.repository';
import { Injectable } from '@nestjs/common';
import { BranchRepository } from '../branch.repository';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class ExistingBranchConstraint implements ValidatorConstraintInterface {
  constructor(private branchRepository: BranchRepository) {}
  async validate(id: number): Promise<boolean> {
    const branch = await this.branchRepository.findBranchById(id);
    if (!branch) return false;
    return true;
  }

  defaultMessage() {
    return "this branch doesn't exist";
  }
}

export function IsExistingBranch(validationOptions?: ValidationOptions) {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ExistingBranchConstraint,
    });
  };
}
