/**
{}
方法
 */
import { HOME_CHANGE_COMMENT_LIST } from '../constants';

const commentListActionCreate = (commentList) => ({
  type: HOME_CHANGE_COMMENT_LIST,
  commentList
})
export const getCommentList = function() {
  // api.com/v1
  // auth: ''
  // (dispatch, getState,） redux
  console.log('action:  getCommentList')
  return (dispatch, getState, axiosInstance) => {
    // axiosInstance 即是 请求时候的主体 [ 客户端 | 服务端 ]
    return axiosInstance.get('/comment')
    .then(res => {
      // console.log('res', res);
      console.log('接口数据回来了')
      const commentList = res.data.list;
      // dispatch 的 是 一个对象
      dispatch(commentListActionCreate(commentList));
    })
  }
}
