const frisby = require('frisby');
const Joi = frisby.Joi;


describe('Day 10', () => {
  it('Mock', async () => {
   
    const response = await frisby
      .setup({
        request: {
          headers: {
            'x-api-key': process.env.API_KEY_TEST, 
          },
        },
      })
      .get('https://api.getpostman.com/collections/23496369-61b4b6e2-3161-4609-9676-e70f5294c422')
      .expect('status', 200);

    const collection = response.json.collection;
    const mockRequest = response.json.collection.item[0].item.find(
      (req) => req.name === 'mock call'
    );

    expect(collection.info.name).toEqual('Day 10: Mock services');
    expect(mockRequest.name).toEqual('mock call');
    expect(mockRequest.request.url.raw).toContain('mock.pstmn.io');
    });
  })