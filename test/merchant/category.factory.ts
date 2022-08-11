import { name } from 'faker';
import { categoryTestRepo } from './category.test-repo';
interface CategoryType {
  name?: string;
}

export const buildCategoryParams = (obj: CategoryType = {}): CategoryType => {
  return {
    name: obj.name || name.title(),
  };
};

export const categoryFactory = async (obj: CategoryType = {}) => {
  const params: CategoryType = buildCategoryParams(obj);
  return await categoryTestRepo().save({ ...params });
};
