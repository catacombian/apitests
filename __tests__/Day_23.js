const frisby = require('frisby');
const Joi = frisby.Joi;
const URL = 'https://postman-echo.com/get';
jest.setTimeout(500000);
const fs = require('fs');
const path = require('path');
const directoryName = path.basename(__dirname);
const filePath = path.resolve(directoryName, '../', 'geoMap.csv');
const fileData = fs.readFileSync(filePath, 'utf8');
const table = fileData;

describe('Postman Day 23', () => {

  it('Geo Map', async () => {

    console.log(table);

    for (let i = 1; i < table.length; i++) {
      const [region, boba] = table[i].split(',');
      const response = await frisby.get(`${URL}+?+${region}=${boba}`);
    }
  });
});




