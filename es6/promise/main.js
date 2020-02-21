const fs=require('fs');
// fs.readFile('./d.txt',function(err,res){
//     // console.log(res.toString());
//     if(err){
//         console.log(err);
//         return;
//     }
// })
function readFile(){
    // a
    // b
    // c
    // fs.readFile('./a.txt',function(err,res){
    //     console.log(res.toString());
    // })
    // fs.readFile('./b.txt',function(err,res){
    //     console.log(res.toString());
    // })
    // fs.readFile('./c.txt',function(err,res){
    //     console.log(res.toString());
    const aFile=fs.readFileSync('a.txt');
    console.log(aFile.toString());
    const bFile=fs.readFileSync('b.txt');
    console.log(bFile.toString());
    const cFile=fs.readFileSync('c.txt');
    console.log(cFile.toString());
}
readFile();     