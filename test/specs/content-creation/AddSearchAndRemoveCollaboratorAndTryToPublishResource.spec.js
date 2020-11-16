const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const addSARCATTPRPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

describe('to create resource and add colaborator,remove colaborator and send the resource for review', () => {

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
    
    it('AddSearchAndRemoveCollaboratorAndTryToPublishResource',function(){
        
        utility.handleLocationPopup();
        utility.userLogin('Mentor');
        let resourceName=addSARCATTPRPageObj.createResource();
        addSARCATTPRPageObj.removeCollaborator();
        utility.userLogout();
        utility.userLogin('Creator');
        addSARCATTPRPageObj.unavailbleInCollaboratorSendTheResourceForReview(resourceName);
    
        });
      
    });