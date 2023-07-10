const frisby = require('frisby');
const Joi = frisby.Joi;
const AuthorizationToken = process.env.AuthorizationToken
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

// AuthorizationToken=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
// // 7f54302cc8db1c10e218de551e9ad86a8699c770