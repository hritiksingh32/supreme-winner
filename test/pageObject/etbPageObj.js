const ccpage = require( protractor.basePath +'/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/etb/etb.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
const sanityPage= require(protractor.basePath + '/test/pages/userOnBoarding/SanityPage.js');
var content=ccpage.contentCreation();
var etbv=etbpage.etb();
const genericFun = require(protractor.basePath + '/test/genericFunctions/GenericFunction.js');
let getExcelPath = require(protractor.basePath + '/test/pathFolder/changePath.js');
const sanityFun = require(protractor.basePath + '/test/pageObject/SanityPageObj.js');

const createBook=()=>{
    var bookname;
    try{
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
        bookname= "BookA"+faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(000);

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
        etbpage.etb().clickUseEditor.click();

        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        ccpage.contentCreation().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledName), 20000, "title not available");
        etbv.untitledName.click();
        etbv.untitledName.clear();
        etbv.untitledName.sendKeys(faker.randomData().firstname);
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        browser.sleep(3000);
        content.save.click();
        browser.sleep(5000);
       
        console.log("user successfully created Book");
        return bookname;
    }
    catch(err){
              console.log(err);
    }
    
}
const sendForReviewTheBook=()=>{
    try{
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.sendForReview), 20000, "send for review not available");
        content.sendForReview.click();
        browser.sleep(6000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.continuewButton), 50000, "contuinew button not available");
        etbv.continuewButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.sleep(500);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
        // etbv.clickBoard.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
        // etbv.selectBoard.click();
        // browser.sleep(500);
        // etbv.clickMedium.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
        // etbv.selectMedium.click();
        // browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        // etbv.clickclass.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "contuinew button not available");
        // etbv.SelectClass.click();
        // browser.sleep(500);
        // etbv.clicksubject.click();
        // browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "contuinew button not available");
        // etbv.selectSubject.click();
        browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", content.author);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        // content.author.click();
        // content.author.sendKeys("Ekstep");
        // browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");      
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
        content.saveform.click();
        browser.sleep(7000);
    }  catch(err){
        console.log(err);
}
}
const publishTheBookFromUpForReview=(bookname)=>{
    try{
        
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
        content.workSpace.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000,"Creation page not loaded");
        content.upForReview.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
        content.searchForReview.click();
        content.searchForReview.sendKeys(bookname);
        content.searchIconUpForReview.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
        content.searchedContentForPublish.click();
        browser.sleep(3000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.publishCourseButton), 20000,"Creation page not loaded");
        content.publishCourseButton.click();
        browser.sleep(1000);
        content.checkBox.each(function (input) {
        input.click()});
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.popupPublishButton1), 20000,"Creation page not loaded");
        content.popupPublishButton1.click();
        browser.switchTo().defaultContent();
        browser.sleep(1000);
    }  catch(err){
        console.log(err);
}
    
}
const createBookWithAllResourceType=()=>{
    var bookname;
    try{
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
        bookname= "BookA"+faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
        etbpage.etb().clickUseEditor.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
        ccpage.contentCreation().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledName), 20000, "title not available");
        etbv.untitledName.click();
        etbv.untitledName.clear();
        etbv.untitledName.sendKeys('bookWithAllResource');
        // etbv.qrCodeRequired.click();
        // etbv.dialcodeEnter.click();
        // etbv.dialcodeEnter.sendKeys('C8J8R9');
        // etbv.validateDialCode.click();
        browser.sleep(1000);
        var sheetPath = getExcelPath.ConfigurePath().excelSheetPath;
        var cred = genericFun.readLoginDataFromExcelFile(sheetPath, '3');
        browser.sleep(2000);
        console.log(cred[31]['Title']);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
       // content.resourceSearch.sendKeys("pdf");
        content.resourceSearch.sendKeys(cred[31]['Title']);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("ecm");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("html");
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(1000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("h5p");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("epub");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        content.addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        content.resourceSearch.click();
        content.resourceSearch.sendKeys("mp4");
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(1000);
        // content.addResource.click(); 
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        // content.resourceSearch.click();
        // content.resourceSearch.sendKeys("webm");
        // browser.sleep(1000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        // content.selectResourceType2.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        // content.clickAddbutton.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        // content.proceed.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never enabled");
        content.save.click();
        browser.sleep(3000);

        return bookname;

    }  catch(err){
        console.log(err);
}
}
const verifyTenantWithNoBoard=()=>{
    var bookName;
    try{
        console.log("User is trying to create book")
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown.workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().headerDropdown.workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
        etbpage.etb().book.click();
        // if (expect(etbv.book.isDisplayed()).toBeFalsy()) {

        // }

    }
    catch(err){
        console.log(err);
}
}
const editFormEditals = () => {
    try{
        browser.sleep(5000);
    
         browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.editDetails), 30000, "Edit Detials button not available");
         etbv.editDetails.click();
    
           browser.sleep(5000);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.continuewButton), 30000, "contuinew button not available");
        // etbv.continuewButton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 30000, "ClickAppIcon button not available");
        etbv.clickAppIcon.click();

        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
        etbv.allImage.click();
        browser.sleep(2000);
        wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
        etbv.myImage.click();

        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "CheckAppIcon button not available");
        etbv.checkAppIcon.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
        etbv.selectAppIcon.click();
        browser.sleep(500);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
        // etbv.clickBoard.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
        // etbv.selectBoard.click();
        // etbv.clickMedium.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
        // etbv.selectMedium.click();
        // browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
        // etbv.clickclass.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "contuinew button not available");
        // etbv.SelectClass.click();
        // etbv.clicksubject.click();
        // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "contuinew button not available");
        // etbv.selectSubject.click();
        browser.sleep(500);
        // browser.executeScript("arguments[0].scrollIntoView();", content.author);
        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
        // content.author.click();
        // content.author.sendKeys("Ekstep");
        // browser.sleep(500);
        browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
        etbv.yearOfCreation.click();
        etbv.yearOfCreation.clear();
        etbv.yearOfCreation.sendKeys("2020");      
            
       
            
        
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
        content.saveform.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.close), 20000, "close not available");
        etbv.close.click();
    }  catch(err){
        console.log(err);
}
    
}
const openBookFromDraftAndDownloadQRCode=()=>{
    try
    {
       console.log("User is trying to create book")
       browser.sleep(1000);
       browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
       ccpage.contentCreation().headerDropdown.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
       ccpage.contentCreation().workSpace.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
       etbpage.etb().book.click();
       browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
       bookname= "BookA"+faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

       sanityFun.FillBmesWhileCreatingBook();

       ccpage.contentCreation().startCreating.click();
       browser.sleep(5000);
       browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
       browser.sleep(5000);
       browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
       etbpage.etb().clickUseEditor.click();
       browser.sleep(500);
       browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
       ccpage.contentCreation().newchild.click();
       sanityPage.SanityElement().UnitName.sendKeys(faker.randomData().firstname);
   browser.sleep(1000);
   sanityPage.SanityElement().saveButton.click();
   browser.sleep(3000);
   
   
   
   
   browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkEditDetails), 20000, "clkEditDetails  is not available");
   
   sanityPage.SanityElement().clkEditDetails.click();
   browser.sleep(2000);
   browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkAppIcon), 20000, "clkAppIcon  is not available");
   
   sanityPage.SanityElement().clkAppIcon.click();
   browser.sleep(2000);
   sanityPage.SanityElement().chkAppIcon.click();
   browser.sleep(2000);
   sanityPage.SanityElement().sltButton.click();
   browser.sleep(2000);
//    sanityPage.SanityElement().clkBoard.click();
//    browser.sleep(1000);
//    sanityPage.SanityElement().sltBoard.click();
//    browser.sleep(2000);
   
//    sanityPage.SanityElement().clkMedium.click();
//    browser.sleep(2000);
//    sanityPage.SanityElement().sltMedium.click();
//    browser.sleep(2000);
   
//    var we =sanityPage.SanityElement().clkClass;
//                browser.executeScript("arguments[0].scrollIntoView();", we.getWebElement()).then(function(){
//                   we.click();
//                });
   
//    browser.sleep(2000);
//    sanityPage.SanityElement().SltClass.click();
//    browser.sleep(2000);
//    sanityPage.SanityElement().clkSubject.click();
//    browser.sleep(1000);
//    sanityPage.SanityElement().SltSubject.click();
   browser.sleep(1000);
   browser.executeScript("arguments[0].scrollIntoView();", content.author);
   browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
   content.author.click();
   content.author.sendKeys("Ekstep");
   etbv.yearOfCreation.click();
   etbv.yearOfCreation.clear();
   etbv.yearOfCreation.sendKeys("2020");      
       
   sanityPage.SanityElement().clkSaveEdit.click();
   browser.sleep(2000);
   sanityPage.SanityElement().clkCloseButton.click();
   browser.sleep(2000);
   
   sanityPage.SanityElement().closePage.click();
   browser.sleep(4000);
   browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().assertDraftField), 20000, "assertDraftField  is not available");
   expect(sanityPage.SanityElement().assertDraftField.getText()).toEqual('Drafts');
   browser.sleep(1000);
   browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkFirstBookDraft), 20000, "clkFirstBookDraft  is not available");
   sanityPage.SanityElement().clkFirstBookDraft.click();
   
   browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
   browser.sleep(8000);
   
   
   
   sanityPage.SanityElement().qrCodeYes.click();
   sanityPage.SanityElement().saveButton.click();
   browser.sleep(6000);
   
   sanityPage.SanityElement().clkDropDownQrcode.click();
   browser.sleep(2000);
   sanityPage.SanityElement().clkGenerateQrCode.click();
   browser.sleep(1000);
   expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
   console.log('QR Code Generated Succesfully');
   sanityPage.SanityElement().clkDownloadQr.click();
   browser.sleep(2000);
     
   }
   catch(err)
   {
      console.log(err);
   }
   }
const openPublishedSectionAndDownloadQRcode=()=>{
    try{
        console.log("User is trying to  open Published Section And Download QRcode");
       content.published.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(sanityPage.SanityElement().clkFirstBookDraft), 20000, "clkFirstBookDraft  is not available");
        sanityPage.SanityElement().clkFirstBookDraft.click();
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(8000);
        //sanityPage.SanityElement().qrCodeYes.click();
        sanityPage.SanityElement().saveButton.click();
        browser.sleep(6000);
        
        sanityPage.SanityElement().clkDropDownQrcode.click();
        browser.sleep(2000);
        sanityPage.SanityElement().clkGenerateQrCode.click();
        browser.sleep(3000);
        // browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        // browser.sleep(8000);
        // sanityPage.SanityElement().enterQrCode.sendKeys('2');
        // sanityPage.SanityElement().clkReqestQrCode.click();
        expect(sanityPage.SanityElement().QRcodeTostrMsg.getText()).toEqual('QR code generated.');
        console.log('QR Code Generated Succesfully');
        sanityPage.SanityElement().clkDownloadQr.click();
        browser.sleep(2000);
        console.log("User successfully  open Published Section And Download QRcode");
    }catch(err){
        console.error("User failed  open Published Section And Download QRcode");
    }
}
const createBookWithSpecificResourceType=(Content)=>{
    var bookname;
    try{
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
        bookname= "BookA"+faker.randomData().firstname;
        etbpage.etb().bookName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
        etbpage.etb().clickUseEditor.click();
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf( ccpage.contentCreation().newchild), 20000, "Didn't switched to different frame");
        ccpage.contentCreation().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledName), 20000, "title not available");
        etbv.untitledName.click();
        etbv.untitledName.clear();
        etbv.untitledName.sendKeys('bookWithconceptResource');
        // etbv.qrCodeRequired.click();
        // etbv.dialcodeEnter.click();
        // etbv.dialcodeEnter.sendKeys('C8J8R9');
        // etbv.validateDialCode.click();
        browser.sleep(1000);
        ccpage.contentCreation().addResource.click(); 
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
        ccpage.contentCreation().resourceSearch.click();
        ccpage.contentCreation().resourceSearch.sendKeys(Content);
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
        content.selectResourceType2.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
        content.clickAddbutton.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
        content.proceed.click();
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never enabled");
        content.save.click();
        browser.sleep(6000);

        return bookname;

    }  catch(err){
        console.error(err);
}
}
const createBookWithRegionalLanguage=(Regional)=>{
    var bookname;
    try{
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().headerDropdown), 20000, "headerDropdown page not loaded");
        ccpage.contentCreation().headerDropdown.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
        ccpage.contentCreation().workSpace.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.book), 20000,"Book page not loaded");
        etbpage.etb().book.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.bookName), 20000,"Book page not loaded");
        bookname= Regional;
        etbpage.etb().bookName.sendKeys(bookname);

        sanityFun.FillBmesWhileCreatingBook();

        ccpage.contentCreation().startCreating.click();
        browser.sleep(5000);
        browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickUseEditor), 20000, "clickUseEditor is not available");
        etbpage.etb().clickUseEditor.click();
        browser.sleep(5000);
        browser.wait(protractor.ExpectedConditions.visibilityOf( ccpage.contentCreation().newchild), 20000, "Didn't switched to different frame");
        ccpage.contentCreation().newchild.click();
        browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.untitledName), 20000, "title not available");
        etbv.untitledName.click();
        etbv.untitledName.clear();
        etbv.untitledName.sendKeys('bookWithRgionalLanguage');
       
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "save never enabled");
        browser.sleep(3000);
        content.save.click();
        browser.sleep(6000);
        sanityPage.SanityElement().closePage.click();
        browser.sleep(4000);
        return bookname;

    }  catch(err){
        console.error(err);
}
}

module.exports = {
    createBook,
    sendForReviewTheBook,
    publishTheBookFromUpForReview,
    verifyTenantWithNoBoard,
    createBookWithAllResourceType,
    editFormEditals,
    openBookFromDraftAndDownloadQRCode,
    openPublishedSectionAndDownloadQRcode,
    createBookWithSpecificResourceType,
    createBookWithRegionalLanguage,

}