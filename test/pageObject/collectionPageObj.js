const ccpage = require(protractor.basePath +'/test/pages/contentCreation/contentCreation.po.js');
const etbpage = require(protractor.basePath + '/test/pages/etb/etb.po.js');
const data = require(protractor.basePath + '/test/testdata/login/login.td.json');
const wait = require(protractor.basePath + '/helper/waiters.js');
const faker = require(protractor.basePath + '/test/pathFolder/faker.js');
var content=ccpage.contentCreation();
var etbv=etbpage.etb();
const utility = require(protractor.basePath + '/test/utility/utilityFunctions.js');


const createCollection=()=>{
   var collectionName;
    try{
    console.log("User is trying to create a collection")
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(ccpage.contentCreation().workSpace), 20000, "workspace page not loaded");
    ccpage.contentCreation().workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.collection), 20000,"collection page not loaded");
    content.collection.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.name), 20000, "Course creation editor never loaded");
    collectionName="CollectionA"+faker.randomData().firstname;
    content.name.sendKeys(collectionName);
    browser.sleep(2000);
    
    browser.executeScript("arguments[0].scrollIntoView();", etbv.collectionType);
    wait.waitForElementVisibility(etbv.collectionType, 30000, "collectionType button not available");
    etbv.collectionType.click();
    browser.sleep(1000);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.contentResource);
    etbv.contentResource.click();  

    content.startCreating.click();
    browser.sleep(4000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(4000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.newchild), 20000, "Didn't switched to different frame");
    content.newchild.click();
    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.titleN), 20000, "title not available");
    // content.titleN.click();
    // content.titleN.clear();
    // content.titleN.sendKeys('collectiona12');
    content.addResource.click(); 
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.resourceSearch), 30000, "resourceSearch not available");
    browser.sleep(1000);
    content.resourceSearch.click();
    content.resourceSearch.sendKeys("pdf");
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.selectResourceType2), 30000, "selectResourceType not available");
    content.selectResourceType2.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickAddbutton), 30000, "clickAddbutton not available");
    content.clickAddbutton.click();
    browser.sleep(2000);
    //content.checkboxFirst.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.proceed), 30000, "proceed is not available");
    content.proceed.click();
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.save), 20000, "Dashboard never loaded");
    content.save.click();      
    browser.sleep(1000);
    console.log("User successfully created a collection");
    return collectionName;
    }catch(Exception){
        console.log("User failed to create a collection");
    }
}
const sendForReviewTheCollection=()=>{
    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.elementToBeClickable(content.sendForReview), 20000, "send for review not available");
    content.sendForReview.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.clickAppIcon), 50000, "clickAppIcon button not available");
    etbv.clickAppIcon.click();

    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.allImage, 30000, "allImage button not available");
    etbv.allImage.click();
    browser.sleep(2000);
    wait.waitForElementVisibility(etbv.myImage, 30000, "myImage button not available");
    etbv.myImage.click();

    browser.sleep(1000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.checkAppIcon), 50000, "checkAppIcon button not available");
    etbv.checkAppIcon.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(etbv.selectAppIcon), 50000, "selectAppIcon button not available");
    etbv.selectAppIcon.click();
    browser.sleep(1000);
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
    // browser.sleep(500);
    // browser.executeScript("arguments[0].scrollIntoView();", content.author);
    // browser.wait(protractor.ExpectedConditions.visibilityOf(content.author), 20000, "topicSelectorDone not available");
    // content.author.click();
    // content.author.sendKeys("Ekstep");
    browser.sleep(500);
    browser.executeScript("arguments[0].scrollIntoView();", etbv.yearOfCreation);
    etbv.yearOfCreation.click();
    etbv.yearOfCreation.clear();
    etbv.yearOfCreation.sendKeys("2020");
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.saveform), 20000, "submitForm not available");
    content.saveform.click();
    browser.sleep(3000);
}
const publishTheCollectionFromUpForReview=(collectionname)=>{
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerDropdown), 20000, "headerDropdown page not loaded");
    content.headerDropdown.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.workSpace), 20000, "workspace page not loaded");
    content.workSpace.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.upForReview), 20000,"Creation page not loaded");
    content.upForReview.click();
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchForReview), 20000, "workspace page not loaded");
    content.searchForReview.click();
    content.searchForReview.sendKeys(collectionname);
    //content.searchIconUpForReview.click();
    browser.sleep(2000);
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.searchedContentForPublish), 20000, "workspace page not loaded");
    content.searchedContentForPublish.click();
    browser.sleep(2000);
    browser.switchTo().frame(browser.driver.findElement(by.tagName('iframe')));
    browser.sleep(3000);
    //browser.wait(protractor.ExpectedConditions.visibilityOf(content.publishCourseButton), 20000,"Creation page not loaded");
    content.publishCourseButton.click();
    browser.sleep(1000);
    // content.checkBox.each(function (input) {
    // input.click()});
    browser.wait(protractor.ExpectedConditions.visibilityOf(content.popupPublishButton1), 20000,"Creation page not loaded");
    content.popupPublishButton1.click();
    console.log("published the collection");
    browser.switchTo().defaultContent();
    browser.sleep(1000);
}
const clickLibraryPage=()=>{
    try
    {
        console.log("User is trying to click library page");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.clickLibray), 20000, "clickLibray is not available");
        content.clickLibray.click();
        browser.sleep(1000);
    }
    catch(Exception)
    {
        console.log( "Failed on Clicking Library Page");
    }
}

const shareTheConentUsingLink=(contentName)=>{
    var contentNameFetch;
    var link;
   
    try
    {
        console.log("User is trying to verify Course can be shared via link  " + contentName);
        content.searchInput.sendKeys(contentName);
        console.log("course name Entered   " + contentName);

        content.searchIcon.click();
        browser.sleep(1000);
        console.log("Click on Search icon");

        content.collecclick.click();
        browser.sleep(2000);
        console.log("Clicked on First Content");

        // browser.wait(protractor.ExpectedConditions.visibilityOf(content.fetchContentName), 20000, "fetchContentName is not available");
        //  contentNameFetch = content.fetchContentName.getText();
        //  console.log("Content " + contentNameFetch);
       

        content.clickShare.click();
        console.log("Click on Search icon");
        browser.sleep(1000); 
        content.clickCopy.click();
        console.log("Clicked on CopyLink");
        browser.sleep(1000);

      
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.closeIconInShare), 20000, "closeIconInShare is not available");
        browser.sleep(1000);
        content.closeIconInShare.click();
        console.log("Click on copyClose icon");
        browser.sleep(1000);
        // content.closeicon.click();
        // browser.sleep(1000);
        
        console.log("Click on main Close icon");
        // navigator.clipboard.readText()
        // .then(Link => {
        //   console.log('Pasted content: ', Link);
        // })
        // .catch(err => {
        //   console.error('Failed to read clipboard contents: ', err);
        // });    
        
       return link,
       contentNameFetch;
     }
    catch(exception) 
    {
        console.error("Failed to verify Share Content");
    }
}
const verifyCollection=()=>{
      var collectionname;
      var toContent;
    try
    {

//         browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'v')).perform();
//   browser.actions().sendKeys(protractor.Key.chord(protractor.Key.ENTER)).perform();
//   browser.sleep(9000);


        // browser.actions().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'v')).perform();



        console.log("Verify through CopyLink and able to get resource Name");
        browser.get(ss);
        browser.sleep(2000);
        console.log("Add Copied link in URL");
        collectionname =content.fetchContentName.getText()
        expect(collectionname).toEqual(contentNameFetch);
        console.log("Content Shared Succesfully  " + contentNameFetch);
              
        // try
        // {
        //     content.playSharedContent.click();
        //     browser.sleep(1000);
        //     console.log("Content is playing");
        //      toContent= content.fetchContentName.getText();
        //     console.log("TOC Content Played Succesfully  " + tocContent);

        // }
        // catch(exception)
        // {
        //     console.log("Exception Handled");
        // }
        return{
            collectionname,
            toContent
        }
    }
    catch(Exception)
    {
        console.log( "failed to verify");
    }
}
const verifyResource=()=>{
    var Resourcename;
    var cont;
    try
    {
        browser.get("https://preprod.ntp.net.in/play/content/do_31257982245632409629620", 40000);
        browser.sleep(2000);
        console.log("Add Copied link in URL");
        Resourcename=content.fetchContentName.getText();
        expect(Resourcename).toEqual(contentNameFetch);
        console.log("Content Shared Succesfully  " + contentNameFetch);
              
        // try
        // {
        //     content.playSharedContent.click();
        //     browser.sleep(1000);
        //     console.log("Content is playing");
        //      cont= content.fetchContentName.getText();
        //     console.log("TOC Content Played Succesfully  " + cont);

        // }
        // catch(exception)
        // {
        //     console.log("Exception Handled");
        // }
        return{
            cont,
            Resourcename,
        }
    }
    catch(Exception)
    {
        console.log( "failed to verify");
    }
}
const clickTrainingPage=()=>{
    try
    {
        console.log("User is trying to click Training page");
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.headerCourse), 20000, "headerCourse is not available");
        content.headerCourse.click();
        browser.sleep(1000);
    }
    catch(Exception)
    {
        console.log( "Failed on Clicking Training Page");
    }
}
const ZoomInZoomout=()=>{
    try
    {
        console.log("User is trying to ZoomInZoomout");
        browser.sleep(3000);
        browser.executeScript('window.scrollTo(0,400);').then(function () {
            console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(2000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.zoomIn), 20000, "zoomIn is not available");
        content.zoomIn.click();
        browser.sleep(3000);
        browser.wait(protractor.ExpectedConditions.visibilityOf(content.zoomOut), 20000, "zoomOut is not available");
        content.zoomOut.click();
        console.log("User is trying to ZoomInZoomout");
    }
    catch(Exception)
    {
        console.log( "Failed on ZoomInZoomout");
    }
}

module.exports = {
    createCollection,
    sendForReviewTheCollection,
    publishTheCollectionFromUpForReview,
    clickLibraryPage,
    shareTheConentUsingLink,
    verifyCollection,
    verifyResource,
    clickTrainingPage,
    ZoomInZoomout,
}