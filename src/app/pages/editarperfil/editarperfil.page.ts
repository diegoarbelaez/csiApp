import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, LoadingController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HerramientasUIService } from '../../services/herramientas-ui.service';
import { Storage } from '@ionic/storage';
import { CrudContactosService } from 'src/app/services/crud-contactos.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';




const urlService = environment.urlServices;



export interface usuario {
  id:string,
  cedula:string,
  nombre:string,
  apellido:string,
  telefono:string,
  direccion:string,
  correo:string,
  password:string
}

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  validador: FormGroup;
  datosCargarUsuario;
  private _storage: Storage | null = null;
  id_usuario;

  //Interfaz para cargar el usuario:
  

  //esto es para no tener que ingresar usuario y contraseña mientras estemos en pruebas
  //creamos un objeto para guardar los valores default y luego con ngModel los dejamos como default
  datosRegistro = {
    correo: '',
    cedula: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    password: '',
    password2: '',
    id_usuario: ''
  }

  mensajesValidacion = {
    correo: [
      { type: "required", message: "Por favor ingrese su correo" },
      { type: "pattern", message: "Este correo no es válido" }
    ],
    cedula: [
      { type: "required", message: "Por favor ingrese su correo" },
      { type: "minlength", message: "Esta cédula no es válida" }
    ],
    nombres: [
      { type: "required", message: "Por favor ingrese su nombre" },
      { type: "minlength", message: "Este nombre no es válido" }
    ],
    apellidos: [
      { type: "required", message: "Por favor ingrese su apellido" },
      { type: "minlength", message: "Este apellido no es válido" }
    ],
    direccion: [
      { type: "required", message: "Por favor ingrese su dirección" },
      { type: "minlength", message: "Esta dirección no es válida" }
    ],
    telefono: [
      { type: "required", message: "Por favor ingrese su teléfono" },
      { type: "minlength", message: "Este teléfono no es válido" }
    ],
    password: [
      { type: "required", message: "Por favor ingrese su contraseña" },
      { type: "minlength", message: "Esta contraseña no es válida" }
    ]
  }

  constructor(public formbuider: FormBuilder, public servicios: UsuarioService, public navCtrl: NavController, public herramientasUI: HerramientasUIService, private storage:Storage, private crudContactosService: CrudContactosService, private http:HttpClient, private loadingCtrl:LoadingController) {
    this.cargarIdUsuario();
   }

  async registrar(datosRegistro) {
    console.log("Estoy logeado");
    console.log(datosRegistro);
    console.log("Correo:" + datosRegistro.correo);
    console.log("Password:" + datosRegistro.password);

    //Llama el Servicio y envía el Usuario y Password
    const valido = await this.servicios.registrar(datosRegistro.correo, datosRegistro.cedula, datosRegistro.nombres, datosRegistro.apellidos, datosRegistro.direccion, datosRegistro.telefono, datosRegistro.password, datosRegistro.password2);

    if (valido) {
      //Pagina que se muestra cuando el login es OK
      this.navCtrl.navigateRoot('/informacion', { animated: true });
    }
    else {
      //Lo que hace si el usuario no es correcto
      console.log("Usuario Ya registrado");
      this.herramientasUI.mostrarAlerta("Ya registrado", "Ya existe un usuario con ese número de cédula registrado.");
    }

  }

  async actualizar(datosRegistro) {

    console.log("Datos de registro...");
    console.log("Datos de registro id_usuario..."+datosRegistro.id_usuario);
    console.log(datosRegistro);

    //Llama el Servicio y envía el Usuario y Password
    this.id_usuario = await this.crudContactosService.cargarIdUsuario2();
    const valido = await this.crudContactosService.actualizar(datosRegistro.correo, datosRegistro.cedula, datosRegistro.nombres, datosRegistro.apellidos, datosRegistro.direccion, datosRegistro.telefono, datosRegistro.password, this.id_usuario);

    if (valido) {
      //Pagina que se muestra cuando el login es OK
      this.herramientasUI.mostrarAlerta("Registro Actualizado", "Los cambios fueron guardados");
      this.navCtrl.navigateRoot('/panico', { animated: true });
    }
    else {
      //Lo que hace si el usuario no es correcto
      console.log("Usuario Ya registrado");
      this.herramientasUI.mostrarAlerta("Ya registrado", "Ya existe un usuario con ese número de cédula registrado.");
    }

  }

  async cargarDatosUsuario(id_usuario){
    //Carga los datos del usuarios desde el servicio REST
    this.datosCargarUsuario =  await this.servicios.cargar(id_usuario);
    console.log("Datos Cargados EditarPerfil");
    console.log(this.datosCargarUsuario);
  }


  async cargarIdUsuario(){ 

    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
    });
    await loading.present();


    this.id_usuario = await this.crudContactosService.cargarIdUsuario2();
    console.log("Editar Perfil:"+this.id_usuario);
    const data = { id_usuario:this.id_usuario }
    const URL: string = urlService+'cargarUsuario.php';
    return new Promise(resolve => {
      this.http.post(URL, data)
        .subscribe(async resp => {
          console.log("Respuesta Servidor " + JSON.stringify(resp));
            console.log('Cargado Usuario Exitosamente');
            this.datosRegistro.cedula = resp[0].cedula;            
            this.datosRegistro.nombres = resp[0].nombre;            
            this.datosRegistro.apellidos = resp[0].apellido;            
            this.datosRegistro.telefono = resp[0].telefono;            
            this.datosRegistro.direccion = resp[0].direccion;            
            this.datosRegistro.correo = resp[0].correo;            
            this.datosRegistro.password = resp[0].password;   
            this.datosRegistro.id_usuario = this.id_usuario;
            console.log("editarPerfil:cargarIdUsuario -> id_usuario asignado: "+this.id_usuario);
            console.log("editarPerfil:cargarIdUsuario -> datosRegistro.id_usuario asignado: "+this.datosRegistro.id_usuario);
            resolve(true);
            this.loadingCtrl.dismiss();
                    
        });
    });



    /*this.id_usuario = await this.crudContactosService.cargarIdUsuario2().subscribe(
      respuesta => {
      this.id_usuario = respuesta;
    });*/

  }

  //Sin promesa
  /*
  async cargarIdUsuario() {
    //carga el ID del usuario desde el Storage del Usuario
    const storage = await this.storage.create();
    this._storage = storage;
    this.id_usuario = await this._storage.get('id_usuario');
    console.log("cargarUsuario (EditarPerfil) - fk_id_usuario 1..." + this.id_usuario);
  }*/

  ngOnInit() {

    //Cargar la información del usuario mediante un GET
    //console.log("editarPerfil: Se llama a CargarUsuario con id:"+this.id_usuario);
    //this.cargarDatosUsuario(this.id_usuario);

    this.validador = this.formbuider.group({
      correo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      cedula: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ])),
      nombres: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      apellidos: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      direccion: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })

  }
}