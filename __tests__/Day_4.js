const frisby = require('frisby');
const Joi = frisby.Joi;
const api_key = 'PMAK-6496d941a272c6002a55f395-a59cf380ffcdbfac74a4e5a6d2a594711f'

describe('Pastman Day 4', () => {
    it('Authorization header api key', () => {
      return frisby
        .setup(
          {request:
            {headers:
              {'x-api-key': api_key}}})
      .get('https://api.getpostman.com/collections')
      .expect('status', 200)
      .then((result) => {
          let collections = result.json.collections;
          let header = ['Collection list']
          collections.forEach(element => header.push(element.name))
          console.log(header)
        });
    })
  })