const db=wx.cloud.database();
const productsCollection=db.collection('products');
Page({
    data(){
        product:[]
    },
    onLoad(){
        productsCollection
        .get()
        .then(res=>{
            this.setData({
                products:res.data
            })
        })
    }
})