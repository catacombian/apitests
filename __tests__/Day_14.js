const AuthorizationToken = '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';
const frisby = require('frisby');
const Joi = frisby.Joi;

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


