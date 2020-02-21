var removeduplicates = function(nums){
    const size = nums.length; //提前计算原数组的长度
    let slowP = 0;//慢指针
    for(let fastP=0;fastP<size;fastP++){ //快指针
        // console.log(nums[fastP]);
        if(nums[fastP]!==nums[slowP]) //从同一个位置0开始
        {
            slowP++;//不一样
            // slowP 挪窝了，新的位置要确定新的数，cur 指向的数
            nums[slowP]==nums[fastP];//设立每个位置，不重复的数 确立了地位
        }
    }
     return slowP +1;//slowp停下来的地方
}
console.log(removeduplicates([1,1,2]))