const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const searchAALTPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('User Is able To ValidatePAGE LANG translation and Regional langauge translation', () => {

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
    it('SearchAndApplyLanguageTranslate',function(){
         utility.handleLocationPopup();
        utility.userLogin('Creator');
        searchAALTPageObj.vaidatePageLangaugeTranslation();
        utility.userLogout();
       
        searchAALTPageObj.LangaugeTranslation();
        searchAALTPageObj.SearchCouseWithRegionalLang();
        
      
    })
    
   
   
    
});