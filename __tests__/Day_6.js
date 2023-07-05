const frisby = require('frisby');
const Joi = frisby.Joi;
const coindeskBaseUrl = 'https://api.coindesk.com'

describe('Postman Day 6', () => {
    it('Request 202', () => {
      return frisby
      .setup({
        request: {
          headers: {
            'Accept': 'application/json'}
        }
      })
      .get('https://icanhazdadjoke.com/')
      .expect('status', 200)
    });
})

  it('Failed test', () => {
    return frisby
    .setup({
      request: {
        headers: {
          'Accept': 'application/json'}
      }
    })
    .get('https://icanhazdadjoke.com/')
    .expect('status', 404)
  });