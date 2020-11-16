const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const lessonPlanPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
describe('Content creator is able to add nodes & resources into the lesson.', () => {

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
    it('AddNodesAndResourceToLessonPlan',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let lessonPlan=lessonPlanPageObj.createLessonPlan();
        console.log("Created content name: "+lessonPlan);
        lessonPlanPageObj.previewTheResource();
        
    })

   
   
});
   
