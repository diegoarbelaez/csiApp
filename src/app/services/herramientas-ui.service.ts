import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HerramientasUIService {

  constructor(private alertController:AlertController) { }

  async mostrarAlerta(encabezado,mensaje) {
    const alert = await this.alertController.create({
      header: encabezado,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}
