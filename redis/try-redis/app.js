const http=require('http');
const redis=require('redis');
const client=redis.createClient(6379,'192.168.31.128');
let api_limit=10; //一个API只能调用十次

client.set("xyx_key",10,function(err,obj){
    console.log(obj);
})
http.createServer((req,res)=>{
    if(/^\/api/.test(req.url)){
        // api_limit--;
        client.get("xyx_key",function(err,count){
            res.writeHead(200,{
            'Content-Type':'text/json;charset=utf-8'//解决乱码问题
        });
        if(count>0){
         client.decrby('xyx_key',1);
        res.end(JSON.stringify({
            name:'xyx',
            count:`您拥有${count}次调用权`
        }))
            }else{
                msg:'已到达上限，请充值'
            }
        })
        // 响应头 ？
        // 状态码 StatusCode
        // 1开头表示 请求进行中
        // 2开头 成功
        // 3开头 跳转
        // 4开头 用户端发生错误
        // 5xx 服务器
        // res 用户访问的响应 响应体
        
    }
})
.listen(7001)