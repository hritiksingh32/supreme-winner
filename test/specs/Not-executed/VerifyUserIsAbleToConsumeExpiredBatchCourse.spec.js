const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Course name: Expired Batch Course', () => {

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
    it('VerifyUserIsAbleToConsumeExpiredBatchCourse',function(){
        utility.handleLocationPopup();
        let coursename= "vk-2.8.8Coursewithallcontents";
        utility.userLogin('Public User1');
        EnrollTBFCPageObj.consumeTheExpiredBatchCourseAndEnrolToOpenBatch(coursename);
       

       


      
      
    })
    
   
   
    
});