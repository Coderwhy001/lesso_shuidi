var majorityElement = function(nums) {
  let count = 1;
  let maj = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (count == 0) {
      maj = nums[i];
    }
    if (maj == nums[i])
      count++;
    else {
      count--;
    }
  }
  return maj;
};
console.log(majorityElement([1,1,1,2,2,2,2,3]));