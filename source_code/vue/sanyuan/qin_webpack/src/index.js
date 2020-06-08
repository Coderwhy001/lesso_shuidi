import { template } from "lodash";


// const compiler = template('<h1><%= title %></h1>'); //设置为模板
// // ajax , RIA 
// const html = compiler({title: 'My Component'})


// document.getElementById('app').innerHTML = html;

const MyComponent = props => {
  const compiler = template('<h1><%= title%></h1>')
  return compiler(props)
}
MyComponent.cache = null
document.getElementById('app').innerHTML = MyComponent({title: 'MyComponent'})
