const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const lspPageObj = require(protractor.basePath+'/test/pageObject/lessonPlanPageObj.js');
const tpdPageObj = require(protractor.basePath+'/test/pageObject/tpdPageObj.js');
const genericFun= require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath=require(protractor.basePath + '/test/pathFolder/changePath.js');
describe('Verify Coure attahced With Certificate', () => {

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
    it('CoursehasCertificateAttached',function(){

       
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        

        tpdPageObj.VerifyCourseWhichhasCertificate();
       
      
    })
    
});