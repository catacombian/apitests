const frisby = require('frisby');
const Joi = frisby.Joi;
const coindeskBaseUrl = 'https://api.coindesk.com'

describe('Postman day 7', () => {
      it('Get pics', function () {
        return frisby
          .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=10')
          .expect('status', 200)
          .then((response) => {
            const filteredResponse = response.json.map((item) => ({
              title: item.title,
              url: item.url,
            }
          ));
  
          console.log(filteredResponse);
        });
      });
    });
