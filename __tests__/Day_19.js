const frisby = require('frisby');
const Joi = frisby.Joi;

describe('Postman Day 19', () => {
  it('Get Artist', async () => {
    const query = `query getByArtist($name: String!) {
      queryArtists(byName: $name) {
        name
        image
        albums {
          name
        }
        name
        image
        albums {
          name
        }
      }
    }`;

    const artist = {
      name: 'Red Hot Chili Peppers',
    };

    const response = await frisby
      .post('https://joyce-spotify-graphql.herokuapp.com/graphql', {
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables
        })
      })
      .expect('status', 200)
      .expect('json', 'data.queryArtists[0].name', `${artist.name}`);

    console.log(response.json.data);
  });
});