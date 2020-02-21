// 有没有可能少一重循环
const twoSum = (nums,target) =>{
    // let map = {};
    let map = new Map();
    let res = [];
    // nums.forEach((e,j) => map[e] = j);
    nums.forEach((e,j) => map.set(e,j));
    for(let i=0;i<nums.length;i++){
        let j = map.get(target-nums[i]);
        if(j && j!=i){
            res = [i,j]
        }
    }
    return res;
}
console.log(twoSum([2,7,11,15],9));