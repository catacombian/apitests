const frisby = require("frisby");
const Joi = frisby.Joi;

describe('Postman Day 2', () => {
    it('Post raw text', () => {
      return frisby.post('https://postman-echo.com/post', {
        payload: 'Raw text',
      })
      .expect('status', 200)
      .expect('json', {
        data: {
          payload: 'Raw text',
        }
      });
    });
 }) 

 describe('Postman Day 2', () => {
  it('Get with query', () => {
    return frisby.get('https://postman-echo.com/get?foo=bar&name=ferret', {
      payload: 'Raw text',
    })
      .expect('status', 200)
      .expect('json', {
        args: {
          foo: 'bar',
          name: 'ferret'
        }
      });
  });
}) 