let {app,BrowserWindow} = require('electron')
app.on('ready',()=>{
  let win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    }
  }) // 创建窗口
  win.loadURL('http://localhost:3000/')
})