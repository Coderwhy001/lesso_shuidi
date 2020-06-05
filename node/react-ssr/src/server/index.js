import express from 'express';
import React from 'react'
import { renderToString } from 'react-dom/server';
import Header from '../components/Header.jsx';

const app = express();

// static 目录做了静态资源的
app.use(express.static('static'))
//处理所有路由
app.get('*', (req, res) => {
  //入口组件
  const App = (<Header/>)
  const htmlStr = renderToString(App)
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root">${htmlStr}</div>
    <script src="/index.js"></script>
  </body>
  </html>`);
})

app.listen(3000, () => {
  console.log('server is running 3000 port');
})