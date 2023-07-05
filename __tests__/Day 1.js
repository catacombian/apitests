const frisby = require("frisby");
const Joi = frisby.Joi;
let text = 'Hello world!'

// describe("Pastman Day 1", () => {
//     it("Post and get response", () => {
//       return frisby.post('https://postman-echo.com/post',
//       {payload: text})

//         .expect('status', 200)
//         .then((result) => {
//           let user_agent = result.json.headers['user-agent'].replace('+','')
//           return frisby
//           .get('https://postman-echo.com/get?user-agent=${user_agent}')
//           .expect('status', 200)
//           .expect('json', 'headers', {'user-agent': user_agent})

//       });
//     });
//  }) 



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
  