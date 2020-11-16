const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');

describe('ScrollAndConsumeAllContentInBook', () => {

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

    it('ScrollAndConsumeAllContentInBook ',function(){
        utility.handleLocationPopup();
        utility.userLogin('Public User1');
        etbPageObj.navigateToLibraryAndSearchForBook("Book");
        

    })
   
});
   
