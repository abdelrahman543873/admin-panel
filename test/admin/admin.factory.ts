import { internet, name } from 'faker';
import * as moment from 'moment';
import { adminTestRepo } from './admin.test-repo';
interface AdminType {
  email?: string;
  name?: string;
  password?: string;
  refreshToken?: string;
  refreshTokenExp?: string;
}

export const buildAdminParams = (obj: AdminType = {}): AdminType => {
  return {
    email: obj.email || internet.email(),
    name: obj.name || name.title(),
    password: obj.password || internet.password(),
    refreshToken: obj.refreshToken || internet.password(),
    refreshTokenExp:
      obj.refreshTokenExp || moment().day(1).format('YYYY/MM/DD'),
  };
};

export const adminFactory = async (obj: AdminType = {}) => {
  const params: AdminType = buildAdminParams(obj);
  return await adminTestRepo().save({ ...params });
};
