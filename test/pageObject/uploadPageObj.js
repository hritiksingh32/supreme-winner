const ccpage = require(protractor.basePath + '/test/pages/contentCreation/contentCreation.po.js');
const resourcePag=require(protractor.basePath + '/test/pages/resource/resource.po.js');
const etbpage = require(protractor.basePath + '/test/pages/etb/etb.po.js');
const uploadPage=require(protractor.basePath + '/test/pages/upload/upload.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var content=ccpage.contentCreation();
var etbv=etbpage.etb();      
var resov=resourcePag.resource();
var uploadV=uploadPage.upload();
var UPLOAD_YOUTUBE="https://youtu.be/J5dRMPNkjxs";
var pdf =protractor.basePath + '/test/testdata/samplepdf.pdf';
var epub =protractor.basePath + '/test/testdata/faulkner-sound-and-the-fury.epub';
var html =protractor.basePath + '/test/testdata/HTMLContent_test.zip';
var h5p =protractor.basePath + '/test/testdata/fill-in-the-blanks-837.h5p';
var mp4 =protractor.basePath + '/test/testdata/DraftVersion.mp4';
var webm =protractor.basePath + '/test/testdata/big-buck-bunny_trailer.webm';
const resourcePageObj = require(protractor.basePath+'/test/pageObject/resourcePageObj.js');

const uploadPdf=()=>{

    var resourceName;
    try{
  
    console.log("user is trying to upload pdf");
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
      content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
      content.workSpace.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
      uploadV.clickuploadContent.click();
      browser.sleep(2000);
      browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
      browser.sleep(1000);

      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
      uploadV.selectOne.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
      uploadV.learningResource.click();

      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
      uploadV.browseButton.sendKeys(pdf);
      browser.sleep(8000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
      uploadV.sendforRev.click();
      browser.sleep(1000);
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
      browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
      etbv.selectAppIcon.click();
      browser.sleep(500);
      browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
      etbv.titleName.click();
      browser.sleep(500);
      etbv.titleName.clear();
      resourceName="ResourceA"+faker.randomData().firstname;
      etbv.titleName.sendKeys(resourceName);
  
      DropDownForSendForReview();

      browser.sleep(3000);
     console.log("User successfully uploaded pdf content");
     return resourceName;
    }catch(Exception){
        console.log("User failed to upload content pdf")
    }

}
const uploadHtml=()=>{

   var resourceName;
   try{

   console.log("User is trying to upload html");
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
    uploadV.clickuploadContent.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
    uploadV.selectOne.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
    uploadV.learningResource.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
    uploadV.browseButton.sendKeys(html);
    browser.sleep(8000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
    uploadV.sendforRev.click();
    browser.sleep(2000);
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
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
    etbv.titleName.click();
    browser.sleep(500);
    etbv.titleName.clear();
    resourceName="ResourceA"+faker.randomData().firstname;
    etbv.titleName.sendKeys(resourceName);
    DropDownForSendForReview();

    console.log("User successfully uploaded html");
    return resourceName;
   }catch(Exception){
       console.log("User failed to upload html");
   }
}
const uploadH5p=()=>{

    var resourceName;
    try{
 
    console.log("User is trying to upload H5p content")
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
     content.workSpace.click();
     browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
     uploadV.clickuploadContent.click();
     browser.sleep(2000);
     browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
     browser.sleep(1000);

     browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
     uploadV.selectOne.click();
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
     uploadV.learningResource.click();

     browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
     uploadV.browseButton.sendKeys(h5p);
     browser.sleep(10000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
     uploadV.sendforRev.click();
     browser.sleep(1000);
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
     browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
     etbv.selectAppIcon.click();
     browser.sleep(500);
     browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
     etbv.titleName.click();
     browser.sleep(500);
     etbv.titleName.clear();
     resourceName="ResourceA"+faker.randomData().firstname;
     etbv.titleName.sendKeys(resourceName);
     DropDownForSendForReview();

     return resourceName;
    }catch(Exception){
        console.log("Usr failed upload h5p");
    }
 }
const uploadEpub=()=>{
    var resourceName;
    try{
        console.log("User is trying to upload epub");
    
   
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
    uploadV.clickuploadContent.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
    uploadV.selectOne.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
    uploadV.learningResource.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
    uploadV.browseButton.sendKeys(epub);
    browser.sleep(8000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
    uploadV.sendforRev.click();
    browser.sleep(1000);
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
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
    etbv.titleName.click();
    browser.sleep(500);
    etbv.titleName.clear();
    resourceName="ResourceA"+faker.randomData().firstname;
    etbv.titleName.sendKeys(resourceName);
    DropDownForSendForReview();

      browser.sleep(1000);
    console.log("User successfully uploaded epub");
    return resourceName;
    }catch(Exception){
        console.log("User failed to upload epub");
    }
}
const uploadWebm=()=>{
    var resourceName;
    try{
        console.log("User is trying to upload webm");

    
   
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
    uploadV.clickuploadContent.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
    uploadV.selectOne.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
    uploadV.learningResource.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
    uploadV.browseButton.sendKeys(webm);
    browser.sleep(10000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
    uploadV.sendforRev.click();
    browser.sleep(1000);
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
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
    etbv.titleName.click();
    browser.sleep(500);
    etbv.titleName.clear();
    resourceName="ResourceA"+faker.randomData().firstname;
    etbv.titleName.sendKeys(resourceName);
    DropDownForSendForReview();
         browser.sleep(1000);
    console.log("User successfully uploaded webm");
    return resourceName;
    }catch(Exception){
        console.log("User failed to upload webm");
    }
}
const uploadMp4=()=>{
    var resourceName;
    try{
        console.log("User is trying to upload mp4");
   
   
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
    uploadV.clickuploadContent.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
    uploadV.selectOne.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
    uploadV.learningResource.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
    uploadV.browseButton.sendKeys(mp4);
    browser.sleep(10000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
    uploadV.sendforRev.click();
    browser.sleep(1000);
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
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
    etbv.titleName.click();
    browser.sleep(500);
    etbv.titleName.clear();
    resourceName="ResourceA"+faker.randomData().firstname;
    etbv.titleName.sendKeys(resourceName);
    DropDownForSendForReview();
    browser.sleep(3000);
    console.log("User successfully uploaded mp4");
    return resourceName;
    }catch(Exception){
        console.log("User failed to upload mp4");
    }
}
const uploadYoutube=()=>{

   var resourceName;
   try{
    console.log("User is trying to upload youtube");
   
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
    uploadV.clickuploadContent.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
    uploadV.selectOne.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
    uploadV.learningResource.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
    uploadV.enterUrl.sendKeys(UPLOAD_YOUTUBE);
    browser.sleep(1000);
    uploadV.uploadButton.click();
    browser.sleep(6000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
    uploadV.sendforRev.click();
    browser.sleep(1000);
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
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
    etbv.titleName.click();
    browser.sleep(500);
    etbv.titleName.clear();
    resourceName="ResourceA"+faker.randomData().firstname;
    etbv.titleName.sendKeys(resourceName);
    DropDownForSendForReview();
    browser.sleep(3000);
    console.log("User successfully uploaded youtube");
    return resourceName;
   }catch(Exception){
       console.log("User failed to upload youtube");
   }
}
const uploadTemplate=()=>{

    var resourceName;
    try{
 
    console.log("User is trying to check upload content template")
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
     browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
     content.workSpace.click();
     browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
     uploadV.clickuploadContent.click();
     browser.sleep(2000);
     browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
     browser.sleep(1000);
     browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
     console.log("User successfully checked upload content template");
     return resourceName;
    }
     catch(Exception){
        console.log("Failed to check upload content template")
     }
}
const uploadAllContent=()=>{

    var resourcename;
    try{
  
    console.log("user is trying to upload All Content");
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
      content.workSpace.click();
      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
      uploadV.clickuploadContent.click();
      browser.sleep(5000);
      browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
      browser.sleep(5000);

      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
      uploadV.selectOne.click();
      browser.sleep(1000);
      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
      uploadV.learningResource.click();

      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
      uploadV.browseButton.sendKeys(pdf);
      browser.sleep(8000);
      uploadV.savebutton.click();
      browser.sleep(1000);
      uploadV.closebutton.click();
      browser.sleep(2000);
    //   uploadV.uploadcontIcon.click();
    //   browser.sleep(2000);
    //   uploadV.browseButton.sendKeys(mp4);
    //   browser.sleep(8000);
    //   uploadV.savebutton.click();
    //   browser.sleep(1000);
    //   uploadV.closebutton.click();
    //   browser.sleep(2000);
    //   uploadV.uploadcontIcon.click();
    //   browser.sleep(2000);
    //   uploadV.browseButton.sendKeys(h5p);
    //   browser.sleep(8000);
    //   uploadV.savebutton.click();
    //   browser.sleep(1000);
    //   uploadV.closebutton.click();
    //   browser.sleep(2000);
    //   uploadV.uploadcontIcon.click();
    //   browser.sleep(2000);
    //   uploadV.browseButton.sendKeys(epub);
    //   browser.sleep(8000);
    //   uploadV.savebutton.click();
    //   browser.sleep(1000);
    //   uploadV.closebutton.click();
    //   browser.sleep(2000);
    //   uploadV.uploadcontIcon.click();
    //   browser.sleep(2000);
    //   uploadV.browseButton.sendKeys(webm);
    //   browser.sleep(8000);
    //   uploadV.savebutton.click();
    //   browser.sleep(1000);
    //   uploadV.closebutton.click();
    //   browser.sleep(2000);
    //   uploadV.uploadcontIcon.click();
    //   browser.sleep(2000);
    //   uploadV.browseButton.sendKeys(html);
    //   browser.sleep(8000);
    //   uploadV.savebutton.click();
    //   browser.sleep(1000);
    //   uploadV.closebutton.click();
      browser.sleep(2000);
      

      browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.sendforRev), 20000, "Failed to click sendForReview");
      uploadV.sendforRev.click();
      browser.sleep(2000);
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
      browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
      etbv.selectAppIcon.click();
      browser.sleep(500);
      browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
      etbv.titleName.click();
      browser.sleep(500);
      etbv.titleName.clear();
      resourcename="ResourceA"+faker.randomData().firstname;
      etbv.titleName.sendKeys(resourcename);
      DropDownForSendForReview();
      browser.sleep(1000);      
     console.log("User successfully uploaded pdf content");
     return resourcename;
    }catch(err){
        console.error("User failed to upload content pdf, "+err);
    }
  
  }
  const uploadAddCollaborator=()=>{
    var resourceName;
    try{
        console.log("User is trying to upload mp4");
   
   
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
    uploadV.clickuploadContent.click();
    browser.sleep(3000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(3000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
    uploadV.selectOne.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
    uploadV.learningResource.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
    uploadV.browseButton.sendKeys(pdf);
    browser.sleep(10000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clkEditDetails), 20000, "Failed to click clkEditDetails");
    // uploadV.clkEditDetails.click();
    // browser.sleep(1000);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 30000, "clickAppIcon button not available");
    // etbv.clickAppIcon.click();
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 30000, "checkAppIcon button not available");
    // etbv.checkAppIcon.click();
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 30000, "selectAppIcon button not available");
    // etbv.selectAppIcon.click();
    // browser.sleep(500);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.titleName), 30000, "selectAppIcon button not available");
    // etbv.titleName.click();
    // browser.sleep(500);
    // etbv.titleName.clear();
    // resourceName="ResourceA"+faker.randomData().firstname;
    // etbv.titleName.sendKeys(resourceName);
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
    // browser.sleep(500);
    // browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.yearOfCreation), 30000, "contuinew button not available");
    // etbv.yearOfCreation.click();
    // etbv.yearOfCreation.clear();
    // etbv.yearOfCreation.sendKeys("2020");
    // browser.sleep(1000);
   
    // etbv.clickContentType.click();
    // browser.sleep(500);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectContentType), 30000, "selectContentType button not available");
    // etbv.selectContentType.click();
    // browser.sleep(500);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
    // content.saveform.click();
    browser.sleep(1000);
    console.log("User successfully uploaded add collaborator");
   // return resourceName;
    }catch(Exception){
        console.log("User failed to upload add collaborator");
    }
}
const saveContent =()=>{
    try{
        browser.sleep(1000);
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
        content.save.click();    
        browser.sleep(1000);
    }catch(err){

    }
}
const uploadanyPDF =()=>{
    
  try{

  console.log("user is trying to upload pdf");
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.clickuploadContent), 20000,"Upload content didn't click");
    uploadV.clickuploadContent.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(1000);

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.selectOne), 20000, "selectOne is not available");
    uploadV.selectOne.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.learningResource), 20000, "learningResource is not available");
    uploadV.learningResource.click();

    browser.wait(protractor.ExpectedConditions.visibilityOf(uploadV.enterUrl), 20000, "didn't click browse button");
    uploadV.browseButton.sendKeys(pdf);
    browser.sleep(8000);
}catch(Exception){
    console.log("User failed to upload content pdf")
}
}

const DropDownForSendForReview =()=>{
  try{
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickBoard);
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickBoard), 30000, "board button not available");
    etbv.clickBoard.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectBoard), 30000, "contuinew button not available");
    etbv.selectBoard.click();
  //   wait.waitForElementVisibility(etbv.clickCurriculum, 30000, "clickCurriculum button not available");
  //   etbv.clickCurriculum.click();
  //   wait.waitForElementVisibility(etbv.selectCurriculum, 30000, "selectCurriculum button not available");
  //   etbv.selectCurriculum.click();
  //   browser.sleep(500);
  browser.sleep(500);
  etbv.clickMedium.click();
  browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
  etbv.selectMedium.click();

    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickclass);
    etbv.clickclass.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.SelectClass), 30000, "contuinew button not available");
    etbv.SelectClass.click();
    browser.sleep(500);

    etbv.clicksubject.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectSubject), 30000, "contuinew button not available");
    etbv.selectSubject.click();
    browser.sleep(500);

  //   etbv.clickMedium.click();
  //   browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectMedium), 30000, "contuinew button not available");
  //   etbv.selectMedium.click();
    browser.executeScript("arguments[0].scrollIntoView();",  etbv.yearOfCreation);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.yearOfCreation), 30000, "contuinew button not available");
    etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");
    browser.sleep(1000);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.clickContentType);
    wait.waitForElementVisibility(etbv.clickContentType, 30000, "clickContentType button not available");
    etbv.clickContentType.click();
    browser.sleep(500);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.practiceResource2), 30000, "selectContentType button not available");
    etbv.practiceResource2.click();
    browser.sleep(2000);    
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
    content.saveform.click(); 
    browser.sleep(2000);   

  }catch(err){

  }
}

module.exports = {
    uploadPdf,
    uploadHtml,
    uploadH5p,
    uploadEpub,
    uploadWebm,
    uploadMp4,
    uploadYoutube,
    uploadTemplate,
    uploadAllContent,
    uploadAddCollaborator,
    saveContent,
    uploadanyPDF,
    DropDownForSendForReview,

}

