import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { HerramientasUIService } from '../../services/herramientas-ui.service';
import { CrudContactosService } from 'src/app/services/crud-contactos.service';

@Component({
  selector: 'app-agregar-contacto',
  templateUrl: './agregar-contacto.page.html',
  styleUrls: ['./agregar-contacto.page.scss'],
})
export class AgregarContactoPage implements OnInit {

  validador: FormGroup;

  id_usuario;

  datos = {
    nombreContacto : 'Angélica Ceballos',
    telefonoContacto : '3174337569',
    descripcionContacto: 'Mi Amor',
  }


  mensajesValidacion = {
    nombreContacto: [
      { type: "required", message: "Por favor ingrese el Nombre del Contacto" },
      { type: "pattern", message: "Este correo no es válido" }
    ],
    telefonoContacto: [
      { type: "required", message: "Por favor ingrese el teléfono del Contacto" },
      { type: "pattern", message: "Este teléfono no es válido" }
    ],
    descripcionContacto: [
      { type: "required", message: "Por favor ingrese la descripción" },
      { type: "minlength", message: "Descripción es demasiado corta" }

    ]
  }

  constructor(public formbuider: FormBuilder, public crudContactos:CrudContactosService, public navCtrl:NavController, public herramientasUI:HerramientasUIService) { }

  async crearContacto(datos) {
    // console.log("Estoy logeado");
    // console.log(credenciales);
    // console.log("Correo:" + credenciales.correo);
    // console.log("Password:" + credenciales.password);

    //Llama el Servicio y envía el Usuario y Password
    await this.cargarIdUsuario();
    const valido = await this.crudContactos.crearContacto(datos.nombreContacto,datos.telefonoContacto,datos.descripcionContacto, this.id_usuario);

    if(valido){
      //Pagina que se muestra cuando el login es OK
      this.navCtrl.navigateRoot('/submenu2', {animated:true});
    }
    else {
      //Lo que hace si el usuario no es correcto
      console.log("no debe dejarlo logear");
      this.herramientasUI.mostrarAlerta("No encontrado","Asegurate de haber escrito bien tus credenciales");
    }




  }
  ngOnInit() {

    this.validador = this.formbuider.group({
      nombreContacto: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      telefonoContacto: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      descripcionContacto: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))

    })



  }

  async cargarIdUsuario(){
    this.id_usuario = await this.crudContactos.cargarIdUsuario2(); 
  }
}
