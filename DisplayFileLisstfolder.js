const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname , "files")
const filePath = `${dirPath}/hello.txt`
console.warn(filePath)
fs.writeFileSync(`${dirPath}/hello.txt , "hello "`)

for( i = 0; i< 5 ; i++ ){
    fs.writeFileSync( dirPath+"/hello"+i+".txt", "This is hello file")
}

fs.readdir(dirPath, (err, files)=>{
// console.log(files , 'my files')
files.forEach((item)=>{
console.log(item)
})
})



// To add some thing
fs.appendFile(filePath , " my name is shahzaib", (err)=>{
  
    if(!err)console.log("Updated true")

})

// To rename of file 
fs.rename(filePath, `${dirPath}/Details.txt`, (err)=>{
if (!err)console.log("updateFile Name True")
})

//TO delete the file 
fs.unlinkSync(`${dirPath}/Details.txt`)