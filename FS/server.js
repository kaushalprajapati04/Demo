
// import fs module

// const fs = require("fs");

// const read = (err, data)=>{
//     if(err) throw err
//     console.log(data)
// } 

// fs.readFile('./log.txt', 'utf-8', read)

// console.log("first")

// fs.readFile('./log.txt', 'utf-8', (err, data)=>{
//     if(err) throw err
//     console.log(data)
// })

// const data = fs.readFileSync('./log.txt', 'utf-8');
// console.log(data)

// write file

// const data = "this is a new data"

// fs.writeFile('./output.txt', data, (err)=>{
//     if(err) throw err
//     console.log("file write success")
// })

// fs.appendFile('./output.txt', "\nthis is new text", (err)=>{
//     if(err) throw err;
//     console.log("text is added")
// })

// fs.unlinkSyns('./output.txt') // output.txt remove


// console.log("end")

// asyns
// readFile
// writeFile
// appendFile
// unlinkFile

// syns
// readFileSync
// writeFileSync
// appendFileSync
// unlinkFileSync

//task
// readlogFile()
// writelogFile("new log data")
// appendlogFile(" this is appended log data")
// deletelogFile() 

// absolute path
// const absolutePath = path.rersolve('./log.txt')

// console.log(absolutePath)
// console.log(_dirname)
// console.log(path.basename('./log/log.txt')) //filename - log
// console.log(path.extname('./log/log.txt')) //file - .txt

// const joinPath = path.join(_dirname, "log", "log.txt");
// 

// Api

const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.url)
    console.log(req.method)

    // res.end("hello from hp")
    res.write(200, {"content-type": "text/html"})
    res.write("<h1> welcome </h1>") 
})

server.listen(3000,()=>{

})