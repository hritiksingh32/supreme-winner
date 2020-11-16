const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const custUTTCCPageObj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');

describe('Usr is able to search the content in library', () => {

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
    it('CustodianUserTryToConsumeContent',function(){
        utility.handleLocationPopup();
        utility.userLogin('CustodianUser');
        var content =  custUTTCCPageObj.searchContentInLibraryAndFetchFirstContent('Book');
        custUTTCCPageObj.navigateToLibraryAndSearchForBook(content);
       
      
       
    });
 
     
});