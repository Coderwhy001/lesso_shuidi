// process node 进程全局对象
process.on('message',(str) =>{
    console.log('child ' + str);
    // 子进程 把活给干了后， 偷偷地跑到另外一个cpu上挂载一个进程 把多核能力运用起来 
    process.send('hehe');
    
})
