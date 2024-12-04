import { app, BrowserWindow } from 'electron'

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 200,
    minHeight: 200
  })
  // Quita el menu por defecto
  window.setMenuBarVisibility(false)

  window.loadFile('index.html')
}

app.whenReady().then(() => createWindow())

app.on('window-all-closed', () => app.quit())
