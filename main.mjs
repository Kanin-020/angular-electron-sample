import { BrowserWindow, app, dialog } from 'electron';

import defineIPCEvents from './ipc.mjs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


if (!dialog) {
    console.error('Dialog does not exist');
}

const createWindow = () => {
    const width = 1080;
    const height = 720;

    const window = new BrowserWindow({
        width: width,
        height: height,
        icon: path.join(__dirname, './src/favicon.ico'),
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true
        }
    });

    window.maximize();

    window.loadFile(path.join(__dirname, './dist/angular-electron-sample/browser/index.html'));

    // * Importante para agregar en producción
    // window.setMenu(null);

    window.on('closed', () => {

    });
};

defineIPCEvents(app, dialog);

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
