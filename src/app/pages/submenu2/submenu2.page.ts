import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
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

  id_usuario: string = null;
  token: string = null;
  @ViewChild(IonList) listado: IonList;

  constructor(private crud: CrudContactosService, private storage: Storage) {
  }

  ngOnInit() {

    this.contactos = this.crud.getContactos();
    //this.recargar();
  }

  ionViewWillEnter() {
    this.contactos = this.crud.getContactos();
  }

  async cargarToken() {
    console.log("CargarToken");
    await this.storage.create();
    this.token = await this.storage.get('token') || null;

  }

  async cargarIdUsuario() {
    await this.storage.create();
    this.id_usuario = await this.storage.get('id_usuario') || null;

  }

  eliminarContacto(event) {
    this.crud.eliminarContacto(event["id_contacto"]);
    this.listado.closeSlidingItems();
    this.contactos = this.crud.getContactos();
  }
  agregarContacto() {

  }

}
