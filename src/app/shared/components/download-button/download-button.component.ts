import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-download-button',
  imports: [],
  templateUrl: './download-button.component.html',
  styleUrl: './download-button.component.scss'
})
export class DownloadButtonComponent {
  public isSuccess: boolean = false;
  @Input({required: true}) public buttonText: string = 'Descargar en Android';
  @Input({required: true}) public svgPath: string = '';

  public onDownloadClick() {
    this.buttonText = '¡Descarga exitosa!';
    this.isSuccess = true;
  }
}
