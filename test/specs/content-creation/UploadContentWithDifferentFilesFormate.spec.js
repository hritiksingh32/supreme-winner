const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj = require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Veri Content creator is able to upload contents with specified format files..', () => {

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
    it('UploadContentWithDifferentFilesFormate',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        utility.validateWorkspace();
        let uploadContent=uploadPageObj.uploadAllContent();
        utility.userLogout();
        utility.userLogin('Reviewer');
       // utility.validateWorkspace();
        resourcePageObj.publishTheResourceFromUpForReview(uploadContent);
        utility.userLogout();
        utility.userLogin('Creator');
     //   utility.validateWorkspace();
        lspPageObj.deleteCreatedItems();
        
    })

   
   
});
   
