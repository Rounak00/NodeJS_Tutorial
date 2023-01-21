// (function(exports,require,module,__dirname,__filename){
//   var age=20;
//   const col=require("cli-color")
// })();
// console.log(age) //undefined

//NPM modules (all files are callled module)
const col=require("cli-color")
console.log(col.red("Hello Sexy"));

//Local Module
const auth=require("./auth.js")
auth.reg("Rounak");
auth.login("Rounak");

//NodeJS Core Modules
 // --->  HTMLOutputElement, OS, PATH, stream etc
const path=require("path");

console.log("file is : ", path.dirname(__filename)) // print current folder path4
console.log("file is : ", path.basename(__filename)) //filename
console.log("file's extention is : ", path.extname(__filename)) //extention
console.log("Parse is : ", path.parse(__filename)) // return a obj of   base,ext,name,dir,root
console.log("Join :",path.join(__dirname,"order","app.js"))// directory+folder+file


const file=require('fs');

file.mkdir(path.join("__dirname",'/test'),(err)=>{ 
    if(err){
        console.log("somthing went wrong"); 
        return;
    } 
    console.log("folder created");
}) //make directorry/create folder where first is path and second is error

file.writeFile(path.join("__dirname","/test","test.js"),"Hello Node",(err)=>{
    if(err){
        console.log("somthing went wrong"); 
        file.appendFile(path.join("__dirname","/test","test.js"),"more data",(err)=>{
            if(err) throw err; return;
            console.log("More data added");
        }) //edit file bcz writefile remove everything and then add again it will apend it
        
    } 
    console.log("folder created");
}) //for making file directoryand selectfile+ file topic + error

file.readFile (path.join("__dirname","/test","test.js"),(err,data)=>{
    if(err){throw err; return;}
    const content =Buffer.from(data); // bcz data come in binary so first take binary data clearyly then convert to string
    console.log(content.toString());
})//read file sync is until data read other works stops
/*
for buffer we can do this also 
file.readFile (path.join("__dirname","/test","test.js"),"utf-8",(err,data))
*/

const os=require("os");
console.log(os.type()) //os type
console.log(os.arch()) // return 32 or 62 bit cpu
console.log(os.freemem())// free memory
console.log(os.totalmem())//total memory


const emitter=require("events") // in registration system we send a varification, store in db those typeof things done
const myemitter=new emitter()


myemitter.on('eventname',(data)=>{
    console.log(data);
})
myemitter.emit("eventname",{name:"rounak"});





const http=require("http");
const app=http.createServer((req,res)=>{ 
   res.writeHead(200,{
    "content-type":"text/html"//if we write text/plain then we saw our html there
   }) 
    
   res.end("Welcome"); // we can send html here
   /*we can also check if req.url ===/ then its home basically req.url retun / or /abot those things */
})
app.listen(3000,()=>{
    console.log("Listening on port: 3000")
})