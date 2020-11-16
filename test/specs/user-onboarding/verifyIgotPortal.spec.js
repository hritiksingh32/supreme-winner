const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');

describe('Verify test cases for Igotportal', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url="https://igot.gov.in/igot/explore-course";
        //var AppendExplore='/explore';
        browser.get(Url, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    });

    afterEach(() => {
        browser.waitForAngularEnabled(false);
        browser.manage().deleteAllCookies();
    });

    it('verify Igot Portal',function(){
        usrOnBoardfun.verifyIgot();
        

});
});