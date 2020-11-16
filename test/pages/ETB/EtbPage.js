const { element } = require("protractor");

let EtbElem=()=>{
    
    var loginButton = element(by.xpath("//a[text()=' Login ']"));
    var username = element(by.id("username"));
    var password = element(by.id("password"));
    var clickLogin1 = element(by.xpath("//p/preceding::button[contains(.,'Login')]"));
    var workSpace = element(by.xpath("//*[contains(text(),'Workspace')]"));
    var createBook = element(by.xpath("//div[@class='content']/..//span[.='Book']"));
    var courseName = element(by.xpath("//input[@placeholder='Name']"));
    var startCreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
    var iFrame = element(by.tagName("iframe"));
    var clickUseEditor = element(by.xpath("//button[contains(text(),'Use Editor')]"));
    var dropDownTOC = element(by.xpath("//*[.='TOC']"));
    var downloadIcon = element(by.xpath("(//div[@class='item disabled'])[1]"));
    var downloadIcon1 = element(by.xpath("(//div[@class='item enabled'])[1]"));
    var closeCourseButton = element(by.xpath("//div[@id='closeButton']"));
    var createBookTab = element(by.xpath("//a[contains(text(),' Create ')]"));
    var book = element(by.xpath("//div[@class='content']/..//span[.='Book']"));
    var newchild = element(by.xpath("//i[@class='level up icon clockwise rotated table-of-contents-child-icon ']"));
    var untitledNameB = element(by.xpath("//input[@placeholder='Enter title for Book']"));
    var qrCodeRequired=element(by.xpath("//input[@value='Yes']"));
    var saveCourse = element(by.xpath("//i[@class='icon-save']"));
    var dropdown = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]"));
    var logout = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]/..//a[contains(.,'Logout')]"));
    var dialcodeEnter=element(by.model('dialcodes'));
    var validatedialcodeEnterYes = element(by.xpath("//i[@class='large check circle icon']"));
    var collaboratorIcon = element(by.xpath("//i[@class='add user icon custom-icon']"));
    var allElements = element(by.xpath("(//div[@class='header ellipsis text-capitalize font-size-1 ng-binding'])[1]"));
    var collaboratorIcon = element(by.xpath("//i[@class='add user icon custom-icon']"));
    var searchCollaboratorField = element(by.xpath("//input[@id='user-search']"));
    var suggestionCollaboratorList = element(by.xpath("//p[contains(text(),'content creator')]"));
    // var labelContentCreator = element(by.xpath("//p[contains(text(),'content creator')]"));
    var addCollaborator = element(by.xpath("(//button[@class='right floated clear-btn color-blue ng-scope'])[1]"));
    var donebutton1 = element(by.xpath("//button[@ng-click='addCollaborators()']"));
    var closeEditor1 = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var collaborationMenu = element(by.xpath("//a[contains(text(),' Collaborations')]"));
    var searchForReview = element(by.xpath("//input[@placeholder='Search content']"));
    var searchIconUpForReview = element(by.xpath("//input[@placeholder='Search content']/following::i"));
    var editCollaborator = element(by.xpath("//i[@class='edit icon cursor-pointer']"));
    var resourceSearch = element(by.id("resourceSearch"));
    var selectResourceType2 = element(by.xpath("//input[@id='resourceSearch']/following::li[1]"));
    var clickAddbutton = element(by.xpath("//button[@class='ui small button blueBackGround whiteColor']"));
    var proceedButton = element(by.xpath("//div[@class=' ui clearing segment']/..//button[contains(text(),'PROCEED')]"));
    var addResource = element(by.buttonText("ADD RESOURCE"));
    var sendForReview = element(by.xpath("//i[@class='send icon']"));
    var continueAnyway = element(by.xpath("//button[.='Continue anyway']"));
    var clickAppIcon = element(by.xpath("(//div[@class='form-icon'])[1]"));
    var checkAppIcon = element(by.xpath("(//div[@class='ui image']//img)[1]"));
    var selectAppIcon = element(by.xpath("//button[@class='ui blue button ng-scope']"));
    var board = element(by.xpath("(//i[@class='dropdown icon'])[4]"));
    var boardSelect = element(by.xpath("//div[@class='menu transition visible']"));
    var medium = element(by.xpath("//div[contains(text(),'Select Medium')]"));
    var mediumSelect = element(by.xpath("//div[contains(text(),'Select Medium')]//following::div[2]"));
    var clickclass=element(by.xpath("//div[contains(text(),'Select Class')]"));
    var SelectClass=element(by.xpath("//div[contains(text(),'Select Class')]//following::div[2]"));
    var clicksubject=element(by.xpath("//div[contains(text(),'Select Subject')]"));
    var selectSubject=element(by.xpath("//div[contains(text(),'Select Subject')]//following::div[2]"));
    var yearOfCreation = element(by.xpath("//input[@id='copyrightYear']"));
    var save = element(by.xpath("//button[text()='Save']"));
    var enterQRcodeButton = element(by.xpath("//button[@title='Enter QR code']"));
    var EnterQRCodeBox=element(by.xpath("//input[@title='Search or enter QR code']"))
    var SearchQRCode=element(by.xpath("//button[text()='Search']"))
    var enterQRcodeInSearchField = element(by.xpath("//input[@class='sb-search-input']"));
    var submitQRcode = element(by.xpath("//div[@class='ui modal scroll transition active visible normal']/div[3]/button"));
    var linkedQRcodeContent = element(by.xpath("(//h4[contains(@class,'title')])[2]"));
    var QrcontentClk = element(by.xpath("(//div[contains(@class,'sb--card__meta')])[1]"));
    var contentNotAdded = element(by.xpath("//*[contains(@class,'fmedium ')]"));
    var contentWillGetAddedInFutureMessage = element(by.xpath("//*[contains(@class,'placeholder-content')]"));
    var saveIcon=element(by.xpath("//i[@class='icon-save']"));
    var headerLibrary = element(by.xpath("//*[contains(@class,'textbooks')]"));
    var filterSearch = element(by.xpath("//input[@name='filter_search']"));
    var searchIcon = element(by.xpath("//button[contains(.,'Search')]"));
    var clickFirstBook = element(by.xpath("(//div[@class='sb--card__meta'])[5]"));
    var clickCopyInBook = element(by.xpath("//*[contains(text(),'Copy')]"));
    var yearOfCreation = element(by.xpath("//input[@id='copyrightYear']"));
    var reviewSubmission = element(by.xpath("//a[@href='/workspace/content/review/1']"));
    var coursename = element(by.xpath("//span[@class='sliderCardHeading text-cencapitalize']"));
    var upForReview = element(by.xpath("//a[contains(text(),'Up For Review')]"));
    var searchedContentForPublish = element(by.xpath("//tbody/tr/td[1]"));
    var viewDetail = element(by.xpath("(//span[@class='ng-scope'])[1]"));
    var valueOfMedium = element(by.xpath("//b[contains(text(),'edium')]//following::td[2]"));
    var valueOfClass = element(by.xpath("//b[text()='Class']/../../td[3]"));
    var valueOfSubject = element(by.xpath("//b[text()='Subject']/../../td[3]"));
    var valueOfPublisher = element(by.xpath("//b[text()='Publisher']/../../td[3]"));
    var valueOfAuthor = element(by.xpath("//b[text()='Author']/../../td[3]"));
    var valueOfAttributions = element(by.xpath("//b[text()='Attributions']/../../td[3]"));
    var valueOfCopyright = element(by.xpath("//b[text()='Copyright']/../../td[3]"));
    var valueOfYearOfCreation = element(by.xpath("//b[text()='Year of Creation']/../../td[3]"));
    var closeViewDetailPage = element(by.xpath("(//i[contains(@class,'close')])[2]"));
    var publishCourse = element(by.xpath("//span[contains(text(),'Publish')]"));
    var popupPublishButtons = element(by.xpath("//button[@class='ui blue button ng-binding']"));
    var indexNum = element(by.xpath("//a[contains(.,'4')]"));
    var unitsTitleName = element(by.xpath("(//*[contains(@class,'sb--card__')])/h4"));
    var authorName = element(by.xpath("//dt[text()='Author']/../dd"));
    var mediumName = element(by.xpath("//dt[text()='Medium']/../dd"));
    var className = element(by.xpath("//dt[text()='Class']/../dd"));
    var subjectName = element(by.xpath("//dt[text()='Subject']/../dd"));
    var viewInDetailPage = element(by.xpath("//a[text()='View']"));
    var copyrightInDetailPage = element(by.xpath("//div[contains(text(),'COPYRIGHT')]//following::div[1]"));
    var attributionsInDetailPage = element(by.xpath("//div[contains(text(),'ATTRIBUTIONS')]//following::div[1]"));
    var startCreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
    var iFrame = element(by.tagName("iframe"));
    var clickUseEditor = element(by.xpath("//button[contains(text(),'Use Editor')]"));
    var newchild = element(by.xpath("//i[@class='level up icon clockwise rotated table-of-contents-child-icon ']"));
    var untitledNameB = element(by.xpath("//input[@placeholder='Enter title for Book']"));
    var qrCodeRequired=element(by.xpath("//input[@value='Yes']"));
    var dialcodeEnter=element(by.model('dialcodes'));
    var validatedialcodeEnterNo = element(by.xpath("//i[contains(@class,'large red remove circle icon')]"));
    var addResource = element(by.buttonText("ADD RESOURCE"));
    var limitedSharingArrow = element(by.xpath("//div[@data-content='Send for review']/..//div[contains(@class,'ui pointing dropdown')]"));
    var clickLimitedSharing = element(by.xpath("//div[.=' Limited sharing']"));
    var sharedViaLink = element(by.xpath("//a[contains(text(),'Shared via link')]"));
    var qrCodeFieldNO = element(by.xpath("//input[@value='No']"));
    var selectResourceN = element(by.xpath("(//div[@class='image dimmable'])[1]"));
    var selectResourceN1 =  element(by.xpath("(//div[@class='header contentMetaTitle ng-binding'])[1]"));
    var addResourceFromExplore = element(by.xpath("(//a[@class='addResource'])[1]"));
    var viewAllButton = element(by.xpath("(//span[.='View All'])[1]"));
    var previewClick = element(by.xpath("(//i[@data-content='Preview'])[1]"));
    var previewClick1 = element(by.xpath("(//i[@data-content='Preview'])[2]"));
    var clickPlayButton = element(by.xpath("//div[@class='preview-image']"));
    var navigateToRootFolder = element(by.xpath("//i[@ng-click='goToRootParent()']"));
    var sorryThisOperationIsNotAllowed = element(by.xpath("//p[@class='slideIn']"));
    var clickFilterBoard = element(by.xpath("(//i[@class='dropdown icon'])[1]"));
    var selectFilterBoard = element(by.xpath("(//i[@class='dropdown icon'])[1]/following::sui-select-option"));
    var clickFilterMedium = element(by.xpath("(//i[@class='dropdown icon'])[3]"));
    var selectFilterMedium =element(by.xpath("((//i[@class='dropdown icon'])[1]/following::sui-select-option//span[text()='english'])[1]"));
    var clickFilterClass = element(by.xpath("(//i[@class='dropdown icon'])[4]"));
    var selectFilterClass =element(by.xpath("(//i[@class='dropdown icon'])[2]/following::sui-select-option//span[text()='class 9']"));
    var clickFilterSubject = element(by.xpath("(//i[@class='dropdown icon'])[5]"));
    var selectFilterSubject = element(by.xpath("((//i[@class='dropdown icon'])[1]/following::sui-select-option//span[text()='biology'])[1]"));
    var clickSubmit = element(by.xpath("//button[contains(.,' Submit ')]"));
    var courseToBeClicked = element(by.xpath("//div[@class='sb--card__meta']"));
    
    var courseCard = element(by.xpath("(//*[@class='sb--card'])[1]"));
    var resourcename1 = element(by.xpath("(//div[@class='header contentMetaTitle ng-binding'])[1]"));
    var resourcename = element(by.xpath("//p[@class='header elipses ng-binding']"));
     var getContentFromDraft = element(by.xpath("(//span[@class='sliderCardHeading text-cencapitalize'])[1]"));
    var clickLicenseDropDown=element(by.xpath("//label[contains(text(),'LICENSE')]//following::div[2]"));
    var sltLicenseValue=element(by.xpath("(//div[@class='menu transition visible']//following::div[1])[1]"));
    var clickRequestChanges = element(by.xpath("//body//*[contains(text(),'Request Changes')]"));
    var rejectReason1 = element(by.xpath("(//h5[.='Appropriateness']/..//input[@class='listItem'])[1]"));
    var rejectReason2 = element(by.xpath("(//h5[.='Content details']/..//input[@class='listItem'])[1]"));
    var rejectReason3 = element(by.xpath("(//h5[.='Usability']/..//input[@class='listItem'])[1]"));
    var reviewComment = element(by.xpath("//textarea"));
    var requestChangesButton = element(by.xpath("//button[contains(.,'Cancel')]/following::button[2]"));
    var drafts = element(by.xpath("//a[contains(text(),'Drafts')]"));
    var editQRCodeButton = element(by.xpath("//a[@ng-click='editDialCode()']"));
    var enterQRCode = element(by.xpath("//input[@placeholder='Enter code here']"));
    var selectExtraResource = element(by.xpath("(//img[@class='resourceMetaImage '])[1]"));
    var publishCourseButton = element(by.xpath("//span[contains(text(),'Publish')]"));
    var allMyContent = element(by.xpath("//a[@href='/workspace/content/allcontent/1']"));
    var searchInAllMyContent = element(by.xpath("//input[@placeholder='Search content']"));
    var deleteButton = element(by.xpath("(//i[@class='trash large icon'])[1]"));
    var yesButtonPopup = element(by.xpath("//button[contains(.,'Yes')]"));
    var messageBox = element(by.xpath("//strong[@class='iziToast-title slideIn']"));
    var sampleCsvFile = element(by.xpath("//div[@class='sampleuploadcsv']"));

    var showfilter = element(by.xpath("//div[@id='showFilterButton']"));
    var clkStatus = element(by.xpath("//*[@id='status']"));
    var clkDraftStatus = element(by.xpath("//span[contains(text(),'Draft')]"));
var clkApply = element(by.xpath("//button[contains(text(),' Apply ')]"));
var verifyDraftStatus = element(by.xpath("//td[contains(text(),'Draft')]"));
var clkLiveStatus = element(by.xpath("//span[contains(text(),'Live')]"));
var verifyLiveStatus = element(by.xpath("//td[contains(text(),'Live')]"));
var clickSameStatus = element(by.xpath("//div[contains(text(),' 1 Status ')]"));
var checkBox = element.all(by.xpath("//input[@class='listItem']"));
    


var clickFilter = element(by.xpath("//i[@class='icon filter']"));
var courseCard1 = element(by.xpath("//div[@class='sb--card__main-area']"));
var assertShalloBook = element(by.xpath("//button[contains(text(),' Copy as course ')]"));

var licenseLabelEditPageBook = element(by.xpath("//div[@id='licenseterms']//following::div[1]"));
var closeEditPopUp = element(by.xpath("//button[@id='closePopUp ']"));

var linkCourse = element(by.xpath("//a[contains(text(),'Courses')]"));
var selectMaths = element(by.xpath("//span[contains(text(),'Mathematics')]"));
var btnApply = element(by.xpath("//button[contains(text(),' Apply ')]"));
var clickCourse = element(by.xpath("(//div[contains(@class,'sb--card__meta')])[1]"));
var btnJoinCourse = element(by.xpath("//button[contains(text(),'Join ')]"));

return{
    searchCollaboratorField,
    suggestionCollaboratorList,
    // labelContentCreator,
    clickFilter,
    courseCard1,
        checkBox,
        clickRequestChanges,
        clickSameStatus,
        verifyLiveStatus,
        clkLiveStatus,
        clkApply,
        verifyDraftStatus,
        clkDraftStatus,
        showfilter,
        clkStatus,
        sampleCsvFile,
        editQRCodeButton,
        yesButtonPopup,
        rejectReason1,
        messageBox,
        deleteButton,
        publishCourseButton,
        searchInAllMyContent,
        enterQRCode,
        selectExtraResource,
        allMyContent,
        rejectReason2,
        requestChangesButton,
        drafts,
        reviewComment,
        rejectReason3,
        sltLicenseValue,
        clickLicenseDropDown,
        getContentFromDraft,
        resourcename,
        saveIcon,
        resourcename1,
        clickFilterBoard,
        selectFilterSubject,
        clickSubmit,
        courseCard,
        selectFilterClass,
        courseToBeClicked,
        selectFilterMedium,
        clickFilterSubject,
        clickFilterClass,
        selectFilterBoard,
        selectResourceN1,
        clickFilterMedium,
        addResourceFromExplore,
        selectResourceN,
        previewClick1,
        sorryThisOperationIsNotAllowed,
        previewClick,
        unitsTitleName,
        navigateToRootFolder,
        clickPlayButton,
        clickLimitedSharing,
        qrCodeFieldNO,
        copyrightInDetailPage,
        viewAllButton,
        clickCopyInBook,
        sharedViaLink,
        viewInDetailPage,
        limitedSharingArrow,
        attributionsInDetailPage,
        className,
        subjectName,
        mediumName,
        valueOfPublisher,
        authorName,
        valueOfYearOfCreation,
        valueOfMedium,
        closeViewDetailPage,
        headerLibrary,
        yearOfCreation,
        upForReview,
        valueOfAttributions,
        popupPublishButtons,
        filterSearch,
        publishCourse,
        loginButton,
        valueOfAuthor,
        searchIcon,
        indexNum,
        viewDetail,
        username,
        valueOfClass,
        password,
        valueOfSubject,
        reviewSubmission,
        coursename,
        clickLogin1,
        workSpace,
        valueOfCopyright,
        createBook,
        courseName,
        startCreating,
        iFrame,
        searchedContentForPublish,
        clickUseEditor,
        newchild,
        untitledNameB,
        qrCodeRequired,
        dropDownTOC,
        downloadIcon,
        downloadIcon1,
        closeCourseButton,
        createBookTab,
        book,
        saveCourse,
        dropdown,
        logout,


       
        dialcodeEnter,
        validatedialcodeEnterYes,
        collaboratorIcon,
        allElements,
        addCollaborator,
        donebutton1,
       
        closeEditor1,
        collaborationMenu,
        searchForReview,
        searchIconUpForReview,
        editCollaborator,
        resourceSearch,
        selectResourceType2,
        clickAddbutton,
        proceedButton,
        clickFirstBook,
        addResource,
        sendForReview,
        continueAnyway,
        clickAppIcon,
        checkAppIcon,
        selectAppIcon,
        board,
        boardSelect,
        medium,
        mediumSelect,
        clickclass,
        SelectClass,
        clicksubject,
        selectSubject,
        save,
       
        enterQRcodeButton,
        enterQRcodeInSearchField,
        submitQRcode,
        linkedQRcodeContent,
        QrcontentClk,
        contentNotAdded,
        contentWillGetAddedInFutureMessage,
        validatedialcodeEnterNo,

        assertShalloBook,
        licenseLabelEditPageBook,
        closeEditPopUp,

        linkCourse,
        selectMaths,
        btnApply,
        clickCourse,
        btnJoinCourse,
        EnterQRCodeBox,
        SearchQRCode,


    }
};
module.exports={
    EtbElem
 }