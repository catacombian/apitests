const frisby = require('frisby');
jest.setTimeout(10000000);

describe('Postman Day 16', () => {
  it('Pagination', async () => {
    let page = 0;
    let status = 200;

    while (status == 200 && page < 10 ) {
      page++;
      const response = await frisby.get(`http://xkcd.com/${page}/info.0.json`);
      status = response.status;

    }
    console.log(page);
    expect(page).toEqual(10); // AR 404 but it takes 5min
  });
});