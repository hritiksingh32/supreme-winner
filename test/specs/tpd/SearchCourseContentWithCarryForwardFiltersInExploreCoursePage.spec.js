const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const searchCCWCFFIECPPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const verifyCEBpageobj = require(protractor.basePath+'/test/pageObject/VerifySignInPopupInExploreCourseEnrollButtonObj.js');

describe('able search in explore page', () => {

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
    it('SearchCourseContentWithCarryForwardFiltersInExploreCoursePage',function(){
        utility.handleLocationPopup();
    //    searchCCWCFFIECPPageObj.searchContentWithFilter();
    //    searchCCWCFFIECPPageObj.carryForwardSearchFilter();
     //  searchCCWCFFIECPPageObj.getContentFromQRCode();
     
     //  searchCCWCFFIECPPageObj.courseSearch(); 
        searchCCWCFFIECPPageObj.navigateToTOCInExploreCoursePage();
        verifyCEBpageobj.validateSignInPopupOnClickOnEnroll();       
        
    })
    
   
   
    
});