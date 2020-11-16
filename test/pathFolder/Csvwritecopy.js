const fs = require('fs');
 const {resolve, join} = require('path');
 var list2 = 'test';
 function readLatestDownlaodedFileName(filePath)
{
     //readLatestDownlaodedFileName : function(filePath) {

          fs.readdir(resolve(filePath),function(err, list){
              list.forEach(function(file){
                 // console.log(list);
                //  console.log(file.);
               //  console.log(file);
                totalSize=list.length;
              // console.log(list.length);
              // console.log(list[totalSize-1]);
                 stats = fs.statSync(resolve(join(filePath, file)));
              //    console.log(stats.mtime);
              //    console.log(stats.ctime);
              })
           //   console.log(list);
              list2=list;

            //  window.list2 = list;
              return list;
          
          })
              
}

var returnValue = readLatestDownlaodedFileName('/home/qualitrix/Downloads');
//console.log(returnValue[2]);
console.log(returnValue);
