//import { browser, element, by } from "protractor";
var Request = require("request");
describe("Errors in Protractor",function(){
  browser.ignoreSynchronization = true; // for non-angular websites
  it("Error handleing in protractor",function(done){

    Request.get({
      "headers": { "content-type": "application/json" },
      "url": "https://staging.ntp.net.in/api/data/v1/form/read"
      

      }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir("Body : ******");
        console.dir(JSON.parse(body));

        console.log("\n\n\nResponse Code ****:"+response.statusCode)
		expect(response.statusCode).toBe(200)
        // this below line took half day of research
        done();
    });
  });
});