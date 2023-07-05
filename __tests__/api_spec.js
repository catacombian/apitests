const frisby = require("frisby");
const Joi = frisby.Joi;

describe("Test Case 1", () => {
    it("should be a teapot", function () {
        return frisby
          .get('https://www.jsonfeed.org/feed.json')
          .expect('status', 200)
          .expect("header", "Content-Type", "application/json")
          .expect('json', 'title', 'JSON Feed')
          .expect('jsonTypes', 'items.*', { 
            'id': Joi.string().required(),
            'url': Joi.string().uri().required(),
            'title': Joi.string().required(),
            'date_published': Joi.date().iso().required(),
    });
  });
});
