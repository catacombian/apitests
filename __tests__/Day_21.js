const frisby = require('frisby');
const Joi = frisby.Joi;

const BASE_URL = 'https://postman-echo.com';
const params = new URLSearchParams;
const collectionUid = '649c23f7e7a135bdb881b3d9'

describe('Day 21', () => {
  it('Websocket', async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            'x-api-key': process.env.API_KEY_TEST
          },
        },
      })
      .get(`${BASE_URL}/get?${params}`)
      .expect('status', 200);
    expect(response.json.args.collectionUid.length).toEqual(24);
  });
})
