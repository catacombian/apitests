const frisby = require('frisby');
const Joi = frisby.Joi;
const coindeskBaseUrl = 'https://api.coindesk.com'

describe('Pastman Day 5', () => {
    it('colletction var', () => {
      let currency = 'btc'
      return frisby.get(`${coindeskBaseUrl}/v1/bpi/currentprice/${currency}.json`)
      .expect('status', 200)
  });
})    

