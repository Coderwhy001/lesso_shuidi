import Mock from 'mockjs'

const dataList = {
  'orders|100': [{
    "_id|+1": 1, // id 自增
    "name": "@name",
    "orderDate": "@datetime",
    "status": "@pick(['created', 'completed', 'canceled'])",
    "shoppingFee": "@float(0,8,0,2)",
    "total": "@float(0,100,0,2)"
  }]
};

Mock.mock('/api/orders', 'post', dataList)
export default Mock;