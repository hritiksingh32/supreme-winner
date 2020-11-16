const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js')

describe('Course reviewer is able to rejects the course .', () => {

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
    it('CreateCourseAndRejectCourse  ',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        tpdPageObj.createCourse();
        let courseName=tpdPageObj.sendForReviewCourseWithName();
      //resourcePageObj.reviewInSubmissions(courseName);
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.rejectLessonPlan(courseName)
        utility.userLogout();
        utility.userLogin('Creator');
        tpdPageObj.editTheCourseInDraft();
        tpdPageObj.sendForReviewTheRejectedCourse();
        utility.userLogout();
        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        tpdPageObj.publishTheCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        lspPageObj.deleteCreatedItems();
       
       
    })

   
   
});
   
