const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const verifyPSAPSPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('able to create addtext and images and  multiple slides and preview all', () => {

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
    it('VerifyPropertySectionAndPreviewSlides',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
        verifyPSAPSPageObj.resourceName();
        verifyPSAPSPageObj.addSlidesImageText();
        verifyPSAPSPageObj.previewSlidesOfQuestionFromBegining();
        
         
         
    })

    
});