const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');
let getAppURL=require(protractor.basePath + '/test/pathFolder/changePath.js');
const custUSCILBFPageObj = require(protractor.basePath+'/test/pageObject/contentCreationPageObj.js');

describe('content creator is able to get the collection in libarary section by searching the collection or By applying filters.', () => {

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
    it('CustodianUserSearchContentInLibraryByFilters',function(){
        utility.handleLocationPopup();
        utility.userLogin('Creator');
       // var content =  custUSCILBFPageObj.searchContentInLibraryAndFetchFirstContent('Collection');
       
       
       custUSCILBFPageObj.searchContentInLibrary('Textbook');
        custUSCILBFPageObj.searchContentByUsingFilter();
        utility.userLogout();
        utility.userLogin('CustodianUser');


     //   var content =custUSCILBFPageObj.searchContentInLibraryAndFetchFirstContent('Resource');
       
     
     custUSCILBFPageObj.searchContentInLibrary('Resource');
        custUSCILBFPageObj.searchContentByUsingFilter();
     
       
               
    });
   
     
});