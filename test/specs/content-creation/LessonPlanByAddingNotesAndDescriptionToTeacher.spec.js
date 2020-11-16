const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const lessonPlanPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Ve that creator is able to create the Lesson plan by adding Description and Notes to Teacher, .', () => {

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

    it('LessonPlanByAddingNotesAndDescriptionToTeacher',function(){

        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let lessonPlan=lessonPlanPageObj.createLessonPlan();
        resourcePageObj.sendForLimitedSharing(lessonPlan);
        resourcePageObj.clickingTheResourceFromShareViaLinkBucket();
        resourcePageObj.sendForReviewInShareVialinkForLessonPlan();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.reviewInSubmissions(lessonPlan);
        resourcePageObj.publishTheLessonFromUpForReview(lessonPlan);
        utility.userLogout();
        utility.userLogin('Creator');
        resourcePageObj.deleteCreatedItems();

    });
});