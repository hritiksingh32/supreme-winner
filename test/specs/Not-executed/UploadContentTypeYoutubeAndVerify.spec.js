const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj = require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('upload Youtube, save and send for review and publish.', () => {

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
    it('Login into Application with creator user,send for review  ',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let uploadContent=uploadPageObj.uploadYoutube();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(uploadContent);
       utility.userLogout();
       utility.userLogin('Creator');
       utility.validateWorkspace();
       lspPageObj.deleteCreatedItems();
       
    })

  
   
});
   
