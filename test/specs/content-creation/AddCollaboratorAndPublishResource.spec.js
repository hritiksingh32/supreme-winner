const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const addCAPRPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('Content creator is able to add a collaborator in all the types of content.', () => {

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
    it('AddCollaboratorAndPublishResource',function(){
        utility.handleLocationPopup();
        utility.userLogin('Mentor');
        let resourceName=addCAPRPageObj.createResource();
        addCAPRPageObj.addCollaboratorOnly();
        utility.userLogout();
        utility.userLogin('Creator');
        addCAPRPageObj.collaboratorSendTheResourceForReview(resourceName);
        addCAPRPageObj.sendForReviewTheResource();


       // addCAPRPageObj.checkTheCourseInReviewSubmision(resourceName);
    })
    
   
   
    
});