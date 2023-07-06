const frisby = require('frisby');
const Joi = frisby.Joi;
let baseURL = 'https://postman-echo.com'

describe('Postman Day 3', () => {
  it('Add body data', () => {
    return frisby.post(`${baseURL}/post`, {
      payload: 'doodles'
    })
    .expect('status', 200)
    .expect('json', {
      data: {
        payload: 'doodles'
      }
    });
  });
})

