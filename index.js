const BrowserWindow = require('browser-window');
const app = require('app');
const path = require('path');

var mainWindow = null;

require('crash-reporter')();

app.on('windows-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    title: 'Codex',
    width: 800,
    height: 600
  });
  mainWindow.loadUrl('file://' + path.join(__dirname, '/index.html'));
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
