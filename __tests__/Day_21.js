const frisby = require('frisby');
const Joi = frisby.Joi;

const BASE_URL = 'https://postman-echo.com';
const params = new URLSearchParams;

describe('Postman Day 21', () => {
  it('Websocket', async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            'x-api-key': process.env.API_KEY
          },
        },
      })
      .get(`${BASE_URL}/get?${params}`)
      .expect('status', 200);
  });
})
