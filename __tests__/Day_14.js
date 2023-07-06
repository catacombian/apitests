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
    console.log(response.json.length);
  });
})