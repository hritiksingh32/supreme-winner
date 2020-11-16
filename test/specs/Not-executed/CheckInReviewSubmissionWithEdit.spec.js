const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const etbPageObj = require(protractor.basePath+'/test/pageObject/etbPageObj.js');

describe('Vrify content creator should be able to save the resource and send the resource for review..', () => {

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
    it('CheckInReviewSubmissionWithEdit',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        resourcePageObj.createResource();
        resourcePageObj.sendForReviewTheResource();
       
       

    })

   
   
});
   
