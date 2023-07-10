const frisby = require('frisby');
const workspaceId = '7d8a92bc-32fb-401b-b36b-e52be20b3721';
const collectionUid = '23496369-fe19dc3c-4f42-4a29-8cc5-53b28bf61574';
// const x_api_key = process.env.API_KEY

const webhookName = 'echo webhook';
let newPayload = {};

jest.setTimeout(15000);

describe('Day 29', () => {  
  it('Create webhook', async () => {
      const response = await frisby
        .post(`https://api.getpostman.com/webhooks?workspace=${workspaceId}`, 
          {headers: {
              'x-api-key': process.env.API_KEY,
              },
          body: {
           'webhook':{
              'name': `${webhookName}`,
              'collection': `${collectionUid}`
              }
            }         
          })
        .expect('status', 200);  
  });
})

  it('Trigger Webhook', async () => {
  const response = await frisby
    .post('https://newman-api.getpostman.com/run/20832208/015fcf84-15fe-4664-9bff-eff4050fd0ac', 
      {body: {
          'message': 'yellow world'
          }})
    .expect('status', 200)    
    });       
