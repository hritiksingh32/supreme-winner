const { element } = require("protractor");

var contentCreation = () => {

    var proceedButton = element(by.xpath("//div[@class=' ui clearing segment']/..//button[contains(text(),'PROCEED')]"));
    var createCourse = element(by.xpath("//span[.='Course']"));
    var createBook = element(by.xpath("//div[@class='content']/..//span[.='Book']"));
    var createResource = element(by.xpath("//div[@class='content']/..//span[.='Resource']"));
    var createCollection = element(by.xpath("//div[@class='content']/..//span[.='Collection']"));
    var createLesson = element(by.xpath("//div[@class='content']/..//span[.='Lesson Plan']"));
    var createUploadContent = element(by.xpath("//div[@class='content']/..//span[.='Upload Content']"));
    var loginLink = element(by.xpath("//a[text()=' Login ']"));
    var userName = element(by.id('username'));
    var password = element(by.id('password'));
    var login = element(by.id('login'));
    var workSpace = element(by.xpath("//*[contains(text(),'Workspace')]"));
    var course = element(by.xpath("//span[contains(text(),'Course')]"));
    var name = element(by.xpath("//input[@placeholder='Name']"));
    var startCreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
    var newchild = element(by.xpath("//i[@class='level up icon clockwise rotated table-of-contents-child-icon ']"));
    var title = element(by.model('contentMeta[dynamicField.code]  '));
    var titleN = element(by.xpath("//input[@placeholder='Enter the Title ']"));
    var description = element(by.model('contentMeta.description '));
    var addTag = element(by.model('newTag.text'));
    var btnBack = element(by.id('back-button'));
    var descriptionN = element(by.xpath("//textarea[@id='description']"));
    var addTagN = element(by.xpath("//input[@placeholder='Add a tag']"));
    var addResource = element(by.xpath("//button[@class='ui blueBackGround whiteColor button list-addResource']"));
    var checkboxFirst = element(by.xpath("(//input[@type='checkbox'])[1]"));
    var proceed = element(by.xpath("//button[contains(text(),'PROCEED')]"));
    var save = element(by.xpath("//span[contains(text(),'Save')]"));
    var closeIcon = element(by.xpath("//div[@class='close icon-box popup-item']"));
    var headerDropdown = element(by.xpath("(//div[@id='dropdown-menu-list-header'])[2]"));
    var logout = element(by.xpath("//li[contains(text(),' Logout ')]"));
    var dog = element(by.css('name'));
    var district = element(by.xpath("(//select[contains(@class,'ui dropdown selection fields-dropdown')])[2]"));
    var selectDistrict = element(by.xpath("((//select[contains(@class,'ui dropdown selection fields-dropdown')])[2]//following::option[1])[1]"));
    var submitForm = element(by.xpath("//button[contains(text(),'Submit')]"));
    var btnSubmit = element(by.xpath("(//button[contains(text(),'Submit')])"));
    var resourceSearch = element(by.id("resourceSearch"));
    var selectResourceType2 = element(by.xpath("//input[@id='resourceSearch']/following::li[1]"));
    var clickAddbutton = element(by.xpath("//button[@class='ui small button blueBackGround whiteColor']"));
    var sendForReview = element(by.xpath("//div[@class='ui button text-part popup-item']//i[@class='send icon']"));
    var clickAppIcon = element(by.id("field-app-icon "));
    var checkAppIcon = element(by.xpath("//div[@class='ui image']//img"));
    var selectAppIcon = element(by.buttonText('Select'));
    var clickBoard = element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]"));
    var selectBoard = element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]//following::div[2]"));
    var clickMedium = element(by.xpath("//div[contains(text(),'Select Medium')]"));
    var selectMedium = element(by.xpath("//div[contains(text(),'Select Medium')]//following::div[2]"));
    var clickclass = element(by.xpath("//div[contains(text(),'Select Class')]"));
    var SelectClass = element(by.xpath("//div[contains(text(),'Select Class')]//following::div[2]"));
    var clicksubject = element(by.xpath("//div[contains(text(),'Select Subject')]"));
    var selectSubject = element(by.xpath("//div[contains(text(),'Select Subject')]//following::div[2]"));
    var submitIconsendForReview = element(by.buttonText('Select'));
    var clickWorkSpace = element(by.xpath("(//*[contains(.,'Workspace')])"));
    var clickUpforReview = element(by.xpath("//a[contains(text(),'Up For Review')]"));
    var searchtext = element(by.xpath("//input[@placeholder='Search content']"));
    var clicksearchicon = element(by.xpath("//input[@placeholder='Search content']/following::i"));
    var clicksearchedContent = element(by.xpath("//tbody/tr/td[1]"));
    var clickpublishbutton = element(by.xpath("//span[contains(text(),'Publish')]"));
    var clickCheckBox = element(by.xpath("//input[@class='listItem']"));
    var clickPublishbut = element(by.buttonText('Publish'));
    var clickDeleteFirst = element(by.xpath("(//i[@class='trash large icon'])[1]"));
    var clickYesDelete = element(by.xpath("//button[contains(.,'Yes')]"));
    var topic = element(by.xpath("//topic-selector[@class='ng-isolate-scope']/div/input"));
    var topicSelectorImg = element(by.xpath("//a[@class='tree item active']//following::input[1]//following::a[1]//preceding::i[3]"));
    var topicSelectorContent = element(by.xpath("//a[@class='tree item active']//following::input[1]//following::a[1]//following::a[1]"));
    var topicSelectorDone = element(by.xpath("(//a[.='Done'])[2]"));
    var titleName = element(by.id("name"));
    var saveform =element(by.xpath("//button[@id='closePopUp ']//following::button"));
    var author = element(by.xpath("//input[@id='author']"));
    var upForReview = element(by.xpath("//a[contains(text(),'Up For Review')]"));
    var searchForReview = element(by.xpath("//input[@placeholder='Search content']"));
    var searchIconUpForReview = element(by.xpath("//input[@placeholder='Search content']/following::i"));
    var searchedContentForPublish = element(by.xpath("//div[@class='UpReviewHeader']"));
    var publishCourseButton = element(by.xpath("//span[contains(text(),'Publish')]"));
    var checkBox = element.all(by.xpath("//input[@class='listItem']"));
    var popupPublishButtons = element(by.xpath("(//button[contains(text(),'Publish')])[2]"));
    var btnPublish = element(by.xpath("(//button[contains(text(),'Publish')])[1]"));
    var collection = element(by.xpath("//div[@class='content']/..//span[.='Collection']"));
    var lessonPlan = element(by.xpath("//div[@class='content']/..//span[.='Lesson Plan']"));
    var fieldLessonPlanDesc = element(by.xpath("(//textarea[@placeholder='Brief description about the unit'])[2]"));
    var fieldAddNotes = element(by.xpath("//input[@placeholder='Add Notes']"));
    var uploadContent = element(by.xpath("//div[@class='content']/..//span[.='Upload Content']"));
   
  // var year2020 = element(by.xpath("//select[@id='_selectyear']//following::option[2]"));

    var selectYear = element(by.xpath("//select[@id='_selectyear']"));
    var year2020 = element(by.xpath("//option[.='2018']"));
    var publishResource = element(by.xpath("//button[contains(text(),'Publish')]"));
    var publishLesson = element(by.xpath("//span[contains(text(),'Publish')]"));
    var addQuestionSet = element(by.id("question-set"));
    var addbutton = element(by.id("add-to-stage"));
    var questionCheckbox = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[1]"));
    var checkbxQn = element(by.xpath("(//div[contains(@class,'ui checkbox action-btn-checkbox')]//following::input[1])[1]"));
    var btnCancelInquestion = element(by.xpath("//button[@id='cancel-button']"));
    var nextButton = element(by.xpath("//button[contains(text(),'Next')]"));
    var questionSetTitle = element(by.model("questionSetConfigObj.title"));
    var searchTextInQuestion = element(by.xpath("//input[@id='searchText']"));
    var copyQuestion = element(by.xpath("//*[@class='copy icon']"));
    var previewRefreshIcon = element(by.xpath("//button[.='Refresh']"));
    var nextButtonInQuestion = element(by.id("next-button"));
    var submitButtonInQuestion = element(by.xpath("(//button[@id='save-question-button'])[2]"));
    var popupPublishButton1 = element(by.xpath("(//button[contains(text(),'Publish')])[1]"));
    var frameElement = element(by.tagName('iframe'));
    var enterTheTitleQues = element(by.xpath("//input[@placeholder='Enter the Title']"));
    var boardPostSelect = element(by.xpath("//textarea[@id='description']//following::input[1]"));
    var mediumPostSelect = element(by.xpath("//textarea[@id='description']//following::input[2]"));
    var gradePostSelect = element(by.xpath("//textarea[@id='description']//following::input[3]"));
    var subjectPostSelect = element(by.xpath("//textarea[@id='description']//following::input[4]"));
    var levelPostSelect = element(by.xpath("//textarea[@id='description']//following::input[6]"));
    var untitledUnitName = element(by.xpath("//input[@placeholder='Enter title for unit']"));
    var headerLibrary = element(by.xpath("//*[contains(@class,'textbooks')]"));
    var filterSearch = element(by.xpath("//input[@name='filter_search']"));
    var searchIcon = element(by.xpath("//button[contains(.,'Search')]"));
    var courseCard = element(by.xpath("//div[@class='sb--card__meta']"));
    var firstCourseCardContentName = element(by.xpath("//*[@class='sliderCardHeading text-cencapitalize']"));
    var deleteButton = element(by.xpath("(//i[@class='trash large icon'])[1]"));
    var yesButtonPopup = element(by.xpath("//button[contains(.,'Yes')]"))
    var messageBox = element(by.xpath("//strong[@class='iziToast-title slideIn']"));
    var published = element(by.xpath("//a[contains(text(),'Published')]"))
    var questionCheckbox0 = element(by.xpath("(//div[@class='ui checkbox action-btn-checkbox']//input[@type='checkbox'])[1]"));
    var questionCheckbox1 = element(by.xpath("(//div[@class='ui checkbox action-btn-checkbox']//input[@type='checkbox'])[2]"));
    var questionCheckbox2 = element(by.xpath("(//div[@class='ui checkbox action-btn-checkbox']//input[@type='checkbox'])[3]"));
    var selectedQuestionName = element(by.xpath("//div[@class='ui checkbox action-btn-checkbox']//input[@type='checkbox']/preceding::div[@class='middle aligned content nine wide column']/div"));
    var configureScore = element(by.xpath("//div[contains(.,'Configure Score')]/input[contains(@name,'max_score')]"));
    var saveCourse = element(by.xpath("//div[@id='saveButton']//i"));
    var previewClick = element(by.xpath("//i[@data-content='Preview']"));
    var clickLibray = element(by.xpath("//*[contains(@class,'textbooks')]"));
    var searchInput = element(by.xpath("(//input[@id='keyword'])[1]"));

    var searchPublishedCourses = element(by.xpath("(//h4[contains(@class,'sb--card__title')])[1]"));
    var fetchContentName = element(by.xpath("//div[@class='content-header__title font-weight-bold ellipsis text-left']"));
    var clickShare = element(by.xpath("//*[contains(text(),'Share')]"));
    var clickCopy = element(by.xpath("//button[@class='ui basic primary button']"));

    var closeIconInShare = element(by.xpath("//sui-dimmer[@class='page transition ui dimmer active visible']"));
    var playSharedContent = element(by.xpath("//*[contains(@class,'sb-pageSection-title')]//following::h3[1]"));
    var closeicon = element(by.xpath("//i[@class='close icon']"));
    var closeUploadContent = element(by.id("closeButton"));
    var closeSave = element(by.xpath("//button[contains(text(),'Close')]"));
    var uploadAgain = element(by.xpath("//i[@class='upload icon custom-icon']"));
    var saveIcon = element(by.xpath("//span[@class='label-icon-box-text save-button-text']"));


    var searchedCard = element(by.xpath("//h4[contains(@class,'sb--card__title')]"));
    var searchedContentForUpload = element(by.xpath("(//h4[contains(@class,'sb--card__title')])[1]"));
    var folderIcon = element(by.xpath("//h3[@class='sb-collectionTree-title']"));
    var playVedio = element(by.xpath("//span[@class='fancytree-node fancytree-lastsib fancytree-exp-nl fancytree-ico-c']"));
    var menuIcon1 = element(by.xpath("//img[@class='menu-icon icon']"));
    var closeIconOfContent = element(by.xpath("//i[@class='close icon']"));
    var mediumDropDown = element(by.xpath("//i[@class='dropdown icon']"));

    var submitFilterButton = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary ml-8']"));
    var engMed = element(by.xpath("//div[contains(text(),' Medium : English ')]"));
    var resetBtn = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-outline-primary']"));
    var sltclass1 = element(by.xpath("//sui-select-option[@title='Class 1']"));
    var sltcls = element(by.xpath("//div[@title='Class 1']"));
    var sltsubj = element(by.xpath("//sui-select-option[@title='English']"));
    var stldEng = element(by.xpath("//div[@title='English']"));

    var pdfContent1 = element(by.xpath("//span[contains(@class,'fancytree-custom-icon')]"));
    var menuPlayer = element(by.xpath("//img[@class=menu-icon icon nav-top hamberger-menu]"));

    var selectCBSE = element(by.xpath("//sui-select-option[contains(.,'CBSE')]"));

    var selectHindi = element(by.xpath("//sui-select-option[contains(.,'Hindi')]"));
    var clickClass = element(by.xpath("//div[contains(text(),'Select Class')]"));
    var submitButtonFilter = element(by.xpath("//button[contains(text(),'Apply')]"));
    var contentEngMed = element(by.xpath("//div[@title='English']"));
    var resetButton = element(by.xpath("//button[contains(text(),' Reset ')]"));
    var selectClass1 = element(by.xpath("//sui-select-option[contains(.,'Class 1')]"));
    var boardInCard = element(by.xpath("//div[@class='d-inline-block']"));
    var clssInCard = element(by.xpath("//div[@class='d-inline-block']"));
    var medInCard = element(by.xpath("//div[@class='d-inline-block']"));
    var clickSubject = element(by.xpath("//div[contains(text(),'Select Subject')]"));
    var selectGeography = element(by.xpath("//sui-select-option[contains(.,'Biology')]"));
    var subInCard = element(by.xpath("//div[@class='d-inline-block']"));
    var filter = element(by.xpath("//div[@class='sb-data-driven-filter-header']"));


    var courseName = element(by.xpath("//input[@placeholder='Name']"));
    var courseToBeClicked = element(by.xpath("//h4[@class='sb--card__title sb--card__title--ellipsis']"));
    var clickBoardFilter = element(by.xpath("//div[contains(text(),'Select Board')]"));
    var selectBoardFilter = element(by.xpath("//div[contains(text(),'Select Board')]//following::div[1]"));
    var headerCourse = element(by.xpath("//a[contains(.,' Courses ')]"));
    var closeIcon2 = element(by.xpath("(//i[@class='close icon'])[2]"));
    var nextButtonContentPlayer = element(by.xpath("//span[@class='header']"));
    var mergeAccount = element(by.xpath("//*[contains(text(),'Merge Account')]"));
    var mergebutton = element(by.xpath("//button[contains(text(),'Merge')]"));
    var mergeMessage = element(by.xpath("//p[text()=' Account merge initiated successfully. you will be notified once it is completed']"));
    var mergeMessageOkButton = element(by.xpath("//button[text()='OK ']"));


    var searchButton = element(by.xpath("//button[contains(@title,'Search in ')]"));
    var courseCardAfterSearch = element(by.xpath("//h4[@class='sb-card-title']"));
    var batchEnrollmentDateEnded = element(by.xpath("//span[@class='sb-label-status-error']"));
    var joinTraining = element(by.xpath("//button[contains(text(),'Join ')]"));


    var searchCourse1 = element(by.xpath("//input[@placeholder='Search in Trainings']"));
    var searchButton1 = element(by.xpath("//button[@title='Search in Trainings']"));

    var addIcon = element(by.xpath("//i[@class='add icon']"));
    var nameOfBatch = element(by.xpath("//input[contains(@formcontrolname,'name')]"));
    var aboutBatch = element(by.xpath("//input[@formcontrolname='description']"));
    var startDate = element(by.xpath("//input[@formcontrolname='startDate'] "));
    var startDateCalendar = element(by.xpath("//input[@formcontrolname='startDate']/../../../../../../../../../../../../sui-popup/div/sui-datepicker/sui-calendar-date-view/table/tbody/tr/td[@class='link today focus']"));
    var endDate = element(by.xpath("//input[@formcontrolname='endDate']"));
    var endDateCalendar = element(by.xpath("//input[@formcontrolname='startDate']/../../../../../../../../../../../../sui-popup/div/sui-datepicker/sui-calendar-date-view/table/tbody/tr/td[@class='link']"));
    var mentorsInBatch = element(by.xpath("(//i[contains(@class,'dropdown icon')])[4]"));
    var suborgMentor2InBatch = element(by.xpath("(//div[contains(@class,'item')])[6]"));
    var selectMentorsInBatch = element(by.xpath("//div[@class='item'][1]"));
    var mentorDropdown = element(by.xpath("//input[@id='mentorSelList']/following-sibling::i"));
    var membersInBatch = element(by.xpath("//div[contains(text(),'Select batch members')]"));
    var memberDropdown = element(by.xpath("//input[@id='userSelList']/following-sibling::i"));
    var buttonCreate = element(by.xpath("//button[@id='submitbutton']"));
    var closeBatchPopup = element(by.xpath("//i[@class='close icon']"));
    var batchForm = element(by.xpath("//label[contains(text(),'NAME OF BATCH')]"));
    var editBatchIcon = element(by.xpath("(//i[@class='icon right-floated cursor-pointer write'])"));
    var updateBatchButton = element(by.xpath("//button[contains(text(),' Update ')]"));
    var batchDropDownIcon = element(by.xpath("(//span[contains(.,'Ongoing')])[1]"));

    var contentPlayer = element(by.xpath("//img[@class='menu-icon icon nav-top hamberger-menu']"));
    var closePopup1 = element(by.xpath("//i[@class='close icon']"));
    var latestCourseCard = element(by.xpath("//h4[contains(text(),'Latest Trainings')]//following::h4[@class='sb-card-title'][1]"));
    var clearButton = element(by.xpath("//button[contains(text(),' Clear ')]"));
    var enterValidStartDate = element(by.xpath("//div[contains(text(),'Enter a valid start date ')]"));
    var start1 = element(by.xpath("//input[@formcontrolname='startDate']/../../../../../../../../../../../../sui-popup/div/sui-datepicker/sui-calendar-date-view/table/tbody/tr/td[@class='link'][3]"));
    var endDateShouldBeGreaterThanStartDate = element(by.xpath("//div[@class='iziToast fadeInUp iziToast-theme-light iziToast-color-red iziToast-animateInside iziToast-opened']"));
    var calendarIcon1 = element(by.xpath("//i[@class='calendar outline icon']"));
    var removeMembers = element(by.xpath("//i[@class='delete icon']"));
    var courseBatchesSection = element(by.xpath("//a[contains(text(),' Course Batches ')]"));
    var createdByMeCard = element(by.xpath("//span[@class='batch-content-description batch-card-ellipsis w-162']"));
    var assignedToMe = element(by.xpath("//a[contains(text(),'Assigned to me')]"));
    var editIcon = element(by.xpath("//i[@class='icon right-floated cursor-pointer write']"));
    var upcomingBatches = element(by.xpath("//span[contains(text(),'Upcoming')]"));


    var untitledCollection = element(by.xpath("//label[@class='content-title popup-item ng-binding ng-scope']"));
    var advancedFilter = element(by.xpath("//i[contains(@class,'dropdown icon ng-scope')]"));
    var difficulty = element(by.xpath("//div[text()='DIFFICULTY']/following-sibling::div"));
    var selectDifficulty = element(by.xpath("(//div[text()='DIFFICULTY']/following-sibling::div//*[contains(@class,'item')])[1]"));
    var questionType = element(by.xpath("//div[text()='QUESTION TYPE']/following-sibling::div"));
    var selectQuestionType = element(by.xpath("(//div[text()='QUESTION TYPE']/following-sibling::div//*[contains(@class,'item')])[1]"));
    var boardSyllabus = element(by.xpath("//div[text()='BOARD/SYLLABUS']/following-sibling::div"));
    var selectBoardSyllabus = element(by.xpath("//div[text()='BOARD/SYLLABUS']/following-sibling::div//*[contains(@class,'item')]"));
    var medium = element(by.xpath("(//div[text()='MEDIUM'])[2]/following-sibling::div"));
    var selectMediumQ = element(by.xpath("((//div[text()='MEDIUM'])[2]/following-sibling::div//*[contains(@class,'item')])[1]"));
    var classType = element(by.xpath("//div[text()='CLASS']/following-sibling::div"));
    var selectClassQ = element(by.xpath("(//div[text()='CLASS']/following-sibling::div//*[contains(@class,'item')])[4]"));
    var subject = element(by.xpath("//div[text()='SUBJECT']/following-sibling::div"));
    var selectSubjectQ = element(by.xpath("(//div[text()='SUBJECT']/following-sibling::div//*[contains(@class,'item')])[1]"));
    var myQuestionToggle = element(by.xpath("//input[@placeholder='My Questions']"));


    var validateLatestCourse = element(by.xpath("(//*[contains(text(),'My courses')]/following::div[contains(@class,'sb--card__meta')])[1]"));
    var licenceTerms = element(by.xpath("//span[text()='License Terms:']"));
    var licenceTag = element(by.xpath("//span[@class='licenseTag']/a"));
    var copyCourse = element(by.xpath("//i[@class='blue clone outline icon']"));
    var copyCourseContent = element(by.xpath("//div[@class='four wide column custom-6-wide']"));
    var editOrViewDetailslink = element(by.xpath("//span[@class='ng-scope']"));

    var credit = element(by.xpath("//a[contains(text(),'Credits')]"));
    var msgDerivedFrom = element(by.xpath("//div[contains(text(),' This content is derived from ')]"));
    var originalContentName = element(by.xpath("//div[contains(text(),'CONTENT')]/following-sibling::div"));
    var authorName = element(by.xpath("//div[contains(text(),'AUTHOR OF SOURCE CONTENT')]/following-sibling::div"));
    var publishedDetails = element(by.xpath("//div[contains(text(),' PUBLISHED ON DIKSHA BY')]/following-sibling::div"));
    var attributionName = element(by.xpath("//div[contains(text(),'ATTRIBUTIONS')]/following-sibling::div"));


    var courseNameInContentPlayer = element(by.xpath("//h5[contains(@class,'textbook__title sb-color-primary')]"));
    var clickProfileIcon = element(by.xpath("//div[contains(@class,'dropdown right top pointing')]/..//a[contains(.,'Profile')]"));
    var viewMoreButton = element(by.xpath("(//div[contains(text(),'Contribution(s)')])[2]"));
    var linkProfile = element(by.xpath("//li[contains(text(),' Profile')]"));
    var profileTickMark = element(by.xpath("//img[contains(@class,'avatar-tickmark')]"));
    var btnEdit = element(by.xpath("(//button[contains(text(),'Edit')])[1]"));
    var stateInsideEdit = element(by.xpath("//sui-select[@name='state']"));
    var districtInsideEdit = element(by.xpath("//sui-select[@name='district']"));
    var stateSelectInsideEdit = element(by.xpath("//span[contains(text(),'Andhra Pradesh')]"));
    var districtSelectInsideEdit = element(by.xpath("//span[contains(text(),'Anantapur')]"));
    var profileUpdatedSuccessPopup = element(by.xpath("//strong[contains(text(),'Profile updated successfully...')]"));
    var btnClose = element(by.xpath("//i[@class='close icon']"));
    var filterIcon = element(by.xpath("//span[@class='browse item cursor-pointer']"));

    var clickFilterBoard = element(by.xpath("//div[contains(text(),' Select Board')]"));
    var selectFilterBoard = element(by.xpath("//div[contains(text(),' Select Board')]/following::sui-select-option[1]"));
    var clickFilterGrade = element(by.xpath("//div[contains(text(),' Select Grade')]"));
    var SelectFilterGrade = element(by.xpath("//div[contains(text(),' Select Grade')]/following::sui-select-option[1]"));
    var clickFilterSubject = element(by.xpath("//div[contains(text(),' Select Subject')]"));
    var selectFilterSubject = element(by.xpath("//div[contains(text(),' Select Subject')]/following::sui-select-option[1]"));

    var clickFilterMedium = element(by.xpath("//div[contains(text(),' Select Medium')]"));
    var selectFilterMedium = element(by.xpath("//div[contains(text(),' Select Medium')]/following::sui-select-option[1]"));
    var selectFilterMedium2 = element(by.xpath("//*[contains(text(),' 1 Medium')]/following::span[4]"));

    var clickSubmit = element(by.xpath("//button[contains(.,' Apply ')]"));

    var sortByDropdown = element(by.xpath("//*[@id='sortByDropDown']"));
    var modifiedOnDropdown = element(by.xpath("//span[contains(.,'Updated On')]"));
    var searchCoursesUpForReview = element(by.xpath("(//div[@class='UpReviewHeader'])[1]"));
    var nameAToZ = element(by.xpath("//span[contains(.,'Name A-Z')]"));
    var createdOnDropdown = element(by.xpath("//span[contains(.,'Created On')]"));
    var nextLink = element(by.xpath("//a[contains(text(),'>') or contains(text(),'Next')]"));
    var firstLink = element(by.xpath("//a[contains(text(),'1') or contains(text(),'First')]"));
    var lastLink = element(by.xpath("//a[contains(text(),'»') or contains(text(),'Last')]"));
    var previousLink = element(by.xpath("//a[contains(text(),'<') or contains(text(),'Previous')]"));

    var requestChangesButton = element(by.xpath("//body//*[contains(text(),'Request')]"));
    var requestChangesComment = element(by.xpath("//textarea[@class='ng-untouched ng-pristine ng-valid']"));
    var requestChangesBlueButton = element(by.xpath("(//button[contains(text(),'Request changes')])[2]"));
    var drafts = element(by.xpath("//a[contains(text(),'Drafts')]"));
    var firstContentName = element(by.xpath("(//div[contains(@class,'cardImageText ')])[1]"));
    var imageCard = element(by.xpath("//div[@class='ui image']"));
    var reviewerCommentIcon = element(by.xpath("//i[@class='fa fa-comment']"));
    var reviewerCommentSection = element(by.xpath("//textarea[@id='review-comments']"));
    var closePopup = element(by.xpath("//i[@class='close link icon']"));
    var closeEditor2 = element(by.xpath("//*[@id='closeButton']"));


    var courseCard1 = element(by.xpath("//div[@class='sb-card-body']"));
    var viewCourseDashBoard = element(by.xpath("//button[contains(text(),'View course dashboard')]"));
    var startDateDashboard = element(by.xpath("//span[contains(text(),'Start Date')]"));
    var endDateDashboard = element(by.xpath("//span[contains(text(),'End Date')]"));
    var participants = element(by.xpath("//span[contains(@class,'course-participants ')]"));
    var trainingCompleted = element(by.xpath("//*[@id='dashoardFiltersHolder']/div/span[4]/span"));
    var certificateIssued = element(by.xpath("//*[@id='dashoardFiltersHolder']/div/span[5]/span"));
    var userName1 = element(by.xpath("//div[contains(text(),'User Name')]"));
    var organizationName = element(by.xpath("//div[contains(text(),'Organization Name')]"));
    var mobileNumber = element(by.xpath("//div[contains(text(),'Mobile Number')]"));
    var enrollOn = element(by.xpath("//div[contains(text(),'Enroled On ')]"));
    var status = element(by.xpath("//div[contains(text(),'Status')]"));
    var certificateStatus = element(by.xpath("//div[contains(text(),'Certificate Status')]"));
    var selectBatch = element(by.xpath("//div[contains(text(),'Select batch to see dashboard')]"));
    var batchName = element(by.xpath("//div[contains(text(),'Select batch to see dashboard')]/following::i/following::sui-select-option/span[2]"));
    var sortFunctionalityInAllColumn1 = element(by.xpath("(//i[@class='sort up icon fs-1'])[1]"));
    var sortFunctionalityInAllColumn2 = element(by.xpath("(//i[@class='sort up icon fs-1'])[2]"));
    var sortFunctionalityInAllColumn3 = element(by.xpath("(//i[@class='sort up icon fs-1'])[3]"));
    var sortFunctionalityInAllColumn4 = element(by.xpath("(//i[@class='sort up icon fs-1'])[4]"));

    var userEnrolledInToBatch = element(by.xpath("//*[@id='CourseStatsTable']/tbody/tr/td/span"));
    var downloadCsv = element(by.xpath("//i[@class='download icon']"));
    var searchForParticipants = element(by.xpath("//input[@placeholder='Search for participants']"));
    var twoHundersUsers = element(by.xpath("//div[@class='sb-pagination-container flex-ai-center']/div"));
    var secondButton = element(by.xpath("//div[@class='sb-pagination ml-auto']/a[3]"));
    var firstButton = element(by.xpath("//div[@class='sb-pagination ml-auto']/a[2]"));
    var nextButton1 = element(by.xpath("//div[@class='sb-pagination ml-auto']/a[4]"));
    var previousButton = element(by.xpath("//div[@class='sb-pagination ml-auto']/a[1]"));
    var closeDashboard = element(by.xpath("//i[@class='ui remove icon CloseButtonFont']"));

    var classDropDown = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[3]"));
    var subjectDropDown = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[4]"));
    var selectEng = element(by.xpath("//sui-select-option[contains(.,'Hindi')]"));

    var mediumDropDown1 = element(by.xpath("//div[contains(text(),' Select Medium')]"));
    var classDropDown1 = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[2]"));
    var subjectDropDown1 = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[3]"));
    var selectEng1 = element(by.xpath("//div[contains(text(),' Select Medium')]//following::sui-select-option[1]"));
    var submitFilterButton1 = element(by.xpath("//button[contains(text(),' Apply ')]"));
    var engMed1 = element(by.xpath("//div[contains(text(),' Medium : English ')]"));
    var resetBtn1 = element(by.xpath("//button[contains(text(),'Reset')]"));
    var sltclass2 = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[2]//following::span[2]"));
    var sltcls1 = element(by.xpath("//div[@title='Class 1']"));
    var sltsubj1 = element(by.xpath("(//div[@class='sb-prominent-filter-field'])[3]//following::span[2]"));
    var stldEng1 = element(by.xpath("//div[@title='English']"));
    var Teacher = element(by.xpath("//div[text()='Teacher']"));
    var Continue = element(by.xpath("//button[contains(text(),'Continue')]"));
    var state = element(by.xpath("(//select[contains(@class,'ui dropdown selection fields-dropdown')])[1]"));
    var selectState = element(by.xpath("((//select[contains(@class,'ui dropdown selection fields-dropdown')])[1]//following::option[1])[1]"));   
    var toastMsg = element(by.xpath("//*[@class='iziToast-title slideIn']"));
    var firstCourseCardName = element(by.xpath("(//span[contains(@class,'sliderCardHeading')])[1]"));
    var allMyContent = element(by.xpath("//a[contains(text(),'All My Content')]"));   
   
    var selectState = element(by.xpath("((//select[contains(@class,'ui dropdown selection fields-dropdown')])[1]//following::option[1])[1]"));
    var collecclick = element(by.xpath("(//h4[contains(@class,'sb--card__title')])[2]"));   
    var getcopyshardata = element(by.xpath("//input[@id='copyLinkData']"));   
    var verifyDataAfterFilter = element(by.xpath("//div[@class='sb--card__meta2_data']"));   
    
    var mergeAccountWithCusto = element(by.xpath("//li[contains(text(),' Merge Account')]"));
    var btnMerge = element(by.xpath("//button[contains(text(),' Merge ')]"));
    var btnOk = element(by.xpath("//button[contains(text(),'OK')]"));
    var click2Next = element(by.xpath("//a[@class='sb-item'][1]"));
    var click3Next = element(by.xpath("//a[@class='sb-item'][2]"));
    var SearchInPublished = element(by.xpath("(//input[@name='filter_search'])[2]"));
   // var sunbirdOkMsg = element(by.xpath("//button[text()='OK, Got it!']"));
    var sunbirdOkMsg =element(by.xpath("//button[text()=' Try new theme ']"));
    var saveButoonReview =element(by.xpath("//button[@id='closePopUp ']//following::button"));
    let clickCourse=element(by.xpath("//a[contains(@class,'item item--textbooks')]/following-sibling::a[1]")); 
    var BasedOnYourPrefernceText=element(by.xpath("//div[text()='Based on your preferences']"));
    var profileImage=element(by.xpath("(//img[@alt='Guest User'])[2]"));
    var RegisterHereLink=element(by.xpath("//span[@id='signup']"));
    var RegisterOnDikshaHeader=element(by.xpath("//div[text()=' Register on DIKSHA']"));
    var QRcodeSearchBox=element(by.xpath("//input[@placeholder='Enter QR code']"));
    var searchQRCode=element(by.xpath("(//button[text()='Search'])[2]"));
    var clickOnFirstContent=element(by.xpath("(//div[@class='sb--card__meta'])[1]"));
    var topicSelectorDone1 = element(by.xpath("(//a[.='Done'])[1]"));
    var zoomIn = element(by.xpath("//span[text()='Fullscreen']"));
    var zoomOut = element(by.xpath("//span[text()='Minimize']"));
    
    return {
        closeIcon,
        workSpace,
        startCreating,
        addResource,
        proceedButton,
        createCourse,
        createBook,
        createResource,
        createCollection,
        createLesson,
        createUploadContent,
        loginLink,
        clickAddbutton,
        selectResourceType2,
        resourceSearch,
        submitForm,
        selectDistrict,
        district,
        dog,
        logout,
        headerDropdown,
        save,
        proceed,
        userName,
        password,
        login,
        course,
        name,
        newchild,
        title,
        titleN,
        description,
        addTag,
        descriptionN,
        addTagN,
        checkboxFirst,
        sendForReview,
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
        topic,
        topicSelectorImg,
        topicSelectorContent,
        topicSelectorDone,
        titleName,
        saveform,
        author,
        upForReview,
        searchForReview,
        searchIconUpForReview,
        searchedContentForPublish,
        publishCourseButton,
        checkBox,
        popupPublishButtons,
        btnPublish,
        frameElement,
        collection,
        lessonPlan,
        uploadContent,
        selectYear,
        year2020,
        publishResource,
        addQuestionSet,
        questionCheckbox,
        nextButton,
        questionSetTitle,
        addbutton,
        searchTextInQuestion,
        copyQuestion,
        previewRefreshIcon,
        nextButtonInQuestion,
        submitButtonInQuestion,
        popupPublishButton1,
        enterTheTitleQues,
        untitledUnitName,
        headerLibrary,
        filterSearch,
        searchIcon,
        courseCard,
        firstCourseCardContentName,
        deleteButton,
        yesButtonPopup,
        messageBox,
        published,
        questionCheckbox0,
        questionCheckbox1,
        questionCheckbox2,
        selectedQuestionName,
        configureScore,
        saveCourse,
        previewClick,
        searchInput,
        clickLibray,

        searchPublishedCourses,
        fetchContentName,
        clickShare,
        clickCopy,
        closeIconInShare,
        playSharedContent,
        closeicon,
        closeUploadContent,
        closeSave,
        uploadAgain,
        saveIcon,
        selectHindi,
        clickClass,
        submitButtonFilter,
        contentEngMed,
        resetButton,
        selectClass1,
        clssInCard,
        clickSubject,
        selectGeography,
        subInCard,
        searchedCard,
        searchedContentForUpload,
        folderIcon,
        playVedio,
        menuIcon1,
        closeIconOfContent,
        mediumDropDown,
        selectEng,
        submitFilterButton,
        engMed,
        resetBtn,
        sltclass1,
        sltcls,
        sltsubj,
        stldEng,
        pdfContent1,
        menuPlayer,
        selectCBSE,
        filter,
        boardInCard,
        medInCard,
        courseName,
        courseToBeClicked,
        clickBoardFilter,
        selectBoardFilter,
        headerCourse,
        closeIcon2,
        nextButtonContentPlayer,
        mergeAccount,
        mergebutton,
        mergeMessage,
        mergeMessageOkButton,
        searchButton,
        courseCardAfterSearch,
        batchEnrollmentDateEnded,
        joinTraining,

        editIcon,
        searchCourse1,
        searchButton1,
        addIcon,
        nameOfBatch,
        aboutBatch,
        startDate,
        startDateCalendar,
        endDate,
        endDateCalendar,
        mentorsInBatch,
        suborgMentor2InBatch,
        selectMentorsInBatch,
        mentorDropdown,
        membersInBatch,
        memberDropdown,
        buttonCreate,
        closeBatchPopup,
        batchForm,
        editBatchIcon,
        updateBatchButton,
        contentPlayer,
        closePopup1,
        latestCourseCard,
        clearButton,
        enterValidStartDate,
        start1,
        endDateShouldBeGreaterThanStartDate,
        calendarIcon1,
        removeMembers,
        courseBatchesSection,
        createdByMeCard,
        assignedToMe,
        batchDropDownIcon,
        upcomingBatches,

        untitledCollection,
        advancedFilter,
        difficulty,
        selectDifficulty,
        questionType,
        selectQuestionType,
        boardSyllabus,
        selectBoardSyllabus,
        medium,
        selectMediumQ,
        classType,
        selectClassQ,
        subject,
        selectSubjectQ,
        myQuestionToggle,
        validateLatestCourse,
        licenceTerms,
        licenceTag,
        copyCourse,
        copyCourseContent,
        editOrViewDetailslink,
        credit,
        msgDerivedFrom,
        originalContentName,
        authorName,
        publishedDetails,
        attributionName,
        courseNameInContentPlayer,
        clickProfileIcon,
        viewMoreButton,

        filterIcon,
        clickFilterBoard,
        selectFilterBoard,
        clickFilterMedium,
        selectFilterMedium,
        clickFilterSubject,
        selectFilterSubject,
        clickSubmit,
        clickFilterGrade,
        SelectFilterGrade,
        selectFilterMedium2,
        sortByDropdown,
        modifiedOnDropdown,
        searchCoursesUpForReview,
        nameAToZ,
        createdOnDropdown,
        nextLink,
        firstLink,
        lastLink,
        previousLink,

        requestChangesButton,
        requestChangesComment,
        requestChangesBlueButton,
        drafts,
        firstContentName,
        imageCard,
        reviewerCommentIcon,
        reviewerCommentSection,
        closePopup,
        closeEditor2,
        closeDashboard,
        previousButton,
        nextButton1,
        firstButton,
        secondButton,
        searchForParticipants,
        twoHundersUsers,
        downloadCsv,
        userEnrolledInToBatch,
        sortFunctionalityInAllColumn1,
        sortFunctionalityInAllColumn2,
        sortFunctionalityInAllColumn3,
        sortFunctionalityInAllColumn4,
        batchName,
        selectBatch,
        certificateStatus,
        status,
        enrollOn,
        mobileNumber,
        organizationName,
        userName1,
        certificateIssued,
        trainingCompleted,
        participants,
        endDateDashboard,
        startDateDashboard,
        viewCourseDashBoard,
        courseCard1,
        classDropDown,
        subjectDropDown,
        classDropDown1,
        subjectDropDown1,
        selectEng1,
        submitFilterButton1,
        engMed1,
        resetBtn1,
        sltclass2,
        sltcls1,
        sltsubj1,
        stldEng1,
        mediumDropDown1,
        Teacher,
        Continue,
        state,
        selectState,
        fieldLessonPlanDesc,
        fieldAddNotes,
        publishLesson,
        toastMsg,
        firstCourseCardName,
        allMyContent,
        
        btnBack,
        boardPostSelect,
        mediumPostSelect,
        gradePostSelect,
        levelPostSelect,
        subjectPostSelect,
        checkbxQn,
        btnCancelInquestion,
        linkProfile,
        profileTickMark,
        btnEdit,
        btnClose,
        stateInsideEdit,
        districtInsideEdit,
        stateSelectInsideEdit,
        districtSelectInsideEdit,
        profileUpdatedSuccessPopup,
        btnSubmit,
        collecclick,
        getcopyshardata,
        verifyDataAfterFilter,
        mergeAccountWithCusto,
        btnMerge,
        btnOk,
        click2Next,
        click3Next,
        SearchInPublished,
        sunbirdOkMsg,
        saveButoonReview,
        clickCourse,
        BasedOnYourPrefernceText,
        profileImage,
        RegisterHereLink,
        RegisterOnDikshaHeader,
        QRcodeSearchBox,
        searchQRCode,
        clickOnFirstContent,
        topicSelectorDone1,
        zoomIn,
        zoomOut,

    };

};
module.exports = {
    contentCreation
}