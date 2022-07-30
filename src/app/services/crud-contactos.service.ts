import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class CrudContactosService {
  
  
  token: string = null;
  id_usuario: string = null;
  private _storage: Storage | null = null;

  

  constructor(private http: HttpClient, private storage: Storage) {
    this.cargarIdUsuario();
  }


  
  /*getContactos() {
    console.log("getContactos");
    this.cargarToken();
    console.log("getContactos"+this.token);
    const data = { id_usuario: this.id_usuario }
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });
    return this.http.post(`http://localhost/CSI/php-auth-api/api/listarContactosSin.php`, data, { headers })
  }*/

  getContactos(){
    const data = { id_usuario: this.id_usuario }
    return this.http.get(`http://localhost/CSI/php-auth-api/api/listarContactosSin.php`);
  }

  eliminarContacto(id_contacto: string) {
    const data = { id_contacto: id_contacto }
    const URL: string = `http://localhost/CSI/php-auth-api/api/eliminarContacto.php`;
    return new Promise(resolve => {
      this.http.post(URL, data)
        .subscribe(async resp => {
          //Agregar funciones para hacer cosas aquí, dependiendo del mensaje de respuesta del servidor
          /* if (resp['logeado']) {
             await this.guardarToken(resp['token'],resp['id_usuario']);
             console.log('Credenciales Correctas!');
             resolve(true);
           } else {
             console.log('Credenciales incorrectas');
             this.token = null;
             await this.storage.create();
             this.storage.clear();
             resolve(false);
           }*/
        });
    });
  }

  crearContacto(nombreContacto: string, telefonoContacto: string, descripcionContacto: string) {
    const data = {
      nombreContacto: nombreContacto,
      telefonoContacto: telefonoContacto,
      descripcionContacto: descripcionContacto,
      fk_id_usuario: this.id_usuario
    }

    console.log("Datos a Crear...");
    console.log(data);
    const URL: string = `http://localhost/CSI/php-auth-api/api/crearContacto.php`;
    
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.token
    });
    return new Promise(resolve => {
      this.http.post(URL, data, { headers })
        .subscribe(async resp => {
          console.log("Respuesta Servidor " + resp['message']);
          console.log("Id Contacto Creado " + resp['resultado']);
          console.log("SQL: " + resp['sql']);
          //Agregar funciones para hacer cosas aquí, dependiendo del mensaje de respuesta del servidor
           if (resp['message']= 'ok') {
             console.log('Contacto creado');
             resolve(true);
           } else {
             console.log('Contacto No creado');
             resolve(false);
           }
        });
    });
  }

  async cargarIdUsuario() {
    const storage = await this.storage.create();
    this._storage = storage;
    this.id_usuario = await this._storage.get('id_usuario');
    console.log("cargarUsuario - fk_id_usuario 1..." + this.id_usuario);
  }

  


}
