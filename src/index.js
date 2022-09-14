const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName, fileContent,(err,data)=>{
        console.log("file is created")   
	})
}
const myFileReader = async (fileName) => {
	const data = fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            return err;
        }
        return data
    })
    data.then((fileData)=>{
        console.log(fileData)
    })
}

const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile(fileName,fileContent,(err,data)=>{
		console.log("file updated")
	})
}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName,(err,data)=>{
		console.log("file deleted")
	})
} 
myFileWriter("file.txt","this is my file content")
myFileReader("file.txt")
// myFileUpdater("file.txt"," file content updated")
// myFileDeleter("file.txt")
module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }