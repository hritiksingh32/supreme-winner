const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');

describe('searchQRCode In Explore LibraryPage', () => {

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
    it('searchWithQRCodeInExplorePage',function(){
        utility.handleLocationPopup();
        etbFun.searchWithQRcode();
        var Url=getAppURL.ConfigurePath().AppURL;
        var AppendGet='/get';
        browser.get(Url+AppendGet, 40000);
        sanityFun.searchQRCodeInGet();


    });
});
   

