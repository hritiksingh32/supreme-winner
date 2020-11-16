var XLSX = require('xlsx');
const csvjson = require('csvjson');
const readFile = require('fs').readFile;
const { Parser } = require('json2csv');
const ObjectsToCsv = require('objects-to-csv');
var fs = require('fs');
var {resolve, join} = require('path');

module.exports = {
    readLoginDataFromExcelFile : function(filePath,sheetIndex,RoleName) {
        var workbook = XLSX.readFile(filePath);
        var sheet_name_list = workbook.SheetNames;
        var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[sheetIndex]]);
        data = data.filter(item => 
        {
        return item.Role === RoleName;
        });
        //return data[0]['Password'];
        //return data[0]['Username'];
        return data;
    },
    readParticularDataFromExcelFile : function(filePath,sheetIndex) {
        var workbook = XLSX.readFile(filePath);
        var sheet_name_list = workbook.SheetNames;
        var data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[sheetIndex]]);
        data = data.filter(item => 
        {
        return item;
        });
        //return data[0]['Password'];
        //return data[0]['Username'];
        return data;
    },
    writeDatatoExcelFile : function(excelPath,sheetname,data,rowindex,colname) {
        var wb = XLSX.readFile(excelPath);
        // var sheetNames= wb.SheetNames;
        var ws = wb.Sheets[sheetname]; 
        var rowIndex = rowindex;
        XLSX.utils.sheet_add_json(ws, [{colname:data}], {skipHeader: true, origin: colname+rowIndex});
        XLSX.writeFile(wb, excelPath);
    },
    // readParticularDataFromCSVFile : function(filePath) {
      
    //     Papa.parse(filePath.files[0], {
    //         complete: function(results) {
    //             console.log(results);
    //         }
    //     });


readParticularDataFromCSVFile : function(FilePath,rowno,columnHeaderName) {
      
    const csvFilePath=FilePath
    const csv=require('csvtojson')
    csv().fromFile(csvFilePath).then((jsonObj)=>{
    //    console.log(jsonObj);
    //   return jsonObj;
      
    data = jsonObj.map(item => 
        {
           // console.log(item);
        
          
    return item;
       
        });
        //return data[0]['Password'];
        //return data[0]['Username'];
        var finaldata=data[rowno][columnHeaderName];
    // console.log(data[rowno][columnHeaderName]);
     //console.log(data);
  //  return data[rowno][columnHeaderName];
   // return data;
   console.log(finaldata);
      return finaldata;
    })
       },


       readLatestDownlaodedFileName : function(filePath) {
  //  var file;
fs.readdir(resolve(filePath),function(err, list){
    list.forEach(function(file){
     //   console.log(list);
      //  console.log(file);
     //  console.log(file);
      totalSize=list.length;
    // console.log(list.length);
    // console.log(list[totalSize-1]);
       stats = fs.statSync(resolve(join(filePath, file)));
    //    console.log(stats.mtime);
    //    console.log(stats.ctime);
    //list[totalSize-1];
    console.log(file)
    return file;
   
    })
    return list;

   // return name_var;
   // console.log(list[totalSize-1]);
   
})

    },


       
       writeDataInToCSVlFile : function(fileName, index, header, value) {
        readFile(fileName, 'utf-8', (err, fileContent) => {
            if(err) {
                console.log(err); // Do something to handle the error or just throw it
                throw new Error(err);
            }
        
            let jsonObj = csvjson.toObject(fileContent);
            
            jsonObj[index][header] = value;
            console.log(jsonObj);
            var fields = Object.keys(jsonObj[0]);
            const json2csvParser = new Parser({ fields });
            const csv = json2csvParser.parse(jsonObj);
            console.log(csv);
            const csv_file = new ObjectsToCsv(jsonObj);
            csv_file.toDisk(fileName);
           
        });


       },
       
};
    