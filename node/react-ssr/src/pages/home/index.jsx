import React from 'react';
import { connect } from 'react-redux';
import { getCommentList } from '../../store/actions/homeAction.js';

class Home extends React.Component {
  
  // 难道他不在后端运行到吗？
  componentDidMount() {
    // 浏览器
    // 放心大胆 使用
    const { getCommentList } = this.props
    getCommentList();
  }
  render() {
    const { commentList } = this.props;
    // commentList = DB
    console.log('Home render');
    return (
      <div>
        Home
        {/* 接口请求会，js 动态构造出来的 jsx 不能变为用户直接可用 html 的 */}
        {/*  */}
        {
          commentList.map((e, index) => {
            return (
              <li id={e.content}>
                {e.content}
              </li>
            )
          })
        }
      </div>
    )
  }
}
Home.loadData = (dispatch) => {
  // 后端发起 dispatch，dispatch 完了之后，请求发出去了，reducer store
  return dispatch(getCommentList()) // 得到一个 Promise
}
const mapStateToProps = (state) => {
  const { commentList } = state.home;
  return { commentList }
}
const mapDispatchToProps = (dispatch) => {
  // 1: distpatch(action)
  // action 只能是一个对象： { type: 'HOME..', commentList: []}
  // 2: 有了 redux-thunk distpatch(方法)
  return {
    getCommentList() {
      dispatch(getCommentList());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);