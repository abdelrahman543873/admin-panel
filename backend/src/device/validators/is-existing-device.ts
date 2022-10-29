import { Injectable } from '@nestjs/common';
import { DeviceRepository } from '../device.repository';
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
@Injectable()
export class ExistingDeviceConstraint implements ValidatorConstraintInterface {
  constructor(private deviceRepository: DeviceRepository) {}
  async validate(id: number): Promise<boolean> {
    const device = await this.deviceRepository.findOne({ where: { id } });
    if (!device) return false;
    return true;
  }

  defaultMessage() {
    return "this device doesn't exist";
  }
}

export function IsExistingDevice(validationOptions?: ValidationOptions) {
  return function (object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ExistingDeviceConstraint,
    });
  };
}
