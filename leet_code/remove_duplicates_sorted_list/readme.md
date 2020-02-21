sortedArr [1,1,2] 3
return length 2

- 一次遍历， ？
  res []  空间复杂度 O(1)
  for
  排好序 后面的项一定会大于或等于前面的项
  等于就要原地删除
  res length
  抽象， 数理逻辑
- 动图
  两个指针 per cur
  cur一直在往前面跑 一次循环的每一项遍历
  pre 后面追
  pre cur arr 前一个 后一个
  不等于是pre + 1 
  相等时 pre不走， 会慢下来
  如果cur pre不一样， 那么pre+1 值等于cur
  牛， 从头到尾都是排好序的不重复数
  每个位置放什么数？
  pre 指针 没有跟上cur的速度时，表示有重复
  pre 跟cur之间 n个空位 
  pre + 1 删除， 把当前cur的值交给 pre

- 快慢指针
  1. 一次循环 cur一直++ 一直跑
  2. cur跟pre arr[] 不等于时 pre++
   相等时 pre不动
  3. cur 再走的时候， 继续比较
    新的cur跟旧的pre
    不等时，pre++ 并且cur值给新pre
    把因为之前重复空出来的位置 给填上
  4. cur>length