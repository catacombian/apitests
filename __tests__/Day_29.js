const API_KEY_TEST = "PMAK-6496d941a272c6002a55f395-6c6dba44a4ff892174c4340dad7c8eef46";
const COLLECTIONU_UID = "23496369-c1b93bb6-3a16-47dc-af47-e6dc91cc281c";
const BASE_URL = "https://api.getpostman.com/collections";
const frisby = require("frisby");

describe("Day 29",  () => {

  it("Submit", async () => {
    const response = await frisby
      .setup({
        request: {
          headers: {
            "x-api-key": API_KEY_TEST,
          },
        },
      })
      .get(`${BASE_URL}/${COLLECTIONU_UID}`)
      .expect("status", 200);

    const collection = response.json.collection;
    const folder = collection.item.find((fol) => fol.name === "Webhooks");

    expect(collection.info.name).toBe("Day 29: Webhooks");
    expect(folder.item.length).toBe(3);

    const echoRequest = folder.item.find((req) => req.name === "echo");
    expect(echoRequest.name).toBe("echo");
    expect(echoRequest.request.method).toBe("POST");
    expect(echoRequest.request.url.raw).toContain(
      "https://postman-echo.com/post"
    );

    const createRequest = folder.item.find((req) =>
      req.name.includes("Create webhook")
    );

    expect(createRequest.name).toBe("Create Webhook");
    expect(createRequest.request.method).toBe("POST");
    expect(createRequest.request.url.raw).toContain(
      "https://api.getpostman.com/webhooks"
    );

    const triggerRequest = folder.item.find(
      (req) => req.name === "Trigger Webhook"
    );
    expect(triggerRequest.name).toBe("Trigger Webhook");
    expect(triggerRequest.request.method).toBe("POST");
    expect(triggerRequest.request.url.raw).toContain(
      "https://newman-api.getpostman.com/run"
    );

    expect(echoRequest.request.body.raw).toBe("{{newPayload}}");

    const preReq = echoRequest.event.find(
      (event) => event.listen === "prerequest"
    );
    expect(preReq.script.exec.toString()).toContain("globals.previousRequest");
    expect(preReq.script.exec.toString()).toContain(
      "pm.collectionVariables.set"
    );

    const test = echoRequest.event.find((event) => event.listen === "test");
    expect(test.script.exec.toString()).toContain("pm.test");
    expect(test.script.exec.toString()).toContain(
      "postman.setNextRequest(null)"
    );
    expect(test.script.exec.toString()).toContain("console.log");

    expect(triggerRequest.request.body.raw.toString()).toContain("message");
  });
});