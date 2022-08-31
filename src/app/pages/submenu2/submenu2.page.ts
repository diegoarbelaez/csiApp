import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { CrudContactosService } from '../../services/crud-contactos.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-submenu2',
  templateUrl: './submenu2.page.html',
  styleUrls: ['./submenu2.page.scss'],
})
export class Submenu2Page implements OnInit {

  contactos: Observable<any>;

  id_usuario;
  token: string = null;
  @ViewChild(IonList) listado: IonList;

  constructor(private crud: CrudContactosService, private storage: Storage, private loadingCtrl: LoadingController) {
    //this.contactos = this.crud.getContactos();
    this.cargarIdUsuario();
    console.log("submenu2::OnInit, acaba de cargar id_usuario");
    console.log("submenu2::OnInit, id_usuario=" + this.id_usuario);
    //this.contactos = this.crud.getContactos3(this.id_usuario);
    //console.log("submenu2::OnInit, acaba de llamar getContactos3");
  }

  ngOnInit() {
    //this.recargar();
  }

  ionViewWillEnter() {
    this.cargarIdUsuario();
  }

  async cargarIdUsuario() {

    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    await loading.present();


    this.id_usuario = await this.crud.cargarIdUsuario2();
    console.log("submenu2::cargarIdUsuario -> id_usuario:" + this.id_usuario);
    //cargamos de una vez el listado de usuarios


    this.contactos = await this.crud.getContactos3(this.id_usuario);

    loading.dismiss();

  }

  /*async cargarToken() {
    console.log("CargarToken");
    await this.storage.create();
    this.token = await this.storage.get('token') || null;

  }*/

  /*async cargarIdUsuario() {
    await this.storage.create();
    this.id_usuario = await this.storage.get('id_usuario') || null;
    console.log("cargarIdUsuario - completado, cargado "+this.id_usuario)

  }*/

  eliminarContacto(event) {
    this.crud.eliminarContacto(event["id_contacto"]);
    this.listado.closeSlidingItems();
    //Vuelve a recuperar los contactos
    //this.contactos = this.crud.getContactos3(this.id_usuario);
    //Vuel
    this.cargarIdUsuario();
  }
  /*agregarContacto() {

  }*/

}
