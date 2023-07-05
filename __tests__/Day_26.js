const frisby = require('frisby');
const cheerio = require('cheerio');

describe('Day 26', () => {
  it('Parse bing', async () => {
    const response = await frisby
      .get('https://www.bing.com/search?q=postman')
      .expect('status', 200);

    const $ = cheerio.load(response.body);
    const links = [];

    $('h2').each((index, element) => {
      const linkElement = $(element).closest('a');
      const link = linkElement.attr('href');
      if (link) {
        links.push(link);
      }
    });

    expect(response.status).toBe(200);
    expect(links).toBeInstanceOf(Array);
  });
});