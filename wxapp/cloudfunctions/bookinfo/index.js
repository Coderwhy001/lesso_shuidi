var cloud = require('wx-server-sdk'); //云服务器

var rp = require('request-promise');  // npm 向API发出请求

cloud.init();

exports.main = async(event,context) => {
  console.log(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=3f13f40d3f30e7bd334c73080f5551ca`);
  var res = rp(`http://feedback.api.juhe.cn/ISBN?sub=${event.isbn}&key=3f13f40d3f30e7bd334c73080f5551ca`).then(html =>{
    return html;
  })
  return res;
}