const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const BatchEDEPageObj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');

describe('user is not able to Enroll to the Course For EnrollMentDateEnded and Join Training Is Disabled', () => {

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
    it('BatchEnrollmentDateEnded',function(){
        utility.handleLocationPopup();
        var contentName = 'CourseAEna';
        utility.userLogin('Reviewer');
        BatchEDEPageObj.enrollmentDateEnded(contentName);
       
       
    })
    
   
   
    
});