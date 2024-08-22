import { Injectable } from '@angular/core';
// import { IpcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ElectronIpcService {

  private ipc!: any;

  constructor() {

    if (typeof window !== 'undefined') {
      try {
        this.ipc = window.require('electron').ipcRenderer;
      } catch (error) {
        throw error;
      }
    } else {
      console.error('Electron IPC was not loaded');
    }

  }
  public on(channel: string, listener: any): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.on(channel, listener);
  }

  public once(channel: string, listener: any): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.once(channel, listener);
  }

  public send(channel: string, ...args: any[]): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.send(channel, ...args);
  }

  public removeAllListeners(channel: string): void {
    if (!this.ipc) {
      return;
    }
    this.ipc.removeAllListeners(channel);
  }

}
