
const API_ID = '45975726-b07c-4161-9dd6-160bf400ce92';
const URL = 'https://api.getpostman.com/apis/';
const frisby = require('frisby');

describe('Day 18', () => {
  it('Submit API', async () => {
    const result = await frisby
      .setup({
        request: {
          headers: {
            'x-api-key': process.env.API_KEY_TEST
          },
        },
      })
      .get(`${URL}/${API_ID}`)
      .expect('status', 200);

    expect(result.json.api.name).toEqual('Cosmos');
  });
});