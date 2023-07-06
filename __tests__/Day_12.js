const frisby = require('frisby');
const Joi = frisby.Joi;
const COLLECTIONID = '23496369-a69c205f-2123-4f06-9775-4e0489e63699';
const ENVIRONMENTID  = '23496369-94548972-13b5-4e4b-86ce-5185d74adfc9';
const WORKSPACEID = '7d8a92bc-32fb-401b-b36b-e52be20b3721';


describe('Day 12', () => {
  it('Environment var', async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            'x-api-key': process.env.API_KEY,
          },
        },
      })
      .post('https://postman-echo.com/post', {
        collectionId: COLLECTIONID,
        environmentId: ENVIRONMENTID,
        workspaceId: WORKSPACEID
      })
      .expect('status', 200)
      .expect('json', 'data', {
        collectionId: COLLECTIONID,
        environmentId: ENVIRONMENTID,
        workspaceId: WORKSPACEID
      });
  });
});