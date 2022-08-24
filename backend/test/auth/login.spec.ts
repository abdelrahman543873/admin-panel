import { testRequest } from '../request';
import { HTTP_METHODS_ENUM } from '../request.methods.enum';
import { adminFactory } from '../admin/admin.factory';
import { LOGIN } from '../endpoints/auth.endpoints';
describe('login suite case', () => {
  it('should login', async () => {
    const admin = await adminFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: LOGIN,
      variables: { email: admin.email, password: admin.password },
    });
    expect(response.body.id).toBe(admin.id);
    expect(response.body.name).toBe(admin.name);
    expect(response.body).toHaveProperty('token');
  });

  it("shouldn't login when password is incorrect", async () => {
    const admin = await adminFactory();
    const response = await testRequest({
      method: HTTP_METHODS_ENUM.POST,
      url: LOGIN,
      variables: { email: admin.email, password: admin.name },
    });
    expect(response.body.statusCode).toBe(401);
  });
});
