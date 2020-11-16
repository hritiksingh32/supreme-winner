const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const EnrollTBFCPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('able to create course and enroll consume and creator able to delete that course', () => {

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
    it('EnrollingToBatchForCourse',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
       EnrollTBFCPageObj.createCourse();
     
        let coursename=EnrollTBFCPageObj.sendForReviewCourseWithName();
        utility.userLogout();

        utility.userLogin('Reviewer');
        EnrollTBFCPageObj. publishTheCourseFromUpForReview(coursename);
        utility.userLogout();

        utility.userLogin('Creator');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(coursename);
         EnrollTBFCPageObj.batchNameAndEndDateIsMandatoryFields();
        EnrollTBFCPageObj.createOpenBatchWithEnrolmentDate();
        utility.userLogout();

        utility.userLogin('Public User1');
        EnrollTBFCPageObj.navigateToCourseAndSearchForOpenBatch(coursename);
        var fetchCoursename= EnrollTBFCPageObj.enrollForOpenBatch();
       // EnrollTBFCPageObj.checkTheCourseInMyCourseSection(fetchCoursename);
        utility.userLogout();

        utility.userLogin('Creator');
        lspPageObj.deleteCreatedItems();
        


      
      
    })
    
   
   
    
});