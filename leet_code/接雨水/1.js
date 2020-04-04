// 对于数组中的每个元素，我们找出下雨后水能达到的最高位置，等于两边最大高度的较小值减去当前高度的值。a
var trap = function(height) {
  let area = 0
  for (let i = 0; i < height.length; i++) {
    let maxleft = 0
    let maxright = 0
    for (let j = i; j < height.length; j++) {
      maxright = Math.max(maxright, height[j])
    }
    for (let j = i; j >= 0; j--) {
      maxleft = Math.max(maxleft, height[j])
    }
    area += Math.min(maxleft, maxright) - height[i]
  }
  return area
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))