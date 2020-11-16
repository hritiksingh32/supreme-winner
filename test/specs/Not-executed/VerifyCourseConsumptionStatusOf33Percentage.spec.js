const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/signUpPageObj.js');

describe('Course consumption (additional percentage)', () => {

    beforeEach(() => {
        browser.ignoreSynchronization = true;
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        browser.manage().timeouts().implicitlyWait(30000);
        browser.driver.manage().window().maximize(); 
       
    });
    afterEach(() => {
        browser.waitForAngularEnabled(false);
        utility.userLogout();
        browser.manage().deleteAllCookies();
    });

    it('VerifyCourseConsumptionStatusOf33Percentage ',function(){
        utility.handleLocationPopup();
        utility.userLogin('CustodianUser');
        let fetchCoursename="copy of course jkl";
        tpdPageObj.navigateToParticularCourseAndSearchForOpenBatch(fetchCoursename);
        tpdPageObj.enrollForOpenBatch();
        tpdPageObj.consumeAndVerifyConsumptionFor3Contents('Your Progress 33%');
        tpdPageObj.consumeAndVerifyConsumptionFor3Contents('Your Progress 66%');
        tpdPageObj.consumeAndVerifyConsumptionFor3Contents('Your Progress 100%');
        tpdPageObj.navigateToParticularCourseAndSearchForOpenBatch(fetchCoursename);
        tpdPageObj.checkProgressBarInTOC();
        tpdPageObj.checkTheCourseInMyCourseSection(fetchCoursename)
        tpdPageObj.checkProgressBarInMyCourseSection();
       

    })
   
});
   
