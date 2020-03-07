文件上传是难点 大文件上传和断点续传更是难点中的细节

大文件 上传 size 1M 8M 8份
切片
1. js 在es6 文件对象file node file stream 有所增强
任何文件都是二进制， 分割blob
start， size， offset 
http请求可并发 n个切片并发上传 速度更快， 改善了体验。

- 前端的切片，让http并发带来上传大文件的快感。 
  1. file.slice 完成切片， blob 类型文件切片， js 二进制文件类型的 blob协议 在文件上传到服务器之前就可以提前预览。  

- 服务器端
  如何将这些切片， 合交成一个， 并且能显示原来的图片
  stream 流 
  可读流， 可写流
  chunk 都是一个二进制流文件，
  Promise.all 来包装每个chunk 的写入
  start end fse.createWriteStream 
  每个chunk写入 先创建可读流，再pipe给可写流的过程
  思路： 以源文件作为文件夹的名字，在上传blobs到这个文件夹，并且每个blob 都以文件-index的命名方式来存储

  - http并发上传大文件切片

  - vue 实现上传文件的西甲
    无论是前端还是后端， 传输文件， 特别是大文件， 有可能发生丢失文件的情况， 网速， 服务器超时， 如何避免丢失呢？ 
    hash, 文件名 并不是唯一的， 不同名的图片 内容是一样的， 针对文件内容进行hash 计算
    hash 前端算一个， 单向
    后端拿到内容算hash
    一样， 
    不一样 重新传

    - html5特性你怎么理解， localStorage ...
    Web workers 优化我们的前端性能， 将要花大量时间的， 复杂的， 放到一个新的线程中去计算， 文件上传通过hash 计算， 文件没有问题 
    - es6 哪些特性， 你怎么用的
      函数参数赋予默认值 
    - 给用户快速感知， yoghurt体验是核心

- 并发http 前后端体验，

- 断点续传
  ？ 上传
  hash
  abort
  恢复
  