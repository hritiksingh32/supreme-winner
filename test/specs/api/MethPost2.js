
//const process = require('process');
var request = require('request');
const { browser } = require('protractor');
describe("Dynamic form handling in Protractor",function(){
  browser.ignoreSynchronization = true; // for non-angular websites
  it("api Testing in protractor",function(done){
  var param1 = "review";
  var param2 = "resource";
  var param3 = "tn_k-12_5";
  var param4 = "01269878797503692810";  
  var param5 = "content";
  var appUrl = 'https://staging.ntp.net.in';
  var apiKey = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIzOTNlZDg5MGUxNTM0MzhlYjQ4NmIxNTE3NWZkOGQyMCJ9.KN7QOWgc_ye05YrVhrgpJSOToLJj4VK59CV782thNB8';
var options = {
  'method': 'POST',
  'url': appUrl + '/api/data/v1/form/read',
  'headers': {
    'Content-Type': 'application/json',
    'Authorization': apiKey
  },
  body: JSON.stringify({"request":{"action":param1,"subType":param2,"framework":param3,"rootOrgId":param4,"type":param5}})

};

request(options, function (error, response) {
  if (error) throw new Error(error);
  
  let results = JSON.parse(response.body);
  console.log("successfully got d response");
  let tempData = (results.result.form.data);
  //console.log(tempData);
  let data2 = (tempData.fields);
  console.log(data2);

  var count = Object.keys(data2).length;
  console.log(count);
 
  var output = data2.filter((item) => item.required );
  console.log(output);
  var labelArray =[];
  var inputTypeArray = [];
  var obj = {};
  var xPath =[];
  var dropdownValueXPath=[];

  for(key in output) {
    if(output.hasOwnProperty(key)) {
        var valLabel = output[key].label;
        var varInputType = output[key].inputType;
        
        labelArray.push(valLabel);
        inputTypeArray.push(varInputType);

        // console.log(valLabel);
        // console.log(varInputType);
       
    }
}
for(var i = 0; i < labelArray.length; i++){ 
  obj[labelArray[i]] = inputTypeArray[i]; 
} 

// Printing object 
for (var key of Object.keys(obj)) {   
 console.log(key + " => " + obj[key] )
 

  // For Generating Dynamic Xpaths
  
  var prefiXPath = "//label[contains(text(),'";
  var suffiXPath = "')]/..//input";
  var fetchLabel = key;
  // var multiSelectClick = "')]";
  var suffiXPathDropdown = "')]/following-sibling::*";
  var suffiXpathSibling = "')]/following-sibling::*/..//*[contains(@class,'item')][1]";
  var xPathForDropDownValue = prefiXPath + fetchLabel + suffiXpathSibling;
  // var suffixMultiSelectXpath = "')]/following::i[1]";

  var prefixTopicSelect = "//label[contains(.,'";
  var suffixTopicSelect = "Topics')]/..//topic-selector/..//input";
  // var topicSltDoneButton = "//a[.='Done']";

  if (obj[key] === ("text")) {
    var finalXPath = prefiXPath + fetchLabel + suffiXPath;
    
    xPath.push(finalXPath);
    dropdownValueXPath.push(xPathForDropDownValue);

    console.log(finalXPath);
    console.log(xPathForDropDownValue)
    
					

  }
  if (obj[key] === ("select")) {
    var Finalxpath = prefiXPath + fetchLabel + suffiXPathDropdown;

    xPath.push(Finalxpath);
    dropdownValueXPath.push(xPathForDropDownValue);
    console.log(Finalxpath);
    console.log(xPathForDropDownValue)

  }

  if (obj[key] === ("multiSelect")) {
    var Finalxpath = prefiXPath + fetchLabel + suffiXPathDropdown;

    xPath.push(Finalxpath);
    dropdownValueXPath.push(xPathForDropDownValue);

    console.log(Finalxpath);
    console.log(xPathForDropDownValue)

  }

  if (obj[key] === ("file")) {
    var Finalxpath = prefiXPath + fetchLabel;

    xPath.push(Finalxpath);
    dropdownValueXPath.push(xPathForDropDownValue);

    console.log(Finalxpath);
    console.log(xPathForDropDownValue)

  }
  if (obj[key] === ("textarea")) {
    var Finalxpath = prefiXPath + fetchLabel + suffiXPathDropdown;

    xPath.push(Finalxpath);
    dropdownValueXPath.push(xPathForDropDownValue);

    console.log(Finalxpath);
    console.log(xPathForDropDownValue)

  }

  if (obj[key] === ("keywordsuggestion")) {
    var Finalxpath = prefiXPath + fetchLabel + suffiXPath;

    xPath.push(Finalxpath);
    dropdownValueXPath.push(xPathForDropDownValue);

    console.log(Finalxpath);
    console.log(xPathForDropDownValue)

  }
  if (obj[key] === ("dialcode")) {
    var Finalxpath = prefiXPath + fetchLabel + suffiXPath;

    xPath.push(Finalxpath);
    dropdownValueXPath.push(xPathForDropDownValue);

    console.log(Finalxpath);
    console.log(xPathForDropDownValue)

  }

  if (obj[key] === ("topicselector")) {
    var Finalxpath = prefixTopicSelect + suffixTopicSelect;

    xPath.push(Finalxpath);
    dropdownValueXPath.push(xPathForDropDownValue);

    console.log(Finalxpath);
    console.log(xPathForDropDownValue)

  }
  
  if (obj[key] === ("number")) {
    var Finalxpath = prefiXPath + fetchLabel + suffiXPath;

    xPath.push(Finalxpath);
    dropdownValueXPath.push(xPathForDropDownValue);

    console.log(Finalxpath);
    console.log(xPathForDropDownValue)
    
   
   

  }
  if (obj[key] === ("licenses")) {
    var Finalxpath = prefiXPath + fetchLabel + suffiXPath;

    xPath.push(Finalxpath);
    dropdownValueXPath.push(xPathForDropDownValue);

    console.log(Finalxpath);
    console.log(xPathForDropDownValue)
   

  }

  // NEED TO ADD THE CONDITION ABOUT ANY OTHER INPUT TYPES
}
    for(var i = 0; i < xPath.length; i++){ 
      console.log(labelArray[i]);
      console.log(inputTypeArray[i]);
      console.log(xPath[i]);
      console.log(dropdownValueXPath[i]);
      switch(inputTypeArray[i]){

      case "text":
  
          if(labelArray[i]===("ORIGINAL AUTHOR"))
					{
            browser.sleep(1000);
            element(by.xpath(xPath[i])).sendKeys("Regional Hindi");
						browser.sleep(1000);
					}else if(labelArray[i]===("Title")){
            browser.sleep(1000);
            element(by.xpath(xPath[i])).sendKeys("A");
						browser.sleep(1000);
            console.log("print Title")
          } 
          else if(labelArray[i]===("Content Type")){
            browser.sleep(1000);
            element(by.xpath(xPath[i])).sendKeys("Content type");
						browser.sleep(1000);
            console.log("Print Content Type")

          } 
					break;
    
      
      case "select":

        if(labelArray[i]===("YEAR"))
        {
          browser.sleep(1000);
          console.log("Select year");
          browser.sleep(1000);
        }else {
          browser.sleep(1000);
          element(by.xpath(xPath[i])).sendKeys("Content type");
          browser.sleep(1000);
          
        }

      break;
        
      case "multiselect":
        browser.sleep(1000);
        element(by.xpath(xPath[i])).click();
        browser.sleep(1000);
        element(by.xpath(dropdownValueXPath[i])).click();
        browser.sleep(1000);
    
      break;

			case "file":
       
      break;

      case "textarea":
        browser.sleep(1000);
        element(by.xpath(xPath[i])).sendKeys("testing");
        browser.sleep(1000);
    
      break;

      case "keywordsuggestion":
    
        browser.sleep(1000);
        element(by.xpath(xPath[i])).sendKeys("keyword");
        browser.sleep(1000);
    
      break;
      case "dialcode":
        browser.sleep(1000);
        element(by.xpath(xPath[i])).sendKeys("643521");
        browser.sleep(1000);
      break;
      case "topicselector":

      // Thread.sleep(1000);
      // driver.findElement(By.xpath(pathValueForTopicSelectortType)).click();
      // Thread.sleep(1000);
      // driver.findElement(By.xpath(TopicSelectorImg)).click();
      // Thread.sleep(1000);
      // driver.findElement(By.xpath(TopicSelectorContent)).click();
      // Thread.sleep(5000);
      // driver.findElement(By.xpath(TopicSelectorDone)).click();

      break;
      case "number":
       
      console.log("prnt number");
      break;

      case "licenses":
       console.log(" prnt licenses");
    
      break;
    
    } 

    
  }
  
  
  expect(response.statusCode).toBe(200)
        done();
  
});



   
  });
});