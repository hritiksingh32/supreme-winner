const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');
const collectionPageObj = require(protractor.basePath+'/test/pageObject/collectionPageObj.js');

describe('Verifythat user is able to create colleciton by adding,deleting nodes and is also able to add description and keyword', () => {

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

    it('VerifyAddDeleteAndUpdateChildOrSibling',function(){

        utility.handleLocationPopup();
        utility.userLogin('Creator');
        let collectionName=collectionPageObj.createCollection();
      //  resourcePageObj.sendForReviewTheResource();

      collectionPageObj.sendForReviewTheCollection();

        utility.userLogout();
        utility.userLogin('Reviewer');
       // resourcePageObj.publishTheResourceFromUpForReview(collectionName);
       collectionPageObj.publishTheCollectionFromUpForReview(collectionName);

        utility.userLogout();
        utility.userLogin('Creator');
        resourcePageObj.deleteCreatedItems(); 


    });
});