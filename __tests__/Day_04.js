const frisby = require('frisby');
const Joi = frisby.Joi;


describe('Postman Day 4', () => {
  it('Authorization using api key', () => {
    return frisby
      .setup(
        {request:
          {headers:
            {'x-api-key': process.env.API_KEY}}})
      .get('https://api.getpostman.com/collections')
      .expect('status', 200)
      .then((result) => {
        let collections = result.json.collections;
        let collection = ['Collection list']
        collections.forEach(element => collection.push(element.name))
        // console.log(collection)
    });
  })
})