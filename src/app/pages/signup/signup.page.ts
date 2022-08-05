import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HerramientasUIService } from '../../services/herramientas-ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  validador: FormGroup;

  //esto es para no tener que ingresar usuario y contraseña mientras estemos en pruebas
  //creamos un objeto para guardar los valores default y luego con ngModel los dejamos como default
  datosRegistro = {
    correo : '',
    cedula : '',
    nombres: '',
    apellidos : '',
    direccion: '',
    telefono: '',
    password: '',
    password2: ''
  }

  /*

    datosRegistro = {
    correo : "diegoarbelaez.co@gmail.com",
    cedula : '94287419',
    nombres: 'Diego Fernando',
    apellidos : 'Arbeláez Montoya',
    direccion: 'Cra 46 # 48 - 65',
    telefono: '3218001896',
    password: 'Kuzavy46',
    password2: 'Kuzavy56'
  }

  */

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
      { type: "minlength", message: "Este correo no es válido" }
    ],
    password2: [
      { type: "required", message: "Por ingrese la misma contraseña" },
      { type: "minlength", message: "La contraseña es demasiado corta" }

    ]
  }

  constructor(public formbuider: FormBuilder, public servicios:UsuarioService, public navCtrl:NavController, public herramientasUI:HerramientasUIService) { }

  async registrar(datosRegistro) {
    console.log("Estoy logeado");
    console.log(datosRegistro);
    console.log("Correo:" + datosRegistro.correo);
    console.log("Password:" + datosRegistro.password);

    //Llama el Servicio y envía el Usuario y Password
    const valido = await this.servicios.registrar(datosRegistro.correo,datosRegistro.cedula,datosRegistro.nombres,datosRegistro.apellidos,datosRegistro.direccion,datosRegistro.telefono,datosRegistro.password,datosRegistro.password2);

    if(valido){
      //Pagina que se muestra cuando el login es OK
      //Aqui falta guardar el Token en la BD y el ID del usuario, para que pueda ir al botón de pánico
      //Es decir hacer la misma rutina de un login



      this.navCtrl.navigateRoot('/informacion', {animated:true});
    }
    else {
      //Lo que hace si el usuario no es correcto
      console.log("Usuario Ya registrado");
      this.herramientasUI.mostrarAlerta("Ya registrado","Ya existe un usuario con ese número de cédula registrado.");
    }




  }
  ngOnInit() {

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
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })



  }


}
