const URL = 'https://www.postman.com/';
const frisby = require('frisby');

jest.setTimeout(15000);

// describe('Day 28', () => {
//   it('UI', async () => {
//     const response = await frisby.get(URL).expect('status', 200);

//     if (response._responseTimeMs < 1000) {
//       console.log('Response time is less than 1000ms. Test passed!');
//     } else {
//       console.log(
//         'Response time is greater than or equal to 1000ms. Test failed!'
//       );
//     }
//   });

  it('Lighthouse',  () => {
    const response = frisby
      .get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}`
      )
      .expect('status', 200)
      .expect('json', {
        data: {
          serverResponseTime: '46',
        }
      });
    });


