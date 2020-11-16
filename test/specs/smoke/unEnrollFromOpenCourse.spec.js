const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Verify that user can unenroll the open courses.', () => {

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
    it('unEnrollFromOpenCourse ',function(){
        utility.handleLocationPopup();
        utility.userLogin('Mentor');
        utility.validateWorkspace();
        tpdPageObj.createCourse();
        let courseName=tpdPageObj.sendForReviewCourseWithName();
        utility.userLogout();
        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        tpdPageObj.publishTheCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('Mentor');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName); 
        tpdPageObj.createOpenBatch();
        utility.userLogout();

        utility.userLogin('Public User1');
        tpdPageObj.navigateToCourseAndSearchForOpenBatch(courseName);
        tpdPageObj.enrollForOpenBatch();
        tpdPageObj.unenrollFromBatch();
        utility.userLogout();

        utility.userLogin('Mentor');
        lspPageObj.deleteCreatedItems();
        
    })

   
   
});
   
