const twosum = (nums,target) => {
    let arr = [];
    for(let i = 0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length-1;j++){
            if(nums[i]+nums[j] == target){
                arr = [i,j];
                break;
            }
        }
    }
    return arr;
}
console.log(twosum([2,7,11,15],9));//双重循环，时间复杂度更大