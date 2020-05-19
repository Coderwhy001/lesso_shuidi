import React from 'react';
import { Query } from "react-apollo";
import gql from 'graphql-tag';


// 前端定义他要的接口是什么 前端决定权 
const QUERY_TODO = gql`
  {
    TodoList{
      content
      id
      checked
    }
  }
` 


const TodoList = () => (
  <Query
    query={QUERY_TODO}
    >
      
  </Query>
)


export default TodoList;