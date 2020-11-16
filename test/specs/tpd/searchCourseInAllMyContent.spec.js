const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Course creator should be able to search the course content  in All my content', () => {

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
    it('searchCourseInAllMyContent',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        tpdPageObj.navigateToAllMyContent();
        tpdPageObj.applyStatusFilterinAllMyContent();
        tpdPageObj.applyFilterinAllMyContent();
        tpdPageObj.verifyPagenationInAllMyContent();
        
        
    });
    
    

 
});
   
