1. node 插入一条qrcode记录， {qrcode_id: expires_at, create_at} 生成一个二维码图片
2. PC端的登录页， 二维码， 显示出来
3. 扫码 得到qrcodeId 
4. 手机端登录状态 
- 注册 -》 登录 jwt  用户名密码等生成token
5. 手机端扫码 走进服务端 token被解析成用户名等用户数据 qrcodeId 跟token结合 ， 