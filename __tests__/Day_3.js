const frisby = require('frisby');
const Joi = frisby.Joi;

describe('Pastman Day 3', () => {
    it('Add request details', () => {
      return frisby.post('https://postman-echo.com/post',{
        payload: 'doodles'
      })
        .expect('status', 200)
        .expect('json', {
          data: {
            payload: 'doodles',
          }
        });
    });
 }) 

