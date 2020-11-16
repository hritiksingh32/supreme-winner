const { element } = require("protractor");


var upload = () => {
    
        var clickuploadContent = element(by.xpath("//span[contains(text(),'Upload Content')]"));
        var browseButton = element(by.xpath("//input[@type='file']"));
        var savebutton=element(by.xpath("//span[@class='label-icon-box-text save-button-text']"));
        var closebutton=element(by.xpath("//button[contains(text(),'Close')]"));
        var closebuttonupload=element(by.id('closeButton'));
        var allmycontent=element(by.xpath("//a[@href='/workspace/content/allcontent/1']"));
        var allmycont1=element(by.xpath("//div[@class='UpReviewSubHeader']"));
        var uploadcontIcon=element(by.xpath("//div[@data-content='Upload Content']"));
        var sendforRev=element(by.xpath("//div[@class='ui button text-part popup-item']//i[@class='send icon']"));
        var enterUrl = element(by.model("contentURL"));
        var uploadButton = element(by.xpath("//button[contains(text(),'Upload')]"));
        var clkEditDetails=element(by.xpath("//*[contains(text(),'Edit Details')]"));
        var selectOne = element(by.id("_selectPrimaryCategory"));
        var learningResource = element(by.xpath("//select[@id='_selectPrimaryCategory']/option[5]"));
        return {
            clickuploadContent,
            browseButton,
            savebutton,
            closebutton,
            closebuttonupload,
            allmycontent,
            allmycont1,
            uploadcontIcon,
            sendforRev,
            enterUrl,
            uploadButton,
            clkEditDetails,
            selectOne,
            learningResource
        };
    
    };
    module.exports = {
        upload
    }