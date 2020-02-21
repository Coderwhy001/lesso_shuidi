[1,2,3,1]
? 不能相邻的偷
最多的钱？
4
1 如果偷
2 不能偷
3 或4
    ABCD  动态规划算法 
选择A   不选择A
CD       BCD
         B  CD
每个位置中最大的值决策是这样的？
i=0 Math.max(,)求两者之中的最大值
nums [1,2,3,1]
dp[i]=Math.max(nums[i]+dp[i-2],dp[i-1])

ABCDEFG