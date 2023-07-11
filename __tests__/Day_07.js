const frisby = require("frisby");
const Joi = frisby.Joi;
frisby.globalSetup({
	request: {
		timeout: 10000,
	},
});

// const { response } = require('express');


describe('Day 7', () => {
  it('Apod', async () => {
    const response = await frisby
    .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=3")
		.expect("status", 200)
		.expect('jsonTypes', '*', {
	        title: Joi.string(),
	        url: Joi.string(),})
		.then((result) => {
			let pics = result.json
				pics.forEach((pic) => {console.log(pic.title, pic.url)})
			});
		});
});	
