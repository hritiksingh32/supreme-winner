const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbPage = require(protractor.basePath + '/test/pageObject/etbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
describe('AU_031,DownloadQrcodeInDraftPublishedAndLimitedSharing', () => {

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
    
    it('DownloadQrcodeInDraftPublishedAndLimitedSharing',function(){
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        etbPage.openBookFromDraftAndDownloadQRCode();
        utility.userLogout();
       
        utility.userLogin('Book Creator');
        etbFun.clickOnWorkspace();
        etbPage.openPublishedSectionAndDownloadQRcode();
       
    });
});
   

