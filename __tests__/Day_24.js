const frisby = require('frisby');
const Joi = frisby.Joi;
const URL = 'http://worldtimeapi.org/api/ip';



describe('Day 24', () => {
  it('Libraries', async () => {
    await frisby
    .get('http://worldtimeapi.org/api/ip')
    .expect('status', 200)

    const moment = require('moment');
    let day = moment().add(2, 'd').format('dddd');
    console.log(day)
  });
});

