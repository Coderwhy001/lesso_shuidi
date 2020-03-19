var singleNumber = function(nums) {
  let ans = 0;
  for (let num of nums) {
    ans ^= num
  }
  return ans
 };
console.log(singleNumber([4,1,2,1,2]))