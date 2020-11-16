//import { browser, element, by } from "protractor";
var Request = require("request");
describe("Errors in Protractor",function(){
  browser.ignoreSynchronization = true; // for non-angular websites
  it("api Testing in protractor",function(done){
    
    Request.post({
      "headers": { "content-type": "application/json" },
      "url": "http://staging.ntp.net.in/api/data/v1/form/read",
      "body": JSON.stringify({

        "type":'content',
        "framework":'ekstep_ncert_k-12',
        "action":'review',
        "subType": 'resource',
        "rootOrgId":'012550822176260096119',

      })

      }, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir("Body : ******");
        console.dir(response.body);

      //  console.log("\n\nHeader ****:")
      //   console.log(response.headers)

        console.log(response)
     // console.log(response.body.stringify)

        // this below line took half day of research
        done();
    });
  });
});