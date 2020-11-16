var ConfigurePath = () => {

//var excelSheetPath ='./test/testdatafiles/testDataSheetPreprod.xls';
var excelSheetPath ='./test/testdatafiles/testDataStaging.xls';
  // var excelSheetPath ='./test/testdatafiles/testDataSheetProd.xls';

 

   //var AppURL='https://diksha.gov.in';
//  var AppURL='https://preprod.ntp.net.in';
var AppURL='https://staging.ntp.net.in';
//  var AppURL = 'https://staging.sunbirded.org';

    return {
        excelSheetPath,
        AppURL
    };
 
};
module.exports = {
    ConfigurePath,
}
