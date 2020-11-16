const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');
const lessonPlanPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('content creator is able to access the resource section to create resources.', () => {

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
    it('CreateResourceValidateAndConsume',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let resourceName=resourcePageObj.createResource();
        resourcePageObj.sendForReviewTheResource();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(resourceName);
        utility.userLogout();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        lessonPlanPageObj.deleteCreatedItems();   

    })

   
   
});
   
