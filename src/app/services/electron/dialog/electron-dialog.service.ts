import { ElectronIpcService } from '../ipc/electron-ipc.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectronDialogService {

  electronIpcService!: ElectronIpcService;

  constructor() {
    this.electronIpcService = new ElectronIpcService();
  }

  public showDialogBox(title: string, content: string) {
    this.electronIpcService.send('showDialogBox', { title, content });
  }

  public showErrorBox(title: string, content: string) {
    this.electronIpcService.send('showErrorBox', { title, content });
  }


}
