const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const searchCBFPPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('able to search Coursebyfilter and validatelanguageTranslation and Get the contentfromQrcode ', () => {

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
        // utility.userLogout();
        browser.manage().deleteAllCookies();
    });
    it('SearchCourseByFilterParameter',function(){
         utility.handleLocationPopup();

         
        utility.userLogin('Public User1');
        searchCBFPPageObj.courseSearchFilter();
        utility.userLogout();

        utility.userLogin('Public User1');
        searchCBFPPageObj.clickOnViewAll();
        utility.userLogout();

       

       
       

    })
    
   
   
    
});