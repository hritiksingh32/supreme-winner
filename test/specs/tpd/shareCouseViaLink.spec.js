const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const shareTCPageObj = require(protractor.basePath+'/test/pageObject/collectionPageObj.js');

describe('shareCouseViaLink Verify', () => {

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
        //utility.userLogout();
        browser.manage().deleteAllCookies();
        
    });
    
    it('shareCouseViaLink',function(){
        utility.handleLocationPopup();
        utility.userLogin('Mentor');
        var courseName = sanityFun.copyContentFromTraining('Course');
        resourcePageObj.editTheCourseInDraft();
        tpdPageObj.sendForReviewTheCourse();
        utility.userLogout();
        utility.userLogin('Reviewer');
        utility.validateWorkspace();
        tpdPageObj.publishTheCourseFromUpForReview(courseName);
        utility.userLogout();
        utility.userLogin('SubOrgMentor');
        var courseName = sanityFun.copyContentFromTraining('Course');
        utility.userLogout();
        utility.userLogin('Mentor');
        shareTCPageObj.clickTrainingPage();
        shareTCPageObj.shareTheConentUsingLink(courseName);
        utility.userLogout();
        shareTCPageObj.verifyCollection();

       

    });
});
   

