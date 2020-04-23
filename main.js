// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const {autoUpdater} = require('electron-updater')

const winURL = process.env.NODE_ENV === 'development' ? `http://localhost:3000` : `file://${__dirname}/build/index.html`

let mainWindow = null

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    useContentSize: true,
    webPreferences: {
      nodeIntegration: true, // 是否集成 Nodejs,把之前预加载的js去了，发现也可以运行
  }
  })

  // and load the index.html of the app.
//   mainWindow.loadFile('index.html')
  mainWindow.loadURL(winURL)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
if (process.env.NODE_ENV !== 'development') {
  autoUpdater.setFeedURL('http://192.168.1.17:8081')

  // 更新错误
  autoUpdater.on('error', function(error) {
    mainWindow.webContents.send('UpdateError', error)
  })

  // 检查中
  autoUpdater.on('checking-for-update', function() {
    mainWindow.webContents.send('UpdateChecking', '检查中')
  })

  // 发现新版本
  autoUpdater.on('update-available', function(info) {
    mainWindow.webContents.send('UpdateAvailable', info)
  })

  // 当前版本为最新版本
  autoUpdater.on('update-not-available', function(info) {
    mainWindow.webContents.send('UpdateLatest', info)
  })

  // 更新下载进度事件
  autoUpdater.on('download-progress', function(progressObj) {
    mainWindow.webContents.send('DownloadProgress', progressObj)
    mainWindow.setProgressBar(progressObj.percent / 100)
  })

  autoUpdater.on('update-downloaded', () => {
    mainWindow.webContents.send('UpdateDownloaded')
    // 延迟重启更新
    setTimeout(function() {
      autoUpdater.quitAndInstall()
      app.exit()
    }, 1000)
  })

  app.on('ready', () => {
    setTimeout(function() {
      autoUpdater.checkForUpdates()
    }, 1000)
  })
}