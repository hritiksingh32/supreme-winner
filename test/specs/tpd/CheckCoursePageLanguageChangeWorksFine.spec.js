const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const checkCPLCWFPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');

describe('user is able validate all language ,Elements are changed as per the Language', () => {

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
    it('CheckCoursePageLanguageChangeWorksFine',function(){
         utility.handleLocationPopup();
       
        checkCPLCWFPageObj.validateAllElementsInLanguageSelectionAsHindi();
        // checkCPLCWFPageObj.validateAllElementsInLanguageSelectionAsKannada();
        // checkCPLCWFPageObj.validateAllElementsInLanguageSelectionAsTamil();
        // checkCPLCWFPageObj.validateAllElementsInLanguageSelectionAsUrdu();
        
    })
    
   
   
    
});