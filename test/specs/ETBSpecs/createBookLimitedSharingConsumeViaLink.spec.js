const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
const etbFun = require(protractor.basePath + '/test/pageObject/ETBPageObj/EtbPageObj.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');

describe('createBookLimitedSharingConsumeViaLink', () => {

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
    it('createBookLimitedSharingConsumeViaLink',function(){
        utility.handleLocationPopup();
        utility.userLogin('Book Creator');
        browser.sleep(3000);
        let bookName= etbPageObj.createBook();
        console.log(bookName);
        
        etbFun.limitedSharing(bookName);
        etbFun.navigateToWorkspace1('Shared Via Link');
      
        
    })
    
    
    

 
});
   
