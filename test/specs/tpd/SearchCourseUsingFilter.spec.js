const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const searchCBFPPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('When is able to search a course by using Search filter and Page filter in course page section.', () => {

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
    it('SearchCourseUsingFilter',function(){
        utility.handleLocationPopup();

         
        utility.userLogin('Public User1');
        searchCBFPPageObj.courseSearchFilter();
        utility.userLogout();

        utility.userLogin('Creator');
        searchCBFPPageObj.vaidatePageLangaugeTranslation();
        utility.userLogout();

       
        utility.userLogin('Public User1');
        searchCBFPPageObj.clickOnViewAll();
        utility.userLogout();

        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendExplore='/explore';
        browser.get(Url+AppendExplore, 40000);
        searchCBFPPageObj.LangaugeTranslation();
        searchCBFPPageObj.SearchCouseWithRegionalLang();

      
       

    })
    
   
   
    
});