<template>
  <div id="app" align="center">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <router-view/> -->
    <h1>订单管理</h1>
    
    <el-table v-loading="listLoading" :data="list">
      <el-table-column label="ID" prop="_id" align="center" width="80">
        <template slot-scope="{row}">
          <span class="red">{{row._id}}</span>
        </template>
      </el-table-column>
      <el-table-column label="Name" prop="name" align="center" width="200">
        <template slot-scope="{row}">
          <span>{{row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column label="OrderDate" prop="orderDate" align="center" width="500">
        <template slot-scope="{row}">
          <span>{{row.orderDate}}</span>
        </template>
      </el-table-column>
      <el-table-column label="状态" prop="status" align="center" width="100">
        <template slot-scope="{row}">
          <span>{{row.status}}</span>
        </template>
      </el-table-column>
      <el-table-column label="邮费" prop="shoppingFee" align="center" width="100">
        <template slot-scope="{row}">
          <span>{{row.shoppingFee}}</span>
        </template>
      </el-table-column>
      <el-table-column label="单价" prop="total" align="center" width="100">
        <template slot-scope="{row}">
          <span>{{row.total}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page.sync="page" :total="total" :pageSize="limit" layout="total, prev, pager, next"
                    @current-change="handleCurrentChange">

    </el-pagination>
  </div>
</template>

<style>
/* .red{
  color: red;
} */
</style>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      page: 1,
      total: 100,
      limit: 20,
      listLoading: true,//加载数据中
      list: [
        {
          "_id": '121212',
          "name": "肖仡轩1",
          "orderDate": new Date(),
          "status": "completed",
          "shoppingFee": 0.5,
          "total": 10.1
        },
        {
          "_id": '121212',
          "name": "肖仡轩2",
          "orderDate": new Date(),
          "status": "canceled",
          "shoppingFee": 1.5,
          "total": 20.1
        },
        {
          "_id": '121212',
          "name": "肖仡轩3",
          "orderDate": new Date(),
          "status": "created",
          "shoppingFee": 2.5,
          "total": 30.1
        }
      ]
    }
  },
  methods: {
    handleCurrentChange() {

    }
  },
  mounted() {
    Axios.post('/api/orders', {
      params: {

      }
    })
    .then(res => {
      // console.log(res);
      this.list = res.data.orders
      setTimeout(() => {
      this.listLoading = false
    }, 1000)
    })
  }
}
</script>