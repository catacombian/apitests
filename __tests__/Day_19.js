const frisby = require("frisby");

describe("Day 19", () => {
  it("Get Artist Information", async () => {
    let variables = {
      name: 'Red Hot Chili Peppers',
    };
    let query = `query getByArtist($name: String!) {
      queryArtists(byName: $name) {
          name
          image
          albums {
              name
          }
      }
    }`;

    const response = await frisby
      .post('https://joyce-spotify-graphql.herokuapp.com/graphql', {

        body: JSON.stringify({
          query,
          variables
        })
      })
      .expect('status', 200)
      .expect('json', 'data.queryArtists[0].name', `${variables.name}`);

    console.log(response.json.data);
  });
})

