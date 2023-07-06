const frisby = require('frisby');
const Joi = frisby.Joi;
const URL = 'https://postman-echo.com';

const fs = require('fs');
const path = require('path');

describe('Day 23', () => {
  jest.setTimeout(100000);
  it('Geo Map', async () => {
    const filePath = path.resolve('../', 'geoMap.csv');
    const fileData = fs.readFileSync(filePath, 'utf8');
    const table = fileData.split('\n');
    console.log(table);

    for (let i = 1; i < table.length; i++) {
      const [region, boba] = table[i].split(',');
      const response = await frisby.get(`${URL}/get?${region}=${boba}`);
    }
  });
});