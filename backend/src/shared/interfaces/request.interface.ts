import { Request } from 'express';
import { Admin } from '../../admin/admin.entity';
export interface RequestContext extends Request {
  user?: Admin;
}
