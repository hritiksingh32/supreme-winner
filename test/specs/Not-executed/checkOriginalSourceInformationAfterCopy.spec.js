const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const signUpPageObj = require(protractor.basePath+'/test/pageObject/signUpPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('checkOriginalSourceInformationAfterCopy', () => {

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
    it('checkOriginalSourceInformationAfterCopy ',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        signUpPageObj.copyCourseFromSameTenant();
        // signUpPageObj.saveAndSendNewCourseForReview();
        // let courseName1 =  signUpPageObj.reviewInSubmissions();
        // utility.userLogout();

        // utility.userLogin('Reviewer');
        // utility.validateWorkspace();
        // signUpPageObj.publishTheCourseFromUpForReview(courseName1);
        // utility.userLogout();

        // utility.userLogin('Creator');
        // signUpPageObj.navigateToCourseAndSearchForOpenBatch(courseName1);
        // signUpPageObj.checkCreditSection();
        // signUpPageObj.deleteCreatedItems();
        // utility.userLogout();
      
   });
   
   


});
  
