const frisby = require('frisby');
const Joi = frisby.Joi;
const AuthorizationToken = process.env.AUTHORIZATIONTOKEN
describe('Postman Day 14', () => {
  it('Github OAuth', async () => {
    const response = await frisby
      .get('https://api.github.com/user/repos', {
        headers: {
          Authorization: `Bearer ${AuthorizationToken}`,
        },
      })
      .expect('status', 200);
  });
})

