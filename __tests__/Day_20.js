const frisby = require('frisby');
const Joi = frisby.Joi;

const BASE_URL = 'https://api.getpostman.com/collections/23496369-9d04d85d-444a-46e9-92bc-a7a4de0f236c';

describe('Day 20', () => {
  it('Submit', async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            'x-api-key': process.env.API_KEY_TEST
          },
        },
      })
      .get(`${BASE_URL}`)
      .expect('status', 200);
    const collection = response.json.collection;
    const firstRequest = collection.item[0].item[0];

    expect(collection.info.name).toEqual('Day 20: Documentation');
    expect(firstRequest.request.description).not.toBeNull();
    expect(firstRequest.request.url.query).not.toBeNull();
    expect(firstRequest.request.header).not.toBeNull();
  });
});