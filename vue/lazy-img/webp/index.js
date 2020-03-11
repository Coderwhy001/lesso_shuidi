// const webp = require('webp-converter');
// webp.cwebp("test.jpg", "test.webp", "-q 80", 
// function(status, error) {
//     console.log(status, error)
// })

const lqip = require('lqip'); 
const file = './in.png';
lqip
  .base64(file)
  .then(res => {
    console.log(res);
  });