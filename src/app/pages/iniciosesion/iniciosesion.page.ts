import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HerramientasUIService } from '../../services/herramientas-ui.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

  validador: FormGroup;

  //esto es para no tener que ingresar usuario y contraseña mientras estemos en pruebas
  //creamos un objeto para guardar los valores default y luego con ngModel los dejamos como default
  credenciales = {
    correo : "",
    password : ""
    //correo : "diegoarbelaez.co@gmail.com",
    //password : "Juryzu57"
  }

  mensajesValidacion = {
    correo: [
      { type: "required", message: "Por favor ingrese su correo" },
      { type: "pattern", message: "Este correo no es válido" }
    ],
    password: [
      { type: "required", message: "Por favor ingrese su contraseña" },
      { type: "minlength", message: "La contraseña es demasiado corta" }

    ]
  }

  constructor(public formbuider: FormBuilder, public servicios:UsuarioService, public navCtrl:NavController, public herramientasUI:HerramientasUIService) { }

  async login(credenciales) {
    console.log("Estoy logeado");
    console.log(credenciales);
    console.log("Correo:" + credenciales.correo);
    console.log("Password:" + credenciales.password);

    //Llama el Servicio y envía el Usuario y Password
    const valido = await this.servicios.login(credenciales.correo,credenciales.password);

    if(valido){
      //Pagina que se muestra cuando el login es OK
      this.navCtrl.navigateRoot('/informacion', {animated:true});
    }
    else {
      //Lo que hace si el usuario no es correcto
      console.log("no debe dejarlo logear");
      this.herramientasUI.mostrarAlerta("No encontrado","Asegurate de haber escrito bien tus credenciales");
    }




  }
  ngOnInit() {

    this.validador = this.formbuider.group({
      correo: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })



  }
}
