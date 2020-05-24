// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { ipcRenderer } = require('electron')
const { BrowserWindow } = require('electron').remote

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('node-version').innerHTML = process.versions.node
  document.getElementById('send').addEventListener('click', () => {
    ipcRenderer.send('message', 'hello fron renderer')
    let win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL('http://baidu.com')
  })
  ipcRenderer.on('reply', (event, arg) => {
    document.getElementById('message').innerHTML = arg
  })
})