function add(a, b) {
  return a + b;
}
function min(a, b) {
  return a - b;
}
function should(result) {
  return {
    equal: function(expect) {
      if(result !== expect) {
        throw new Error('不通过');
      }
    }
  }
}
function it(desc, fn) {
  try {
    fn();
    console.log(`√: ${desc} pass`)
  }catch {
    console.log(`×: ${desc} falt`)
  }
}
it('test add', () => {
  should(add(7, 3)).equal(10);
})
it('test min', () => {
  should(min(7, 3)).equal(4);
})
it('test mixin', () => {
  let obj = mixin({ a: 1 }, { b: 2})
  should(obj).equal({a: 1, b: 2})
})