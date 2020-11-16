const { element } = require("protractor");

var etb = () => {

    var book = element(by.xpath("//div[@class='content']/..//span[.='Book']"));
    var bookName = element(by.xpath("//input[@placeholder='Name']"));
    var startcreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
    var clickNewChild=element(by.xpath("//a[@class='blueColor'][2]"));
    var untitleName=element(by.xpath("//input[@placeholder='Enter title for Book']"));
    var qrCodeRequired=element(by.xpath("//input[@value='Yes']"));
    var dialcodeEnter=element(by.model('dialcodes'));
    var validateDialCode=element(by.xpath("//i[@class='large check circle icon']"));
    var savebutton=element(by.xpath("//div[@id='saveButton']//i"));
    var sendForReview=element(by.xpath("//div[@class='ui button text-part popup-item']//i[@class='send icon']"));
    var continuewButton=element(by.xpath("//button[.='Continue anyway']"));
    var clickAppIcon=element(by.id("field-app-icon "));
    var checkAppIcon=element(by.xpath("//div[@class='ui image']//img"));
    var selectAppIcon=element(by.buttonText('Select'));
    var clickBoard=element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]"));
    var selectBoard=element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]//following::div[2]"));
    var clickMedium=element(by.xpath("//div[contains(text(),'Select Medium')]"));
    var selectMedium=element(by.xpath("//div[contains(text(),'Select Medium')]//following::div[2]"));
    var clickclass=element(by.xpath("//div[contains(text(),'Select Class')]"));
    var SelectClass=element(by.xpath("//div[contains(text(),'Select Class')]//following::div[2]"));
    var clicksubject=element(by.xpath("//div[contains(text(),'Select Subject')]"));
    var selectSubject=element(by.xpath("//div[contains(text(),'Select Subject')]//following::div[2]"));
    var submitIconsendForReview=element(by.buttonText('Select'));
    var clickWorkSpace=element(by.xpath("(//*[contains(.,'Workspace')])"));
    var clickUpforReview=element(by.xpath("//a[contains(text(),'Up For Review')]"));
    var searchtext=element(by.xpath("//input[@placeholder='Search content']"));
    var clicksearchicon=element(by.xpath("//input[@placeholder='Search content']/following::i"));
    var clicksearchedContent=element(by.xpath("//tbody/tr/td[1]"));
    var clickpublishbutton=element(by.xpath("//span[contains(text(),'Publish')]"));
    var clickCheckBox=element(by.xpath("//input[@class='listItem']"));
    var clickPublishbut=element(by.buttonText('Publish'));
    var clickDeleteFirst=element(by.xpath("(//i[@class='trash large icon'])[1]"));
    var clickYesDelete=element(by.xpath("//button[contains(.,'Yes')]"));
    var clickCheckBox=element(by.xpath("//input[@class='listItem']"));
    var clickCheckBox=element(by.xpath("//input[@class='listItem']"));
    var clickUseEditor = element(by.xpath("//button[contains(text(),'Use Editor')]"));
    var untitledName = element(by.xpath("//input[@placeholder='Enter title for Book']"));
    var yearOfCreation = element(by.xpath("//input[@id='copyrightYear']"));
    var titleName = element(by.xpath("//input[@id='name']"));
    var editDetails = element(by.xpath("//span[@ng-if='showEditMeta'][contains(.,'Edit Details')]"));
    var close = element(by.xpath("//button[@class='ui orange button']"));
	var downloadQRCodeCsv=element(by.xpath("//button[.=' Download Course QR Code ']"));
    var clickCurriculum = element(by.xpath("//div[contains(text(),'Select Curriculum')]"));
    var selectCurriculum = element(by.xpath("//div[contains(text(),'Select Curriculum')]//following::div[2]"));
    var untitledCourse = element(by.xpath("(//input[@id='name'])[2]"));
    var consentCheckBox = element(by.xpath("//input[@type='checkbox']"));
    var closeSendForReviewBox = element(by.xpath("//span[contains(text(),'Edit Details')]//following::i[@class='close link icon']"));
    var clickContentType = element(by.xpath("//select[@id='_selectcontentType']/following::i"));
    var selectTVLesson = element(by.xpath("//*[text()='TV Lesson']"));
    var practiceResource = element(by.xpath("//*[contains(text(),'Practice')]"));
    var contentType = element(by.xpath("//*[contains(text(),'Content Type')]/following::sui-select"));
    var practiceResource2 = element(by.xpath("(//*[contains(text(),'Practice')])[2]"));
    var clkBoardInBook = element(by.xpath("//label[contains(text(),'Board')]//following::sui-select"));
    var SltBoardInBook = element(by.xpath("//*[contains(text(),'Board')]/following::sui-select-option"));
    var clkMediumInBook = element(by.xpath("//label[contains(text(),'Medium')]//following::sui-multi-select"));
    var sltMediumInBook = element(by.xpath("//label[contains(text(),'Medium')]//following::sui-select-option"));
    var clkClassInBook = element(by.xpath("//label[contains(text(),'Class')]//following::sui-multi-select"));
    var sltClassInBook = element(by.xpath("//label[contains(text(),'Class')]//following::sui-select-option"));
    var clkSubjectInBook = element(by.xpath("//label[contains(text(),'Subject')]//following::sui-multi-select"));
    var sltSubjectInBook = element(by.xpath("//label[contains(text(),'Subject')]//following::sui-select-option"));
    var clkPublisher = element(by.xpath("//label[contains(text(),'Publisher')]/following::input"));
    var untitledCourse1 = element(by.xpath("(//input[@id='name'])[1]"));
    var collectionType = element(by.xpath("//*[contains(text(),'Collection Type')]/following::sui-select"));
    var contentResource = element(by.xpath("//*[contains(text(),'Collection Type')]/following::sui-select-option[4]/span[2]"));
    var allImage = element(by.id("allImagesTab"));
    var myImage = element(by.id("myAssetsTab"));
    
    
    
    return {
        bookName,
        startcreating,
        clickNewChild,
        untitleName,
        qrCodeRequired,
        dialcodeEnter,
        validateDialCode,
        savebutton,
        sendForReview,
        continuewButton,
        clickAppIcon,
        checkAppIcon,
        selectAppIcon,
        clickBoard,
        selectBoard,
        clickMedium,
        selectMedium,
        clickclass,
        SelectClass,
        clicksubject,
        selectSubject,
        submitIconsendForReview,
        clickWorkSpace,
        clickUpforReview,
        searchtext,
        clicksearchicon,
        clicksearchedContent,
        clickpublishbutton,
         clickCheckBox,
         clickPublishbut,
         clickDeleteFirst,
         clickYesDelete,
         clickUseEditor,
         book,
         untitledName,
         yearOfCreation,
         titleName,
         editDetails,
         close,
         downloadQRCodeCsv,
         clickCurriculum,
         selectCurriculum,
         untitledCourse,
         consentCheckBox,
        closeSendForReviewBox,
        clickContentType,
        selectTVLesson,
        practiceResource,
        contentType,
        practiceResource2,
        clkBoardInBook,
        SltBoardInBook,
        clkMediumInBook,
        sltMediumInBook,
        clkClassInBook,
        sltClassInBook,
        clkSubjectInBook,
        sltSubjectInBook,
        untitledCourse1,
        collectionType,
        contentResource,
        allImage,
        myImage,
        clkPublisher,


  };

};
module.exports = {
    etb
}