const arr = [5,1,2,4,3];

// 一次快排 能够给一个 
// let provit = 
// k 数组的索引
// 1. provit 找到正确的位置(数组里面的索引)  !!!小算法 partition 分区
// 2. 左边 小于 provit 的数 < provit <  右边 大于 provit 的数 
// 原地交换数组里面两个数据
const quickSort = function(arr) {
  // console.log(arr)
  if (arr.length <= 1) return arr;
  let provit = arr[0];
  let left = [], right = [];
  for (let i = 1; i < arr.length; i ++) {
    if (arr[i] < provit) left.push(arr[i]);
    if (arr[i] > provit) right.push(arr[i]);
  }
  
  return [...(quickSort(left)) , provit, ...(quickSort(right))]
}
console.log(quickSort(arr));