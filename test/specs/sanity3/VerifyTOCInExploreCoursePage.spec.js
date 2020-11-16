const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');

describe('Verify user is able to click on course tab and should get the lables,Featured course(Count)-Latest courses(Count)', () => {

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
        browser.manage().deleteAllCookies();
        
    });
    it('verifyTOCInExploreCoursePage',function(){
        utility.handleLocationPopup();
        verifyCEBpageobj.validateFeaturedCourseAndCount();
        verifyCEBpageobj.validateLatestCourseAndCount();
       
    });
});
   

