let SanityElement=()=>{
    //let dropdownProfile=element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
       let dropdownProfile=element(by.xpath("//div[@class='avatar-content']"));
    let verifyClassSec=element(by.xpath("//div[@id='class1']"));
    let clkManage=element(by.xpath("//a[contains(text(),'Manage')]"));
    let ClickSelectFile=element(by.xpath("//div[contains(text(),'Select file')]"));
    let clkSltFile=element(by.xpath("//input[@class='sb-btn-upload']"));
    let clkDownloadFile=element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']"));
    //let clkDownloadFile=element(by.xpath("//a[@href='/assets/SampleUserCsv.csv']"));
var  headerCourse  = element(by.xpath( "//a[contains(.,' Trainings ')]"));
let clkFirstContent=element(by.xpath("//div[@class='sb--card__main-area']"));
let assertTOC=element(by.xpath("//h3[@class='sb-collectionTree-title']"));
let assertTenantLogo=element(by.xpath("//img[@alt='APeKX']"));

let enterQrcode=element(by.xpath("//input[@placeholder='Enter QR code']"));
let submitQrcode=element(by.xpath("//button[text()='Search']"));
let clkLinkedContent=element(by.xpath("//h4[contains(@class,'sb--card')]"));
let clkExploreContentAP=element(by.xpath("//a[contains(text(),'EXPLORE CONTENT')]"));
let clkWorkSpace=element(by.xpath("//*[contains(text(),'Workspace')]"));
let verifyBookOption=element(by.xpath("//div[@class='content']/..//span[.='Book']"));
let clkCourse=element(by.xpath("//div[@class='content']/..//span[.='Book']"));
let startCreating=element(by.xpath("//button[contains(text(),'Start creating')]"));
let useEditor=element(by.xpath("//button[contains(text(),'Use Editor')]"));
let clkNewChild=element(by.xpath("//a[@class='blueColor'][2]"));
let UnitName=element(by.xpath("//input[@placeholder='Enter title for Book']"));
let qrCodeYes=element(by.xpath("//input[@value='Yes']"));
let saveButton=element(by.id("saveButton"));
let clickSibling=element(by.xpath("//a[contains(text(),'New Sibling')]"));
let clkDropDownQrcode=element(by.xpath("//div[@class='ui dropdown qrCodeStyler']"));
let clkGenerateQrCode=element(by.xpath("//span[contains(text(),'Download  QR codes')]/preceding::span[1]"));
let enterQrCode=element(by.xpath("//i[@class='close icon float-right margin-right-0 cursor-pointer']/following::input"));
let clkReqestQrCode=element(by.xpath("//button[@value='Request']"));
let QRcodeTostrMsg=element(by.xpath("//p[contains(text(),'QR code generated')]"));
let clkAllMyContent=element(by.xpath("//a[@href='/workspace/content/allcontent/1']"));
let clkFirstCntAllMyCon=element(by.xpath("//*[@class='ui image header']"));
let closeEditor=element(by.xpath("//*[@id='closeButton']"));
let clkEditDetails=element(by.xpath("//*[contains(text(),'Edit Details')]"));
let clkAppIcon=element(by.xpath("//div[@id='field-app-icon ']"));
let chkAppIcon=element(by.xpath("//div[@class='ui image']//img"));
let sltButton=element(by.xpath("//button[contains(text(),'Select')]"));
let clkPublisher=element(by.xpath("//input[@id='publisher']"));
let clkBoard=element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::input[1]"));
let sltBoard=element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::div[4]"));
let sltMedium=element(by.xpath("//label[contains(text(),'MEDIUM')]//following::div[4]"));
let clkMedium=element(by.xpath("//label[contains(text(),'MEDIUM')]//following::div[1]"));
let clkClass=element(by.xpath("//label[contains(text(),'CLASS')]//following::div[1]"));
let SltClass=element(by.xpath("//label[contains(text(),'CLASS')]//following::div[4]"));
let clkSubject=element(by.xpath("//label[contains(text(),'SUBJECT')]//following::div[1]"));
let SltSubject=element(by.xpath("//label[contains(text(),'SUBJECT')]//following::div[4]"));
let yearEnter=element(by.xpath("//input[@id='copyrightYear']"));
let clkSaveEdit=element(by.xpath("//button[contains(text(),'Save')]"));
let clkCloseButton=element(by.xpath("//button[contains(.,'Close')]"));
let clkDownloadQr=element(by.xpath("//span[contains(text(),'Download 1 +1 QR codes')]"));
let tocDropDown=element(by.xpath("//span[contains(text(),'TOC')]"));
let downloadTOCMetaData=element(by.xpath("//span[contains(text(),'TOC')]/following::i[@class='download icon']"));
let closePage=element(by.xpath("//i[@class='remove icon custom-cursor']"));
let clkClassToFocuse=element(by.xpath("//label[contains(text(),'CLASS')]"));
let tocTostrMsg=element(by.xpath("//strong[contains(text(),'Table of Content downloaded!')]"));
let assertDraftField=element(by.xpath("//a[contains(text(),'Drafts')]"));
let clkFirstBookDraft=element(by.xpath("//div[@class='ui image']"));
let entrDialCode=element(by.xpath("//input[@name='search']"));
let searchCode=element(by.xpath("(//button[contains(text(),'Search')])[2]"));
let searchConLib=element(by.xpath("(//input[@id='keyword'])[1]"));
let clkSearchLib=element(by.xpath("//button[contains(@title,'Search')]"));
let clkFirConLib=element(by.xpath("(//*[contains(@class,'sb--card__meta')])[5]"));
let clkCopyButton=element(by.xpath("//*[text()=' Copy ']"));
let vefifyContentCopied=element(by.xpath("//span[@class='ui tiny header']"));
let clkLibraray=element(by.xpath("//a[contains(text(),'textbooks')]"));

let clkTraining=element(by.xpath("//a[contains(text(),' Courses ')]"));
let clkTrainSearInp=element(by.xpath("//input[@title='Search in Courses']"));
let clkTrainingSrchbutton=element(by.xpath("//button[@title='Search in Courses']"));
let clkCoursFirst=element(by.xpath("(//div[@class='sb-card-meta course'])[1]"));
let clkTocFold=element(by.xpath("//*[@class='sb-collectionTree-title']"));
let clkTocSubUnits=element(by.xpath("//*[@role='tree']"));
let clkBorwse=element(by.xpath("//div[@class='qq-upload-button-selector qq-upload-button custom-qq-upload-button']"));
let clkUplodBtn=element(by.xpath("//button[contains(text(),'Upload')]"));

let assertCsvContent=element(by.xpath("//span[contains(text(),'unit1')]"));
let uploadTocButton=element(by.xpath("//span[contains(text(),'TOC')]/following::i[@class='upload icon']"));
let GeneratQr=element(by.xpath("//span[contains(text(),'Download  QR codes')]/preceding::span[1]"));


let sendForReview = element(by.xpath("//i[@class='send icon']"));
let closeEditor1 = element(by.xpath("//i[@class='remove icon custom-cursor']"));
let clkLinkedContents=element(by.xpath("//div[contains(@class,'sb--card__meta')]"));

let verfiyTNlogo= element(by.xpath("//img[@src='logo.png']"));
let clickTNLogin= element(by.xpath("//a[contains(text(),'Login')]"));
let verifyTNlogoInLoginPage= element(by.xpath("//img[@alt='tn']"));
let clickExploreCourse= element(by.xpath("//a[contains(text(),' Courses ')]"));
let clkFeaturedViewAll= element(by.xpath("//span[contains(text(),'Student courses')]//following::button[1]"));
let clkLatestViewAll= element(by.xpath("//span[contains(text(),'Teacher courses')]//following::button[1]"));
let verifyFeaturedCount= element(by.xpath("//span[contains(text(),'Featured courses')]//following::span[1]"));
let verifyLatestCount= element(by.xpath("//span[contains(text(),'Latest courses')]//following::span[1]"));
let clkSignInWithGoogle= element(by.xpath("//img[@class='signInWithGoogle']"));
let enterGooUsrName= element(by.xpath("//input[@name='identifier']"));
let clkGooNext= element(by.xpath("//div[@id='identifierNext']"));
let enterGooPassword= element(by.xpath("//input[@name='password']"));
let clkGooPassNext= element(by.xpath("//div[@id='passwordNext']"));
let clkGoogelAccAfterlogout= element(by.xpath("//div[contains(text(),'automation')]"));

var labelLibrary = element(by.xpath("//*[contains(@class,'textbooks')]"));
var labelDefaultBoard = element(by.xpath("(//sui-select[contains(@class,'selection ')])[2]"));
  var labelDefaultMedium = element(by.xpath("(//sui-select[contains(@class,'selection ')])[3]"));
    var labelDefaultClass = element(by.xpath("//div[contains(text(),' Class 10')]"));
    var labelClassOne = element(by.xpath("//div[contains(text(),' Class 1')]"));
 var firstContent = element(by.xpath("//h4[contains(@class,'sb--card__title')]"));
 let clkEnterQRCode = element(by.xpath("//button[@title='Enter QR code']"));
let enterQrCodeInGet = element(by.xpath("(//input[@placeholder='Enter QR code'])[1]"));

    return{
        dropdownProfile,
        uploadTocButton,
        verifyClassSec,
        clkManage,
        GeneratQr,
        ClickSelectFile,
        clkSltFile,
        clkDownloadFile,
        clkFirstContent,
        assertTOC,
        assertTenantLogo,
        clkEnterQRCode,
        enterQrcode,
        submitQrcode,
        clkLinkedContent,
        clkExploreContentAP,
        clkWorkSpace,
        verifyBookOption,
        clkCourse,
        startCreating,
        useEditor,
        clkNewChild,
        UnitName,
        qrCodeYes,
        saveButton,
        clickSibling,
        clkDropDownQrcode,
        clkGenerateQrCode,
        enterQrCode,
        clkReqestQrCode,
        QRcodeTostrMsg,
        clkAllMyContent,
        clkFirstCntAllMyCon,
        closeEditor,
        clkEditDetails,
        clkAppIcon,
        chkAppIcon,
        sltButton,
        clkPublisher,
        clkBoard,
        sltBoard,
        sltMedium,
        clkMedium,
        clkClass,
        SltClass,
        clkSubject,
        SltSubject,
        yearEnter,
        clkSaveEdit,
        clkCloseButton,
        clkDownloadQr,
        clkClassToFocuse,
        tocDropDown,
        downloadTOCMetaData,
        tocTostrMsg,
        closePage,
        clkFirstBookDraft,
        assertDraftField,
        entrDialCode,
        searchCode,
        searchConLib,
        clkSearchLib,
        clkFirConLib,
        clkCopyButton,
        vefifyContentCopied,
        clkLibraray,
        clkTraining,
        clkTrainSearInp,
        clkTrainingSrchbutton,
        clkCoursFirst,
        clkTocFold,
        clkTocSubUnits,
        clkBorwse,
        clkUplodBtn,
        assertCsvContent,
        headerCourse,
        sendForReview,
        closeEditor1,
        clkLinkedContents,
        verfiyTNlogo,
        clickTNLogin,
        verifyTNlogoInLoginPage,
        clickExploreCourse,
        clkFeaturedViewAll,
        clkLatestViewAll,
        verifyFeaturedCount,
        verifyLatestCount,
        clkSignInWithGoogle,
        enterGooUsrName,
        clkGooNext,
        enterGooPassword,
        clkGooPassNext,
        clkGoogelAccAfterlogout,
        labelLibrary,
        labelDefaultBoard,
        labelDefaultMedium,
        labelDefaultClass,
        labelClassOne,
        firstContent,
        enterQrCodeInGet,












    }
};
module.exports={
    SanityElement
 }