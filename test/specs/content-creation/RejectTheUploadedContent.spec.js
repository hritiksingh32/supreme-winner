const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const uploadPageObj = require(protractor.basePath+'/test/pageObject/uploadPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('ontent creator is able to see the conetnt in All uploads section ,post rejected by content reviewer..', () => {

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
    it('RejectTheUploadedContent',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let uploadContent= uploadPageObj.uploadH5p();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.rejectUploadedContent(uploadContent)
        utility.userLogout();
        utility.userLogin('Creator');
      //  utility.validateWorkspace();
       //write a method to validate content in all upload section and click on it
    //   resourcePageObj.editTheContentInDraft();
       
    })

    
   
});
   
