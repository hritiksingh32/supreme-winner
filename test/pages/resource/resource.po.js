const { element, EventEmitter } = require("protractor");

var resource = () => {

    var clickresource = element(by.xpath("//div[@class='content']/..//span[.='Resource']"));
    var linkCourse = element(by.xpath("//div[@class='content']/..//span[.='Course']"));
    var fieldName = element(by.xpath("//input[@placeholder='Name']"));
    var fieldTag = element(by.xpath("//input[@placeholder='Add a tag']"));
    var btnAddResource = element(by.xpath("//button[contains(text(),'ADD RESOURCE')]"));
    var fieldSearch = element(by.xpath("//input[@placeholder='Search...']"));
    var resourceName = element(by.xpath("//input[@placeholder='Name']"));
    var startCreating = element(by.xpath("//button[contains(text(),'Start creating')]"));
    var addShape = element(by.xpath("//i[@id='shape']"));
    var addTriangle = element(by.xpath("//div[@class='menu transition visible']/a[1]"));
    var clicksave = element(by.id('saveButton'));
    var btnSave = element(by.xpath("//button[contains(text(),'Save')]"));
    var btnSaveAndCreate = element(by.xpath("//button[contains(text(),'Save and Create')]"));
    var closebutton = element(by.xpath("//button[contains(text(),'Close')]"));
    var addslide = element(by.xpath("//i[@id='stage']"));
    var addImage = element(by.xpath("//i[@id='image']"));
    var selectImg = element(by.xpath("//div[@class='ui image']"));
    var addHotSpot = element(by.xpath("//a[@data-content='Add Hotspot']"));
    var addscribblepad = element(by.xpath("//i[@id='scribblepad']"));
    var addActivity = element(by.xpath("//i[@id='activitybrowser']"));
    var sendForReview = element(by.xpath("//div[@class='ui button text-part popup-item']"));
    var clickAppIcon = element(by.id('field-app-icon '));
    var selectAppIcon = element(by.buttonText('Select'));
    var save = element(by.buttonText('Save'));
    var clickYear = element(by.xpath("//input[@id='copyrightYear']"));
    var addbuttonActivity = element(by.xpath("(//button[text()='Add'])[2]"));
    var selectButton = element(by.xpath("//button[contains(text(),'Select')]"));
    var searchActivity = element(by.xpath("//input[@placeholder='Search activity']"));

    var createQuestion = element(by.id("create-question-button"));
    var selectMTFTemplate = element(by.xpath("//a[contains(text(),'Match The Following')]/following::div[3]"));
    var writeQuestion = element(by.xpath("//iframe[contains(@title,'Rich Text Editor')]"));
    var enterTheQuestion = element(by.xpath("//body[@contenteditable='true']"));
    var enterAnswer1 = element(by.id("cke_mtfoptionsLHS_0"));
    var enterAnswer2 = element(by.id("cke_mtfoptionsRHS_0"));
    var enterAnswer3 = element(by.id("cke_mtfoptionsLHS_1"));
    var enterAnswer4 = element(by.id("cke_mtfoptionsRHS_1"));
    var enterAnswer5 = element(by.id("cke_mtfoptionsLHS_2"));
    var enterAnswer6 = element(by.id("cke_mtfoptionsRHS_2"));
    var previewRefreshIcon = element(by.xpath("//button[.='Refresh']"));
    var createQueNext = element(by.xpath("//button[@id='next-button']"));
    var enterTheTitleQues = element(by.xpath("//input[@placeholder='Enter the Title']"));
    var fieldDescription = element(by.xpath("//textarea[@id='description']"));
    var boardInQuestion = element(by.xpath("(//div[text()='Select Board' or text()= 'Select Board/Syllabus' ])[2]"));
    var ddBoard = element(by.xpath("//label[contains(text(),'BOARD/SYLLABUS')]//following::div[1]"));
    var selectCBSEQue = element(by.xpath("(//div[text()='Select Board' or text()= 'Select Board/Syllabus' ])[2]/following::div/div[1]"));
    var btnCloseQuestion = element(by.xpath("//i[@class='cursor-pointer close link icon']"));
    var toggleShowImmediateFeedback = element(by.xpath("//input[@id='show-feedback']"));
    var toggleShuffleQuestions = element(by.xpath("//input[@id='shuffle0questions']"));
    var toggleAfterShuffled = element(by.xpath("//input[@name='shuffle_questions']"));
    var toggleAfterShowImmediateFDBK = element(by.xpath("//input[@name='show_feedback']"));
    var btnCopySlide = element(by.xpath("//i[@class='icon-duplicate link']")); 
    var labelNumberOne = element(by.xpath("//span[contains(text(),'1')]"));
    var labelNumberTwo = element(by.xpath("//span[contains(text(),'2')]"));
    var inputTotalScore = element(by.id('max_score'));
    var mediumInQuestion = element(by.xpath("(//div[.='Select Medium'])[2]"));
    var selectEnglishFITB = element(by.xpath("(//div[.='Select Medium'])[2]/following::div/div[1]"));
    var labelRajasthan = element(by.xpath("(//div[contains(text(),'State (Rajasthan)')])[3]"));
    var gradeLevelInQuestion = element(by.xpath("(//div[.='Select Grade'])"));
    var selectClass4 = element(by.xpath("(//div[.='Select Grade'])/following::div/div[1]"));
    var subjectInQuestion = element(by.xpath("(//div[.='Select Subject'])[2]"));
    var selectMathematics = element(by.xpath("(//div[.='Select Subject'])[2]/following::div/div[1]"));
    var maxScore = element(by.xpath("//input[@placeholder='Enter the Max Score']"));
    var levelInQuestion = element(by.xpath("(//div[.='Select Level'])[2]"));
    var selectEasy = element(by.xpath("(//div[.='EASY'])[2]"));
    var learningOutcome = element(by.xpath("//div[contains(text(),'Select LearningOutcome')]"));
    var selectLearningOutcome = element(by.xpath("//div[text()='हिन्दी के महीनों और अयोध्या की जानकारी प्राप्त करेंगे।']"));
    var addText = element(by.xpath("//a[@data-content='Add Text']"));
    var addTextTextArea = element(by.xpath("//textarea[@placeholder='Add text here']"));
    var addTextDoneButton = element(by.xpath("//button[.='Done']"));
    var imageCard = element(by.xpath("(//div[contains(@class,'cardImageText')])[1]"));
    var selectImage = element(by.xpath("//button[contains(text(),'Select')]"));
    var addHotspot = element(by.xpath("//a[@data-content='Add Hotspot']"));
    var saveIcon = element(by.id("saveButton"));
    var closeButtonMsg = element(by.xpath("//button[contains(text(),'Close')]"));
    var clickActionTabInResourceCreation = element(by.xpath("//a[@title='Actions']"));
    var clickPlusIconInActionTab = element(by.xpath("//i[@class='plus icon']"));
    var clickActionType = element(by.xpath("//select[@id='actionTypeDropdown']/../i"));
    var selectActionTypeHide = element(by.xpath("//select[@id='actionTypeDropdown']/../div[2]//div[@class='item'][2]"));
    var clickActionTarget = element(by.xpath("//select[@id='actionTargetDropdown']/../i"));
    var selectActionTarget = element(by.xpath("//select[@id='actionTargetDropdown']/../div[2]//div[@class='item']"));
    var selectActionAddButton = element(by.id("addActionBtn"));
    var preview = element(by.xpath("//i[contains(@class,'eye')]"));
    var iFrame = element(by.tagName("iframe"));
    var nextIcon = element(by.xpath("(//a[@class='nav-icon nav-next'])[2]"));
    var iFrame = element(by.tagName("iframe"));
    var addSlide = element(by.xpath("//a[@data-content='Add Slide']"));
    var searchUploadImage = element(by.xpath("//input[@id='searchMyImageAssets']"));
    var clickImageSearch = element(by.xpath("//input[@id='searchMyImageAssets']/..//i[@class='circular search link icon inverted']"));
    var checkContentIcon = element(by.xpath("//div[@class='ui image']//img[@class='asset_thumbnail']"));
    var addShapes = element(by.xpath("//div[@data-content='Add Shapes']"));
    var addTriangleShape = element(by.xpath("//span[.='Triangle']"));
    var actionsOptionSideBar = element(by.id("actionsOptionSideBar"));
    var showActionFormBtn = element(by.id("showActionFormBtn"));
    var actionTypeDropdown = element(by.xpath("//select[@id='actionTypeDropdown']/.."));
    var showHide = element(by.xpath("//div[text()='Show / Hide']"));
    var actionTargetDropdown = element(by.xpath("//select[@id='actionTargetDropdown']/.."));
    var actionTargetDropdownFirstItem = element(by.xpath("//select[@id='actionTargetDropdown']/..//div[@class='item']"));
    var addActionbtn = element(by.id("addActionBtn"));
    var propertiesSection = element(by.xpath("//a[@title='Properties']"));
    var clickNextSlide = element(by.xpath("//div[@class='ui fluid image']"));
    var linkTo = element(by.xpath("//div[text()='Link To']"));
    var addAudio = element(by.xpath("//a[@data-content='Add Audio']"));
    var clickAllAudio = element(by.linkText("All audio"));
    var selectAudio_AllAudio = element(by.xpath("(//audio[@id='audio-6'])[2]/../.."));
    var audio = element(by.xpath("//input[@placeholder='Search Audio...']/following::audio[1]/following::div[1]"));
    var playPause = element(by.xpath("//div[text()='Play / Pause']"));
    var hide = element(by.xpath("//div[text()='Hide']"));
    var previewIcon = element(by.xpath("//div[@data-content='Preview']//i"));
    var previewPopup = element(by.xpath("//div[@class='child preview-bgimage']"));
    var previewPopupFrame = element(by.xpath("//iframe[@id='previewContentIframe']"));
    var previewNextBtn = element(by.xpath("(//a[@class='nav-icon nav-next'])[2]"));
    var contentPreiviewCompleteScreen = element(by.xpath("//h2[@class='ps-heading']"));
    var previewPopupReplayBtn = element(by.xpath("//a[@class='ps-btn ps-btn--orange endpage-icons']"));
    var showPlayerControl = element(by.xpath("//input[contains(@class,' ng-empty')]"));
    var teacherInstruction = element(by.xpath("//textarea[@id='instructions']"));
    var backgroundColor = element(by.xpath("//div[@class='sp-preview-inner']"));
    var redColor = element(by.xpath("//span[@title='#ff0000']"));
    var addQuestionSet = element(by.xpath("//a[@data-content='Add Question Set']"));
    var pickQuestion = element(by.xpath("//div[@class='header ng-binding']"));
    var pickQuestionCheckBox = element(by.xpath("//div[@class='seven wide column qb-question-container']//input"));
    var pickQueNextButton = element(by.xpath("//button[contains(text(),'Next')]"));
    var questionSetTitle = element(by.xpath("//input[@placeholder='Question Set Title']"));
    var questionSetAddButton = element(by.xpath("(//button[contains(text(),'Add')])[3]"));
    var collaboratorIcon = element(by.xpath("//i[@class='add user icon custom-icon']"));
    var donebutton1 = element(by.xpath("//button[@ng-click='addCollaborators()']"));
    var closeEditor1 = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var allElements = element(by.xpath("//div[contains(.,'diksha_ntptest_org')]/following-sibling::(div[contains(.,'content creator')])"));
    var addCollaborator = element(by.xpath("//button[@class='right floated clear-btn color-blue ng-scope']"));
    var collaborationSection = element(by.xpath("//a[@popuptext='View content you are collaborating on']"));
    var searchForReview = element(by.xpath("//input[@placeholder='Search content']"));
    var searchIconUpForReview = element(by.xpath("//input[@placeholder='Search content']/following::i"));
    var courseNameInCollaboration = element(by.xpath("//div[@class='UpReviewHeader']"));
    var editIcon1 = element(by.xpath("//i[@class='edit icon cursor-pointer']"));
    var submittedForReview = element(by.xpath("//a[contains(text(),'Submitted for review')]"));
    var courseNameInReviewSubmission = element(by.xpath("//span[@class='sliderCardHeading text-cencapitalize']"));
    var searchCollaboratorField = element(by.xpath("//input[@id='user-search']"));
    var suggestionCollaboratorList = element(by.xpath("//input[@id='user-search']//following::p[3]"));
    var manageCollaborator = element(by.xpath("//a[contains(text(),'Manage Collaborators')]"));
    var removeCollaborator = element(by.xpath("//strong[contains(text(),'REMOVE')][1]"));
    var clickDoneButton = element(by.xpath("//button[@id='done-button']"));
    var collaboratorTostrMsg = element(by.xpath("//p[contains(text(),'Collaborators updated successfully')]"));
    var closeEditor2 = element(by.xpath("//*[@id='closeButton']"));

    var reviewSubmission = element(by.xpath("//a[@href='/workspace/content/review/1']"));
    var coursename = element(by.xpath("(//span[@class='sliderCardHeading text-cencapitalize'])[1]"));
    var upForReview = element(by.xpath("//a[contains(text(),'Up For Review')]"));
    var newchild = element(by.xpath("//i[@class='level up icon clockwise rotated table-of-contents-child-icon ']"));
    var contentupload = element(by.xpath("(//img[@class='ui tiny image UpReviewTinyImage']/..//div[@class='UpReviewHeader'])[1]"));
    var clickRequestChanges = element(by.xpath("//body//*[contains(text(),'Request ')]"));
    var rejectReason1 = element(by.xpath("(//h5[.='Appropriateness']/..//input[@class='listItem'])[1]"));
    var rejectReason2 = element(by.xpath("(//h5[.='Content details']/..//input[@class='listItem'])[1]"));
    var rejectReason3 = element(by.xpath("(//h5[.='Usability']/..//input[@class='listItem'])[1]"));
    var reviewComment = element(by.xpath("//textarea"));
    var requestChangesButton = element(by.xpath("//button[contains(.,'Cancel')]/following::button[2]"));
    var untitledUnitName = element(by.xpath("//input[@placeholder='Enter title for unit']"));
    var reviewerSuggestion = element(by.xpath("//i[@class='fa fa-comment']"));
    var reviewerSuggestionTitle = element(by.xpath("(//span[@class='ng-binding'])[4]"));
    var closeLinkIcon = element(by.xpath("//div[@class='right aligned column']/i"));
    var closePageIcon = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var drafts = element(by.xpath("//a[contains(text(),'Drafts')]"));
    var searchInput = element(by.xpath("(//input[@id='keyword'])[1]"));
    var searchIcon = element(by.xpath("//button[contains(.,'Search')]"));
    var cardLabel = element(by.xpath("//span[contains(@class,'sb--card__type')]"));
    var searchedContentForUpload = element(by.xpath("(//h4[contains(@class,'sb--card__title sb__ellipsis sb__ellipsis--two text-left')])[1]"));
    var headerLibrary = element(by.xpath("//*[contains(@class,'textbooks')]"));
    var selectFITBTemplate = element(by.xpath("//a[contains(text(),'Fill in the Blanks')]/following::div[3]"));

    var workSpace = element(by.xpath("//*[contains(text(),'Workspace')]"));
    var headerCourse = element(by.xpath("//a[contains(.,' Trainings ')]"));
    var linkCourseInHeader = element(by.xpath("(//a[contains(text(),'Courses')])[1]"));

    var clickLargeImageIcon = element(by.xpath("//i[@class='image large icon']"));
    var checkAppIcon = element(by.xpath("//div[@class='ui image']//img"));

    var verifyLargeImageAdded = element(by.xpath("//div[@class='image-container']"));
    var clickAudioIcon = element(by.xpath("//*[@class='music large icon']"));
    var verifyAudioAdded = element(by.xpath("//div[@class='audio-container']"));
    var clickAllAudioTab = element(by.id("allAudioTab"));
    var selectAudio = element(by.xpath("//input[@id='searchAllAudioAssets']//following::div[@class='audio-tag ng-binding']"));
    var clickMathTextIcon = element(by.xpath("//span[contains(@class,'mathtext_icon')]"));
    var selectMathText = element(by.xpath("//div[@class='math-lib-header ng-binding']"));
    var selectedMathTextAdd = element(by.xpath("//button[@class='ui basic primary button math-add-button']"));
    var verifyFormualaAdded = element(by.xpath("//span[@data-math='A=\\pi r^2']"));
    var submitButtonInQuestion = element(by.xpath("(//button[@id='save-question-button'])[2]"));
    var nextButton = element(by.xpath("//button[contains(text(),'Next')]"));

    var addbutton = element(by.xpath("(//button[contains(text(),'Add')])[3]"));

    var checkAppIcon = element(by.xpath("//div[@class='ui image']//img"));
    var yearOfCreation = element(by.xpath("//input[@id='copyrightYear']"));
    var saveButton = element(by.xpath("//button[.='Save']"));

    var searchedContentForPublish = element(by.xpath("//tbody/tr/td[1]"));

    var publishResource = element(by.xpath("//button[contains(text(),'Publish')]"));
    var checkBox = element.all(by.xpath("//input[@class='listItem']"));
    var checkBoxInCourse = element.all(by.xpath("//input[@class='checkBox']"));
    var checkBoxInCourse1 = element(by.xpath("(//input[@class='checkBox'])[1]"));
    var checkBoxInCourse2 = element(by.xpath("(//input[@class='checkBox'])[2]"));
    var checkBoxInCourse3 = element(by.xpath("(//input[@class='checkBox'])[3]"));

    var btnProceed = element(by.xpath("//button[contains(text(),'PROCEED')] "));
    var fieldInputDesc = element(by.xpath("//input[@id='name']"));
    // var btnContributors = element(by.xpath("//i[@class='users icon']"));
    var contributorsToolTip = element(by.xpath("//div[@class='item disabled ng-binding ng-scope']"));
    var btnContributors = element(by.xpath("//div[@id='contentCreditsList']"));
    var popupPublishButton = element(by.xpath("(//button[contains(text(),'Publish')])[2]"));


    var filterSearch = element(by.xpath("//input[@name='filter_search']"));
    var courseCard = element(by.xpath("//*[@class='sb-card' or @class='asset_thumbnail']"));
    var courseCard1 = element(by.xpath("//*[@class='sb--card' or @class='asset_thumbnail']"));
    var clickFITBAnsTxtBox = element(by.xpath("//input[contains(@class,'ans-field')]"));
    var clickNextButtonMCQ = element(by.xpath("//a[@ng-show='showCustomNext !== state_off']"));
    var verifyInCorrect = element(by.xpath("//img[@id='incorrectButton']"));
    var clickTryAgainButton = element(by.xpath("//div[contains(text(),'Try Again')]"));
    var verifyCorrect = element(by.xpath("//img[@id='correctButton']"));
    var clickNext = element(by.xpath("//*[contains(text(),'Next')]"));
    var giveRatings = element(by.xpath("//div[contains(text(),' Enjoyed this content? ')]//following::i"));
    var submitRating = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var verifyRatingSlideMsg = element(by.xpath("//*[contains(text(),'Thank you for rating this content!')]"));
    var justCompletedMsg = element(by.xpath("//*[contains(text(),'You just completed')]"));
    var ScoreLabel = element(by.xpath("//*[contains(text(),'SCORE')]"));
    var validateScoreResult = element(by.xpath("//li[@class='ps-score-data endpage-score ps-score-data-padding-top ng-binding']"));

    var Published = element(by.xpath(" //a[contains(.,'Published ')]"));
    var firstCourseCardContentName = element(by.xpath("//*[@class='sliderCardHeading text-cencapitalize']"));
    var deleteButton = element(by.xpath("(//i[@class='trash large icon'])[1]"));
    var yesButtonPopup = element(by.xpath("//button[contains(.,'Yes')]"));
    var messageBox = element(by.xpath("//strong[@class='iziToast-title slideIn']"));
    var allMyContent = element(by.xpath("//a[contains(.,'All My Content ')] "));
    var clickBoard = element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]"));
    var selectBoard = element(by.xpath("//div[contains(text(),'Select Board/Syllabus')]//following::div[2]"));
    var clickMedium = element(by.xpath("//div[contains(text(),'Select Medium')]"));
    var selectMedium = element(by.xpath("//div[contains(text(),'Select Medium')]//following::div[2]"));
    var clickclass = element(by.xpath("//div[contains(text(),'Select Class')]"));
    var SelectClass = element(by.xpath("//div[contains(text(),'Select Class')]//following::div[2]"));
    var clicksubject = element(by.xpath("//div[contains(text(),'Select Subject')]"));
    var selectSubject = element(by.xpath("//div[contains(text(),'Select Subject')]//following::div[2]"));
    var ddYear = element(by.xpath("//select[@id='_selectyear']"));
    var label2020 = element(by.xpath("//select[@id='_selectyear']//option[contains(text(),'2020')]"));
    var select = element(by.xpath("//button[contains(.,'Select')]"));
    var selectMCQTemplate = element(by.xpath("//a[contains(text(),'Multiple Choice Question')]/following::div[3]"));
    var inputAnswer1 = element(by.id("mcqoptions_0"));
    var markAsRightAnswer = element(by.xpath("//input[@id='0']"));
    var inputAnswer2 = element(by.id("mcqoptions_1"));
    var addAnswerInQuestionSet = element(by.id("mcq-add-ans-button"));
    var deleteSetAnsewerOptions = element(by.xpath("//i[@class='trash large icon delete-icon']"));
    var closePage = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var firstBook = element(by.xpath("//div[@class='ui image']"));
    var clickMcQFirstAnswer = element(by.xpath("//div[@class='option-text-container text-only']"));
    var courseName = element(by.xpath("//input[@placeholder='Name']"));
    var boardInResource = element(by.id("board"));
    var mediumInResource = element(by.id("medium"));
    var gradeLevelInResource = element(by.id("gradeLevel"));
    var subjectInResource = element(by.id("subject"));
    var resourceTypeInResource = element(by.id("resourceType"));
    var firstItemInBoardInResource = element(by.xpath("//sui-select-option[@class='item']"));
    var firstItemInMediumInResource = element(by.xpath("//*[@id='medium']/div[2]/sui-select-option[contains(@class,'item')]"));
    var firstItemInGradeLevelInResource = element(by.xpath("//*[@id='gradeLevel']/div[2]/sui-select-option[contains(@class,'item')]"));
    var firstItemInSubjectInResource = element(by.xpath("//*[@id='subject']/div[2]/sui-select-option[contains(@class,'item')]"));
    var firstItemInResourceTypeInResource = element(by.xpath("//*[@id='resourceType']/div[3]/sui-select-option[contains(@class,'item')]"));
    var firstQuestionName = element(by.xpath("(//div[contains(@class,'header ng-binding')])[2]"));
   // var searchTextInQuestion = element(by.xpath("//input[@id='searchText']"));
    var searchTextInQuestion = element(by.xpath("//input[@id='searchText']"));
    var createdResorce = element(by.xpath("(//span[@class='sliderCardHeading text-cencapitalize'])[1]"));
    var checkBox1InSelectQuestion = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[1]"));
    var checkBox2InSelectQuestion = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[2]"));
    var checkBox3InSelectQuestion = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[3]"));
    var checkBox4InSelectQuestion = element(by.xpath("(//div[@data-tooltip='select question']//input[@type='checkbox'])[4]"));
    var closePage = element(by.xpath("//i[@class='remove icon custom-cursor']"));
    var searchIconInQuestion = element(by.xpath("//i[@id='qb-search-button']"));

    var arrangeTemplate = element(by.xpath("//a[contains(text(),'Arrange in Sequence')]/following::div[2]"));
    var enterSeq1ArrangeTemp = element(by.xpath("//input[@placeholder='Enter Sequence 1']"));
    var enterSeq2ArrangeTemp = element(by.xpath("//input[@placeholder='Enter Sequence 2']"));
    var addSequenceButton = element(by.xpath("//button[contains(text(),'Add Sequence')]"));
    var enterSeq3ArrangeTemp = element(by.xpath("//input[@placeholder='Enter Sequence 3']"));
    var enterSeq4ArrangeTemp = element(by.xpath("//input[@placeholder='Enter Sequence 4']"));
    var rating = element(by.xpath("(//div[@class='ng-star-inserted'])[2]"));

    var searchquestions = element(by.xpath("(//input[@placeholder='Search by question title'])[1]"));
    var clickSearchIconInQuesion = element(by.xpath("(//i[@id='qb-search-button'])[1]"));
    var verifyCopyIconInQuestion = element(by.xpath("(//i[@class='copy icon'])[1]"));
    var verifyCheckboxInQuestion = element(by.xpath("(//div[@class='header ng-binding']//following::input)[1]"));
    var selectReOrderingTemplate = element(by.xpath("//a[contains(text(),'Reordering words')]/following::div[2]"));
    var enterSentences = element(by.xpath("//textarea[@placeholder='Enter sentence(s)']"));

    var reOrderingCheck1 = element(by.xpath("//span[contains(text(),'Bangalore')]"));
    var reOrderingCheck2 = element(by.xpath("//span[contains(text(),'India')]"));
    var reOrderingBackSpace = element(by.xpath("//img[@id='reorder-backspace']"));

    var untitledCollection = element(by.xpath("//label[@class='content-title popup-item ng-binding ng-scope']"));
    var deleteSetAnsewerOptions1 = element(by.xpath("(//i[@class='trash large icon delete-icon'])[3]"));
    var deleteSetAnsewerOptions2 = element(by.xpath("(//i[@class='trash large icon delete-icon'])[4]"));
    var reload = element(by.xpath("//span[@class='reload-stage']"));
    var headerCourse1 = element(by.xpath("//*[contains(@class,'textbooks')]"));

    //RichTextEditors

    var btnBoldBeforeClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__bold cke_button_off')])[1]"));
    var btnBoldAfterClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__bold cke_button_on')])[1]"));
    var btnItalicBeforeClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__italic cke_button_off')])[1]"));
    var btnItalicAfterClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__italic cke_button_on')])[1]"))
    var btnUnderLineBeforeClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__underline cke_button_off')])[1]"));
    var btnUnderLineAfterClick = element(by.xpath("(//a[contains(@class,'cke_button cke_button__underline cke_button_on')])[1]"));
    var btnSize = element(by.xpath("(//span[contains(@id,'cke_49_text')])"));
    var btnSizeTen = element(by.xpath("//a[@id='cke_382_option']//parent::li"));
    var btnSizeTwentyEight = element(by.xpath("//a[@id='cke_391_option']//parent::li"));
    var ddSelectKeyboard = element(by.model('keyboardType'));
    var ddTypeCustom = element(by.xpath("//div[contains(@class,'menu transition visible')]//following::div[2]"));
    var inputAddKeys = element(by.xpath("//input[@placeholder='Add keys seprated by comma(,).']"));
    var fieldAnswerInFITB = element.all(by.xpath("//input[@class='ans-field']"));
    var btnBack = element(by.xpath("//button[@id='back-button']"));
    var btnResume = element(by.xpath("//div[contains(@class,'ui ok blue button ng-scope')]"));
    var btnCloseEditor = element(by.xpath("//div[contains(@class,'ui basic cancel button ng-scope')]"));
    var labelEnterTheQuestion = element(by.xpath("//span[contains(text(),'Enter the question')]"));
    var linkActiveItemDraft = element(by.xpath("(//a[contains(@class,'item active')])[1]"));
    var ddSendforreview = element(by.xpath("//div[@class='ui button text-part popup-item']//following::i[2]//parent::div"));
    var sendForReviewInShareViaLink = element(by.xpath("//div[contains(@data-content,'Send for review')]"));
    var linkLimitedSharing = element(by.xpath("//div[contains(text(),'Limited sharing')]"));
    var linkShareViaLink = element(by.xpath("//a[contains(text(),' Shared via link ')]"));
    var resourceInFirstColumn = element(by.xpath("//div[@class='cardImageText center aligned ']"));
    var btnEditDetails = element(by.xpath("//span[contains(text(),'Edit Details')]//parent::a"));
    var labelLicense = element(by.xpath("//label[contains(text(),'LICENSE')]//following::div"));
    var linkCredit = element(by.xpath("//div[contains(text(),' About the content ')]//following::i"));
    var labelLicenceTerms = element(by.xpath("(//div[contains(@class,'content-metadeta__text  fnormal')])[1]"));
    var labelMoreDetails = element(by.xpath("(//div[contains(@class,'content-metadeta__text  fnormal')])[2]"));
    var labelCopyRight = element(by.xpath("(//div[contains(@class,'content-metadeta__text  fnormal')])[3]"));
    var iconPreview = element(by.xpath("(//div[@class='ui button text-part popup-item'])[2]"));
    var nextIconInPreviewBox = element(by.xpath("(//a[@class='nav-icon nav-next'])[2]"));
    var btnCloseInPreview = element(by.xpath("//h5[@class='ui right floated basic icon circular button  mouse-pointer']"));
    var ddSelectlanguage = element(by.xpath("//i[@class='dropdown icon']"));
    var labelEnglish = element(by.xpath("(//span[contains(text(),'English')])[1]"));
    var labelMyCourses = element(by.xpath("//h4[contains(text(),'courses')]"));
    var btnSlideNext = element(by.xpath("//button[contains(@class,'slick-next slick-arrow')]"));
    var btnViewAll = element(by.xpath("//button[contains(text(),' View All ')]"));
    var btnPagination = element(by.xpath("//a[contains(@class,'sb-item')]"));
    var imageCard3 = element(by.xpath("//div[@class='cardImageText center aligned ']"));
    var revieDialogClose = element(by.xpath("//span[contains(text(),'Reviewer Suggestions')]//following::i"));
    var clkUploRequestChanges = element(by.xpath("//button[@tabindex='0']"));
    var clkRejectUploadsc = element(by.xpath("//button[@class='sb-btn sb-btn-normal sb-btn-primary']"));
    var clkFeaturedCourseViewAll = element(by.xpath("//span[contains(text(),' courses')]//following::button[1]"));
    var SltLevelQu= element(by.xpath("//label[contains(text(),'TOPIC')]//following::i[1]"));
    var saveAndCreateButton = element(by.xpath("//button[@id='save-question-button']"));
    var resoCard = element(by.xpath("//div[@class='sb--card__meta']"));
    var fullscreenclk = element(by.xpath("//span[contains(text(),'Fullscreen')]"));
    var QuesCard = element(by.xpath("//*[@class='sb--card__meta']"));
    var QuesAnswernextButton = element(by.xpath("//div[contains(text(),'Next')]"));
    var reOrderingLngCheck1 = element(by.xpath("//div[@class='reorder-tabContainer reorder-scroll']//following::span[1]"));
    var reOrderingLngCheck2 = element(by.xpath("//div[@class='reorder-tabContainer reorder-scroll']//following::span[2]"));
    var reOrderingLngCheck3 = element(by.xpath("//div[@class='reorder-tabContainer reorder-scroll']//following::span[3]"));







    return {
        ddSelectlanguage,
        labelEnglish,
        labelMyCourses,
        btnSlideNext,
        btnViewAll,
        btnPagination,
        btnBoldBeforeClick,
        btnBoldAfterClick,
        btnItalicBeforeClick,
        btnItalicAfterClick,
        btnUnderLineBeforeClick,
        btnUnderLineAfterClick,
        btnSize,
        btnSizeTen,
        btnSizeTwentyEight,
        ddSelectKeyboard,
        ddTypeCustom,
        inputAddKeys,
        fieldAnswerInFITB,
        btnBack,
        btnResume,
        btnCloseEditor,
        labelEnterTheQuestion,
        linkActiveItemDraft,
        ddSendforreview,
        linkLimitedSharing,
        linkShareViaLink,
        resourceInFirstColumn,
        btnEditDetails,
        labelLicense,
        linkCredit,
        labelLicenceTerms,
        labelMoreDetails,
        labelCopyRight,
        sendForReviewInShareViaLink,





        reload,
        headerCourse1,
        untitledCollection,
        deleteSetAnsewerOptions1,
        deleteSetAnsewerOptions2,
        clickresource,
        resourceName,
        startCreating,
        addShape,
        addTriangle,
        clicksave,
        closebutton,
        addslide,
        addImage,
        selectImg,
        addHotSpot,
        addscribblepad,
        addActivity,
        sendForReview,
        clickAppIcon,
        selectAppIcon,
        clickYear,
        addbuttonActivity,
        save,
        selectButton,
        searchActivity,
        createQuestion,
        selectMTFTemplate,
        writeQuestion,
        enterTheQuestion,
        enterAnswer1,
        enterAnswer2,
        enterAnswer3,
        enterAnswer4,
        enterAnswer5,
        enterAnswer6,
        previewRefreshIcon,
        createQueNext,
        boardInQuestion,
        selectCBSEQue,
        mediumInQuestion,
        selectEnglishFITB,
        gradeLevelInQuestion,
        selectClass4,
        subjectInQuestion,
        selectMathematics,
        maxScore,
        levelInQuestion,
        selectEasy,
        learningOutcome,
        selectLearningOutcome,
        addText,
        addTextTextArea,
        addTextDoneButton,
        imageCard,
        selectImage,
        addHotspot,
        saveIcon,
        closeButtonMsg,
        clickActionTabInResourceCreation,
        clickPlusIconInActionTab,
        clickActionType,
        selectActionTypeHide,
        clickActionTarget,
        selectActionTarget,
        selectActionAddButton,
        preview,
        iFrame,
        nextIcon,
        addSlide,
        searchUploadImage,
        clickImageSearch,
        checkContentIcon,
        addShapes,
        addTriangleShape,
        actionsOptionSideBar,
        showActionFormBtn,
        actionTypeDropdown,
        showHide,
        actionTargetDropdown,
        actionTargetDropdownFirstItem,
        addActionbtn,
        propertiesSection,
        clickNextSlide,
        linkTo,
        addAudio,
        clickAllAudio,
        selectAudio_AllAudio,
        audio,
        playPause,
        hide,
        previewIcon,
        previewPopup,
        previewPopupFrame,
        previewNextBtn,
        contentPreiviewCompleteScreen,
        previewPopupReplayBtn,
        showPlayerControl,
        teacherInstruction,
        backgroundColor,
        redColor,
        addQuestionSet,
        pickQuestion,
        pickQuestionCheckBox,
        pickQueNextButton,
        questionSetTitle,
        questionSetAddButton,
        collaboratorIcon,
        donebutton1,
        closeEditor1,
        allElements,
        addCollaborator,
        collaborationSection,
        searchForReview,
        searchIconUpForReview,
        courseNameInCollaboration,
        editIcon1,
        submittedForReview,
        courseNameInReviewSubmission,
        searchCollaboratorField,
        suggestionCollaboratorList,
        collaboratorTostrMsg,
        manageCollaborator,
        removeCollaborator,
        clickDoneButton,
        closeEditor2,
        reviewSubmission,
        upForReview,
        contentupload,
        clickRequestChanges,
        rejectReason1,
        rejectReason2,
        rejectReason3,
        reviewComment,
        requestChangesButton,
        coursename,
        reviewerSuggestion,
        reviewerSuggestionTitle,
        closeLinkIcon,
        closePageIcon,
        drafts,
        untitledUnitName,
        newchild,
        searchInput,
        searchIcon,
        cardLabel,
        searchedContentForUpload,
        headerLibrary,
        selectFITBTemplate,
        clickBoard,
        selectBoard,
        clickMedium,
        selectMedium,
        clickclass,
        SelectClass,
        clicksubject,
        selectSubject,
        allMyContent,
        messageBox,
        yesButtonPopup,
        deleteButton,
        firstCourseCardContentName,
        Published,
        validateScoreResult,
        ScoreLabel,
        justCompletedMsg,
        verifyRatingSlideMsg,
        submitRating,
        giveRatings,
        clickNext,
        verifyCorrect,
        clickTryAgainButton,
        verifyInCorrect,
        clickNextButtonMCQ,
        clickFITBAnsTxtBox,
        courseCard,
        searchIcon,
        filterSearch,
        headerLibrary,
        popupPublishButton,
        checkBox,
        publishResource,
        searchedContentForPublish,
        searchIconUpForReview,
        searchForReview,
        upForReview,
        saveButton,
        headerCourse,
        searchInput,
        searchIcon,
        resourceName,
        startCreating,
        workSpace,
        iFrame,
        addQuestionSet,
        createQuestion,
        selectFITBTemplate,
        writeQuestion,
      //  enterTheQuestion,
        clickLargeImageIcon,
        checkAppIcon,
        selectAppIcon,
        verifyLargeImageAdded,
        clickAudioIcon,
        verifyAudioAdded,
        clickAllAudioTab,
        selectAudio,
        clickMathTextIcon,
        selectMathText,
        selectedMathTextAdd,
        verifyFormualaAdded,
        previewRefreshIcon,
        createQueNext,
        enterTheTitleQues,
        boardInQuestion,
        selectCBSEQue,
        mediumInQuestion,
        selectEnglishFITB,
        gradeLevelInQuestion,
        selectClass4,
        subjectInQuestion,
        selectMathematics,
        maxScore,
        levelInQuestion,
        selectEasy,
        learningOutcome,
        selectLearningOutcome,
        submitButtonInQuestion,
        nextButton,
        questionSetTitle,
        addbutton,
        saveIcon,
        closeButtonMsg,
        sendForReview,
        clickAppIcon,
        checkAppIcon,
        yearOfCreation,
        reviewSubmission,
        coursename,
        selectMCQTemplate,
        inputAnswer1,
        markAsRightAnswer,
        inputAnswer2,
        addAnswerInQuestionSet,
        deleteSetAnsewerOptions,
        closePage,
        firstBook,
        clickMcQFirstAnswer,
        courseName,
        boardInResource,
        mediumInResource,
        gradeLevelInResource,
        subjectInResource,
        resourceTypeInResource,
        firstItemInBoardInResource,
        firstItemInMediumInResource,
        firstItemInGradeLevelInResource,
        firstItemInSubjectInResource,
        firstItemInResourceTypeInResource,
        firstQuestionName,
        searchTextInQuestion,
     //   searchTextInQuestion,
        createdResorce,
        checkBox1InSelectQuestion,
        checkBox2InSelectQuestion,
        checkBox3InSelectQuestion,
        checkBox4InSelectQuestion,
        closePage,
        searchIconInQuestion,
        arrangeTemplate,
        enterSeq1ArrangeTemp,
        enterSeq2ArrangeTemp,
        addSequenceButton,
        enterSeq3ArrangeTemp,
        enterSeq4ArrangeTemp,
        rating,
        searchquestions,
        clickSearchIconInQuesion,
        verifyCopyIconInQuestion,
        verifyCheckboxInQuestion,
        selectReOrderingTemplate,
        enterSentences,

        reOrderingCheck1,
        reOrderingCheck2,
        reOrderingBackSpace,
        select,
        courseCard1,
        linkCourse,
        fieldName,
        fieldDescription,
        fieldTag,
        btnAddResource,
        fieldSearch,
        checkBoxInCourse,
        btnProceed,
        btnContributors,
        contributorsToolTip,
        fieldInputDesc,
        checkBoxInCourse1,
        checkBoxInCourse2,
        checkBoxInCourse3,
        btnSave,
        ddYear,
        label2020,
        iconPreview,
        nextIconInPreviewBox,
        btnCloseInPreview,
        linkCourseInHeader,
        labelRajasthan,
        ddBoard,
        btnSaveAndCreate,
        btnCloseQuestion,
        toggleShowImmediateFeedback,
        toggleShuffleQuestions,
        inputTotalScore,
        toggleAfterShuffled,
        toggleAfterShowImmediateFDBK,
        btnCopySlide,
        labelNumberOne,
        labelNumberTwo,
        imageCard3,
        revieDialogClose,
        clkUploRequestChanges,
        clkRejectUploadsc,
        clkFeaturedCourseViewAll,
        SltLevelQu,
        saveAndCreateButton,
        resoCard,
        fullscreenclk,
        QuesCard,
        QuesAnswernextButton,
        reOrderingLngCheck1,
        reOrderingLngCheck2,
        reOrderingLngCheck3
    }



};
module.exports = {
    resource
}   