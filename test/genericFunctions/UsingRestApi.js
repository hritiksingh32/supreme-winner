var YahooWeather = require('/home/qualitrix/Music/Diksha3.2/test/genericFunctions/RestOperations.js');
describe('Using rest api', function () {
    it('Getting test data from rest service', function () {
        browser.get("http://angularjs.org").then(function () {
            var weather = new YahooWeather();
            //Gets weather
            weather.getCityWeather().then(function (result) {
                // Enter text under Name input field
                element(by.model('yourName')).sendKeys(result).then(function () {
                    //Getting welcome text
                    expect(element(by.binding('yourName')).getText()).toEqual('Hello India!');
                });
            });
        });
        //To see the text typed in the TODO field. Not Mandatory
        browser.sleep(5000);
    });
});
