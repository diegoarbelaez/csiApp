import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class CrudContactosService {
  
  
  token: string = null;
  id_usuario;
  id_usuario_temp;
  private _storage: Storage | null = null;

  

  constructor(private http: HttpClient, private storage: Storage) {
    //this.cargarIdUsuario();
    //console.log("crud::creado constructor crudContactos");
    //console.log("crud::id_usuario"+this.id_usuario);
  }

  getContactos(){
    this.id_usuario_temp = this.cargarIdUsuario2();
    console.log(this.id_usuario_temp);
    console.log("crudContactos::getContactos: "+"https://csi.mipgenlinea.com/api/api/listarContactos.php?id_usuario=`"+this.id_usuario_temp);
    return this.http.get(`https://csi.mipgenlinea.com/api/api/listarContactos.php?id_usuario=`+this.id_usuario_temp);
  }

  getContactos3(number){
    console.log("crudContactos::getContactos3: "+"https://csi.mipgenlinea.com/api/api/listarContactos.php?id_usuario=`"+number);
    return this.http.get(`https://csi.mipgenlinea.com/api/api/listarContactos.php?id_usuario=`+number);
  }


  //Get Contactos POST con data en json enviado
  getContactos2() {

    const data = {  id_usuario:this.id_usuario }

    const URL: string = `https://csi.mipgenlinea.com/api/api/listarContactosSin.php`;

    return new Promise(resolve => {
      this.http.post(URL, data)
        .subscribe(async resp => {
          console.log("Respuesta Servidor " + resp['message']);
          if (resp['actualizado']) {
            console.log('Actualiado Exitosamente');
            resolve(true);
          } else {
            console.log('No actualizado!');
            console.log(resp['sql']);
            resolve(false);
          }
        });
    });

  }

  eliminarContacto(id_contacto: string) {
    const data = { id_contacto: id_contacto }
    const URL: string = `https://csi.mipgenlinea.com/api/api/eliminarContacto.php`;
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

  crearContacto(nombreContacto: string, telefonoContacto: string, descripcionContacto: string, id_usuario:string) {
    
    
    const data = {
      nombreContacto: nombreContacto,
      telefonoContacto: telefonoContacto,
      descripcionContacto: descripcionContacto,
      fk_id_usuario: id_usuario
    }

    console.log("Datos a Crear...");
    console.log(data);
    const URL: string = `https://csi.mipgenlinea.com/api/api/crearContacto.php`;
    
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

  actualizar(correo: string, cedula: string, nombres: string, apellidos: string, direccion: string, telefono: string, password: string, idUsuario:string) {
     
    const data = { correo: correo, cedula: cedula, nombres: nombres, apellidos: apellidos, direccion: direccion, telefono: telefono, password: password, id_usuario:idUsuario }

    const URL: string = `https://csi.mipgenlinea.com/api/api/ActualizarUsuario.php`;



    return new Promise(resolve => {
      this.http.post(URL, data)
        .subscribe(async resp => {
          console.log("Respuesta Servidor " + resp['message']);
          if (resp['actualizado']) {
            console.log('Actualiado Exitosamente');
            resolve(true);
          } else {
            console.log('No actualizado!');
            console.log(resp['sql']);
            resolve(false);
          }
        });
    });

  }

  async cargarIdUsuario() {
    this.storage.create();
    this.id_usuario = await this.storage.get('id_usuario');
    console.log("curd::cargarIdUsuario id_usuario" + this.id_usuario);
  }

  cargarIdUsuario2(){ 
    return this.storage.get('id_usuario');
  }


  


}
