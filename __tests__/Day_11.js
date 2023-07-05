const frisby = require('frisby');
const Joi = frisby.Joi;


describe('Day 11', () => {
  it('Check status', async () => {
    return frisby
      .get('https://water-ttl.herokuapp.com/hygrometer')
      .expect('status', 200); });

    it('Plant watering', async () => {
      const response = await frisby
        .get('https://water-ttl.herokuapp.com/hygrometer')
        .expect('status', 200)
            
    if (response.json.level < 60) {
        let amount = 100 - parseInt(response.json.level);
        const queryWater = await frisby
          .post('https://water-ttl.herokuapp.com/water', {
            duration: amount,
          })
    .expect('status', 200);
        console.log('Watered');
        const responseAfterWatering = await frisby
          .get('https://water-ttl.herokuapp.com/hygrometer')
          .expect('status', 200);
          console.log('New level:' + responseAfterWatering.json.level);
        } else {
          console.log('Not neededed');
        }
        console.log('Level:' + response.json.level)
  });
})




