const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const addSARCATTPRPageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const collectionPageObj = require(protractor.basePath+'/test/pageObject/collectionPageObj.js');

describe('Vefy content creator is able to add collaborators using the Add collaborator option while creating collection and remove collaborator also', () => {

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
    it('AddSearchAndRemoveCollaboratorAndTryToPublishCollection',function(){
        utility.handleLocationPopup();
        utility.userLogin('Mentor');
        let resourceName=collectionPageObj.createCollection();
        addSARCATTPRPageObj.removeCollaborator();
        utility.userLogout();
        utility.userLogin('Creator');
        addSARCATTPRPageObj.unavailbleInCollaboratorSendTheResourceForReview(resourceName);
           
    
        });
   
      
    });