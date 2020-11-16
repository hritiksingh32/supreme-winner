const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('VerifyCertificateWithUserId', () => {

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
    it('VerifyCertificateWithUserId',function(){
        utility.handleLocationPopup();
        utility.userLogin('Mentor');
        EnrollTBFCPageObj.createCourse();
       let coursename=EnrollTBFCPageObj.sendForReviewCourseWithName();
        utility.userLogout();

        utility.userLogin('Reviewer');
        EnrollTBFCPageObj. publishTheCourseFromUpForReview(coursename);
        utility.userLogout();
    
        utility.userLogin('Mentor');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(coursename);
       EnrollTBFCPageObj.createOpenBatch();
        EnrollTBFCPageObj.editCertificateRequirement();
        EnrollTBFCPageObj.CheckCertificateOptions();

        
        
        


      
      
    })
    
   
   
    
});