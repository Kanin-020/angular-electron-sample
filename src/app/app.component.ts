import { Component } from '@angular/core';
import { ElectronDialogService } from './services/electron/dialog/electron-dialog.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular + Electron Sample';

  private electronDialog!: ElectronDialogService;

  constructor(electronDialogParam: ElectronDialogService) {
    this.electronDialog = electronDialogParam;
  }

  protected alert() {
    alert("This is a vanilla JavaScript alert.");
  }

  protected openDialog() {
    this.electronDialog.showDialogBox("Dialog Sample", "This is a electron dialog sample.");
  }

  protected openError() {
    this.electronDialog.showErrorBox("Error Sample", "This is a electron error sample.");
  }

}


