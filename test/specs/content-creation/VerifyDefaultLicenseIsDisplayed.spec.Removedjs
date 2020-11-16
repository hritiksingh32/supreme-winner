const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');

describe('Verify that default license is  displayed in edit  details && Verify on click of credit link, Copyright and attributions values are displayed.', () => {

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
    it('AU_073, AU_081-VerifyDefaultLicence && CreditLink and Copyright',function(){

        utility.handleLocationPopup();
        utility.userLogin('Creator');
        resourcePageObj.VerifyDefaultLicense();
        utility.userLogout();
        utility.userLogin('Creator');
        let resourceName=resourcePageObj.createResource();
        resourcePageObj.sendForReviewTheResource();
        utility.userLogout();
        utility.userLogin('Reviewer');
        resourcePageObj.publishTheResourceFromUpForReview(resourceName);
        utility.userLogout();
        utility.userLogin('Creator');
        resourcePageObj.navigateToLibraryAndSearchContent(resourceName);
        resourcePageObj.copyrightAndAttributes();

    });
});