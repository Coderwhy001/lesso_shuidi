const app = { // app
  // 顺序执行, 栈， 空的， 
  // 每一项是函数
  middlewares: []
}

// use 函数， middlewares push 
app.use = function(fn) {
  // console.log(typeof fn);
  if (typeof fn !== 'function') {
    throw new Error('中间件一定是函数');
  }
  app.middlewares.push(fn);
}
// ctx req + res
// 合并
// 中间件最后会合并成一个大函数 
app.compose = function() {
  function dispath(index) {
    // if (index === app.middlewares.length) return;
    const fn = app.middlewares[index];
    // console.log(fn)
    fn(function next() {
      dispath(index+1)
    })
  }
  dispath(0)
  // for (let i = 0; i < this.middlewares.length;
  //    i++) {
  //   this.middlewares[i]();
  // }
}

module.exports = app;