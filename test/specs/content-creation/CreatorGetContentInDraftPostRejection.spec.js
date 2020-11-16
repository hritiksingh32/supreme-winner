const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const lessonPlanPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
describe('Vify, Content creator is able to get the content in Drafts section post rejected by the Content reviewer.', () => {

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
    it('CreatorGetContentInDraftPostRejection',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let lessonPlan=lessonPlanPageObj.createLessonPlan();
        lessonPlanPageObj.sendForReviewTheLessonPlan();
       // resourcePageObj.reviewInSubmissions(lessonPlan);
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.rejectLessonPlan(lessonPlan)
        utility.userLogout();
        utility.userLogin('Creator');
        resourcePageObj.editTheContentInDraft();
        
        
    })

   
   
});
   
