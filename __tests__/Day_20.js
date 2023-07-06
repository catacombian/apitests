const frisby = require('frisby');
const Joi = frisby.Joi;

const collection = 'https://api.getpostman.com/collections/23496369-9d04d85d-444a-46e9-92bc-a7a4de0f236c';

describe('Postman Day 20', () => {
  it('Submit', async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            'x-api-key': process.env.API_KEY
          },
        },
      })
      .get(`${collection}`)

  });
});