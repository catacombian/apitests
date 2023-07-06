const frisby = require('frisby');
const Joi = frisby.Joi;


describe('Day 10', () => {
  it('Mock', async () => {
    return frisby.get('https://f36b6e32-3930-43c8-bc8f-36a233681aab.mock.pstmn.io')
    .expect('status', 200)
    .expect('header', 'Content-Type', 'application/json; charset=utf-8')
    .then((result) => {
      console.info(result.json)
    })
  })
});

it('Mock name changed', function () {
  let goodbye = true
    return frisby.get(`https://f36b6e32-3930-43c8-bc8f-36a233681aab.mock.pstmn.io`)
    .setup(
      {request:
      {body:
      {'name': test}}})
  .expect('status', 200)
  .then((result) => {
    console.info(result.json)
  })
})