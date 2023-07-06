const frisby = require('frisby');
const Joi = frisby.Joi;
let coindeskBaseUrl = 'https://api.coindesk.com'
let currency = 'btc'

describe('Postman Day 5', () => {
  it('colletction var', () => {
    return frisby.get(`${coindeskBaseUrl}/v1/bpi/currentprice/${currency}.json`)
    .expect('status', 200)
  });
})    

