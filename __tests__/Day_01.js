const frisby = require("frisby");
const Joi = frisby.Joi;
let text = 'Hello world!'

describe("Postman Day 1", () => {
  it("Post and get response", async () => {
    const result = await frisby.post('https://postman-echo.com/post', {
      payload: text,
    })
    .expect('status', 200)
    .expect('json', 'data', {
      payload: text
    })
    let res = result.json['headers']['useragent'];  
    const result2 = await frisby
    .get('https://postman-echo.com/get?user-agent' + res)
    .expect('status', 200)
    console.log(result2.json.args['user-agent'])
    expect(result2.json.headers['user-agent']).toBe('frisby/2.1.3 (+https://github.com/vlucas/frisby)')
  })
});
  