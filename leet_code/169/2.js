var majorityElement = function(nums) {
  let a = nums.length
  let arr =nums.sort();
  if(nums.length % 2===0) {
    return nums[a/2]
  } else {
    return nums[(a-1)/2]
  }
};
console.log(majorityElement([1]));