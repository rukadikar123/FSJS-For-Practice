import { error } from 'console'
import fs from 'fs'

// fs.writeFile('hello.txt',"hello world", (err)=>{
//     if (err) throw err
//     else console.log("done");
    
// })

// fs.appendFile('hello.txt'," hi from siddharth", (err)=>{
//     if (err) throw err
//     else console.log("done");
    
// })

// fs.rename("hello.txt", "hey.txt", (err)=>{
//     if(err) console.error(err)
//     else console.log("Done");
    
    
// })

// fs.copyFile('hey.txt', './copy2/copy.txt',  (err)=>{
//     if(err) console.error("error:",err);
//     else console.log("done");
    
    
// })

// fs.unlink("hey.txt", (err)=>{
//     if(err) console.error(err);
//     else console.log("done");
    
    
// })

// fs.rmdir('./copy', { recursive:true}, (err)=>{
//     if(err) console.error(err);
//     else console.log("done");
// })

fs.readFile("./readfile.txt", 'utf8',  (err, data)=>{
    if(err) console.error(err);
    else console.log(data);
    
    
})