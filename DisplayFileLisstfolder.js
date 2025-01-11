const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname , "files")
console.warn(dirPath)
// fs.writeFileSync("hello.txt", "This is hello file")

// for( i = 0; i< 5 ; i++ ){
//     fs.writeFileSync( dirPath+"/hello"+i+".txt", "This is hello file")
// }

fs.readdir(dirPath, (err, files)=>{
console.log(files , 'my files')
})