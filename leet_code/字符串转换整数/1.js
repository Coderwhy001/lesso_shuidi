var myAtoi = function(str) {
  let number = parseInt(str, 10)
  if (isNaN(number)) {
    return 0
  }
  if (number < Math.pow(-2, 31) || number > Math.pow(2, 31)-1 ) {
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31)-1
  }
  return number
};