import { ipcMain } from 'electron';

function defineIPCEvents(app, dialog) {

    if (!ipcMain) {
        console.error('IPC does not exist');
    }

    ipcMain.on('showDialogBox', (event, { title, content }) => {
        dialog.showMessageBox({
            type: 'info',  // info | question | warning
            title: title,
            message: content
        });
    });

    ipcMain.on('showErrorBox', (event, { title, content }) => {
        dialog.showErrorBox(title, content);
    });

    ipcMain.on('restart', () => {
        app.relaunch();
        app.exit();
    });

    ipcMain.on('close', () => {
        app.quit();
    });

}

export default defineIPCEvents;