const EasyDate = require('../../src/EasyDate')
const should = require('should')
describe('想要测试Date合格', () => {
  let date = new EasyDate();
  it("should create instance", () => {
    // date.getFullYear()
    let some = date.toDate();
    let today = new Date();
    should(some.getFullYear()).equal(today.getFullYear)
  })
})