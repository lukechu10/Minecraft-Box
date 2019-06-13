const { app, BrowserWindow } = require('electron');

const path = require('path');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = () => {
    // Create the browser window.
    // Size properties are based on the Westrcraft Launcher while-as some others are from Mtechnik@github
    mainWindow = new BrowserWindow({
        width: 980,
        height: 600,
        frame: true,
        nodeIntegration: true,
        transparent: false,
        maximizable: false,
        minimizable: true,
        resizable: true,
        closable: true,
        title: "The Minecraft Box",
        show: false,
        icon: path.join(__dirname, 'build/icon.ico')
    });

  // and load the index.html of the app.
  mainWindow.loadURL(path.join(__dirname, 'src/views/spa.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  });

  // Disable Default Menubar
  mainWindow.setMenu(null);

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
