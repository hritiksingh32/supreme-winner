const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const usrOnBoardfun = require(protractor.basePath + '/test/pageObject/UserOnBoardingPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('Course creator should have two section under "Courses Batches" :1.Created by me 2.Assigned to me', () => {

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
    it('verifyAllBatchDetailsInCourseBatches',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        tpdPageObj.createCourse();
        let courseName=tpdPageObj.sendForReviewCourseWithName();
        utility.userLogout();
        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        tpdPageObj.publishTheCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        tpdPageObj.batchNameAndEndDateIsMandatoryFields();
        tpdPageObj.createOpenBatchWithEnrolmentDate();
        tpdPageObj.createUpcomingOpenBatchForCourse();
        utility.userLogout();
        utility.userLogin('Public User1');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        let fetchCoursename =tpdPageObj.enrollForOpenBatch();
        utility.userLogout();
        utility.userLogin('Creator');
        tpdPageObj.navigateToWorkspaceFeatures('COURSE_BATCHES');
        tpdPageObj.validateCourseInAssigToMeSection();
        tpdPageObj.navigateToWorkspaceFeatures('COURSE_BATCHES');
        tpdPageObj.verifyCourseInOnGoingBatchSection();
        tpdPageObj.updateBatches();
        tpdPageObj.validateAllBatches();
        utility.userLogout();
        utility.userLogin('Mentor');
        tpdPageObj.navigateToWorkspaceFeatures('COURSE_BATCHES');
        tpdPageObj.updateBatches();
        tpdPageObj.verifyBatchEditingFromExpiredCoursesSection();
        tpdPageObj.verifyPagenation('onGoingViewAll');
        tpdPageObj.validationMsgWhileAddingMoreThan100Members();
       
    });
    
    

 
});
   
