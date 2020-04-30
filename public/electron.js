const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

function createWindow() {
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 600,
    minHeight: 450,
    title: "Tutorial app",
    webPreferences: {
      nodeIntegration: true
    }
  })


  window.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  window.setTitle("Tutorial App")
  window.on('closed', () => window = null)
  // window.webContents.openDevTools()
}

app.whenReady().then(createWindow)

// Configure app behavior (equivalent to App Delegate)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', (event, hasVisibleWindows) => {
  if (!hasVisibleWindows) {
    createWindow()
  }
})

console.log(app.applicationMenu)