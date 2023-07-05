const frisby = require('frisby');
const Joi = frisby.Joi;


describe('Postman day 8', () => {
  it('Get random user', async () => {
    const result = await frisby
      .get('https://randomuser.me/api?gender=female&nat=FR')
      console.log(result.json)

    return frisby
      .get('https://randomuser.me/api?gender=female&nat=FR')
      .expect('status', 200)
      .expect('json', 'results.*.gender', 'female')
      .expect('json', 'results.*.nat', 'FR')
  });
});
