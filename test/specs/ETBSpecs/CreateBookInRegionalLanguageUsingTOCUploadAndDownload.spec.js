const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPage = require(protractor.basePath + '/test/pageObject/etbPageObj.js');

describe('AU_030,CreateBookInRegionalLanguageUsingTOCUploadAndDownload', () => {

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
    it('CreateBookInRegionalLanguageUsingTOCUploadAndDownload',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        etbPage.createBookWithRegionalLanguage("ಕನ್ನಡ");
        etbPage.createBookWithRegionalLanguage("தமிழ்");
        etbPage.createBookWithRegionalLanguage("తెలుగు");
        etbPage.createBookWithRegionalLanguage("हिन्दी");
        etbPage.createBookWithRegionalLanguage("मराठी");
        etbPage.createBookWithRegionalLanguage("অসমীয়া");
        sanityFun.uploadCSVFile();
        sanityFun.tocDownload();
       

      
        
    })
    
});
   