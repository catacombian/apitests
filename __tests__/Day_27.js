const frisby = require('frisby');
const URL = 'http://security.postman-breakable.com';

describe('Day 27', () => {
  it('User workflow', async () => {
    const userLogged = await frisby
      .post(`${URL}/user/login`, {
        body: {
          username: 'janwys1',
          password: '12345s1',
        },
      })
      .expect('status', 200);

    const token = userLogged.json.response.session_token;
    const userId = userLogged.json.response.user_id;

    const information = await frisby
      .get(`${URL}/user`, {
        headers: {
          'x-api-key': token
        },
      })
      .expect('status', 200);

    const summaru = await frisby
      .get(`${URL}/account/${userId}/summary`, {
        headers: {
          'x-api-key': token
        },
      })
      .expect('status', 200);

    const logout = await frisby
      .get(`${URL}/user/logout`, {
        headers: {
          'x-api-key': token
        },
      })
      .expect('status', 200);

    const withoutToken = await frisby
      .get(`${URL}/account/${userId}/summary`)
      .expect('status', 403);
  });
})