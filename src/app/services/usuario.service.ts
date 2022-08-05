import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { NavController } from '@ionic/angular';

//Usado para el nombre de los servicios en el get
export interface eventos {
  nombre1:string,
  nombre2:string,
  nombre3:string,
  nombre4:string,
  nombre5:string,
  nombre6:string
}


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Importar HTTP y Storage
  constructor(private http: HttpClient, private storage: Storage, private navCtrl: NavController) { }
  //constructor() { }



  token: string = null;

  login(correo: string, password: string) {

    const data = { correo: correo, password: password }

    const URL: string = `https://csi.mipgenlinea.com/api/api/login.php`;

    return new Promise(resolve => {
      this.http.post(URL, data)
        .subscribe(async resp => {
          console.log("Respuesta Servidor " + resp['logeado']);

          if (resp['logeado']) {
            await this.guardarToken(resp['token'], resp['id_usuario']);
            console.log('Credenciales Correctas!');
            resolve(true);
          } else {
            console.log('Credenciales incorrectas');
            this.token = null;
            await this.storage.create();
            this.storage.clear();
            resolve(false);
          }
        });
    });

  }


  registrar(correo: string, cedula: string, nombres: string, apellidos: string, direccion: string, telefono: string, password: string, password2: string) {

    const data = { correo: correo, cedula: cedula, nombres: nombres, apellidos: apellidos, direccion: direccion, telefono: telefono, password: password }

    const URL: string = `https://csi.mipgenlinea.com/api/api/register.php`;

    return new Promise(resolve => {
      this.http.post(URL, data)
        .subscribe(async resp => {
          console.log("Respuesta Servidor " + resp);
          if (resp['creado']) {
            await this.guardarToken(resp['token'], resp['id_usuario']);
            console.log('Creado Exitosamente');
            resolve(true);
          } else {
            console.log('No creado!');
            resolve(false);
          }
        });
    });

  }



  cargar(id_usuario: string) {
    const data = { id_usuario: id_usuario }

    const URL: string = `https://csi.mipgenlinea.com/api/api/cargarUsuario.php`;

    return new Promise(resolve => {
      this.http.post(URL, data)
        .subscribe(async resp => {
          console.log("Respuesta Servidor " + resp);
          console.log('Cargado Usuario Exitosamente');
          resolve(true);

        });
    });

  }


  async guardarToken(token: string, id_usuario: string) {
    await this.storage.create();
    this.token = token;
    await this.storage.set('token', token);
    await this.storage.set('id_usuario', id_usuario);
  }

  async cargarTokenInicial() {
    //Carga el Token inicialmente
    console.log('Entró a Cargar Token Inicial');
    await this.storage.create();
    this.token = await this.storage.get('token') || null;
    if (!this.token) {
      //Si el token es null, lo mandamos al login para que inicie el proceso
      console.log('No encontró token, redirigiendo a Login');
      this.navCtrl.navigateRoot('/login');
      return false;
    }
    else {
      console.log('Token Encontrado! Continúa flujo');
      return true;
    }
  }

  getNombreAlertas(){
     return this.http.get(`https://csi.mipgenlinea.com/api/api/listarNombreEventos.php`).toPromise();
   }

  





}
