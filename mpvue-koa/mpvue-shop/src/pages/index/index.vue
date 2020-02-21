<template>
  <div class="index">
      <!-- 头部的搜索 -->
      <div class="search">
          <div @click="toMappage">{{cityName}}</div>
          <div>
              <input type="text" placeholder="搜索商品" />
              <span class="icon"></span>
          </div>
      </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx.js';
import { mapState,mapMutations } from 'vuex'
export default {
    data(){
        return {
        }
    },
    computed: {
        ...mapState(['cityName'])
    },
    methods:{
        ...mapMutations(['update']),
        toMappage () {
            // 通过 wx.getSetting 先查询一下用户是否授权 “scoped.record”
            let _this = this
            wx.getSetting({
                success: (res) => {
                    //如果没有同意授权， 打开设置
                    // console.log(res);
                    if (!res.authSetting['scope.userLocation']) {
                        wx.openSetting({
                            success: res => {
                                // 获取授权位置信息
                                _this.getCityName() 
                            }
                        })
                    } else {
                        wx.navigateTo({
                            url: '/pages/mappage/main',
                        });
                    }
                },
                fail: (err) => {
                    console.log(err)
                },
                complete: () => {}
            });
        },
        getCityName () {
            let _this = this
             var myAmapFun = new amapFile.AMapWX({key:'92b631de44236363f9931cedc2e211d5'});
             myAmapFun.getRegeo({
                 success: function (data) {
                    //  成功的回调
                    // console.log(data);
                    _this.cityName = data[0].name;
                 },
                 fail: function (info) {
                    //  失败的回调
                     console.log(info)
                    //  _this.cityName = '北京'
                    _this.update({ cityName: '北京'})
                 }
             })
        }
    }
}
</script>

<style lang="less" scoped>
@import "./style.less";
</style>