"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_editarperfil_editarperfil_module_ts"],{

/***/ 1669:
/*!*******************************************************************!*\
  !*** ./src/app/pages/editarperfil/editarperfil-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarperfilPageRoutingModule": () => (/* binding */ EditarperfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _editarperfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editarperfil.page */ 3974);




const routes = [
    {
        path: '',
        component: _editarperfil_page__WEBPACK_IMPORTED_MODULE_0__.EditarperfilPage
    }
];
let EditarperfilPageRoutingModule = class EditarperfilPageRoutingModule {
};
EditarperfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditarperfilPageRoutingModule);



/***/ }),

/***/ 2:
/*!***********************************************************!*\
  !*** ./src/app/pages/editarperfil/editarperfil.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarperfilPageModule": () => (/* binding */ EditarperfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _editarperfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editarperfil-routing.module */ 1669);
/* harmony import */ var _editarperfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editarperfil.page */ 3974);







let EditarperfilPageModule = class EditarperfilPageModule {
};
EditarperfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editarperfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarperfilPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_editarperfil_page__WEBPACK_IMPORTED_MODULE_1__.EditarperfilPage]
    })
], EditarperfilPageModule);



/***/ }),

/***/ 3974:
/*!*********************************************************!*\
  !*** ./src/app/pages/editarperfil/editarperfil.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarperfilPage": () => (/* binding */ EditarperfilPage)
/* harmony export */ });
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _editarperfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editarperfil.page.html?ngResource */ 4269);
/* harmony import */ var _editarperfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editarperfil.page.scss?ngResource */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var _services_herramientas_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/herramientas-ui.service */ 8108);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var src_app_services_crud_contactos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/crud-contactos.service */ 1901);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ 2340);













const urlService = src_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.urlServices;
let EditarperfilPage = class EditarperfilPage {
  constructor(formbuider, servicios, navCtrl, herramientasUI, storage, crudContactosService, http) {
    this.formbuider = formbuider;
    this.servicios = servicios;
    this.navCtrl = navCtrl;
    this.herramientasUI = herramientasUI;
    this.storage = storage;
    this.crudContactosService = crudContactosService;
    this.http = http;
    this._storage = null; //Interfaz para cargar el usuario:
    //esto es para no tener que ingresar usuario y contraseña mientras estemos en pruebas
    //creamos un objeto para guardar los valores default y luego con ngModel los dejamos como default

    this.datosRegistro = {
      correo: '',
      cedula: '',
      nombres: '',
      apellidos: '',
      direccion: '',
      telefono: '',
      password: '',
      password2: '',
      id_usuario: ''
    };
    this.mensajesValidacion = {
      correo: [{
        type: "required",
        message: "Por favor ingrese su correo"
      }, {
        type: "pattern",
        message: "Este correo no es válido"
      }],
      cedula: [{
        type: "required",
        message: "Por favor ingrese su correo"
      }, {
        type: "minlength",
        message: "Esta cédula no es válida"
      }],
      nombres: [{
        type: "required",
        message: "Por favor ingrese su nombre"
      }, {
        type: "minlength",
        message: "Este nombre no es válido"
      }],
      apellidos: [{
        type: "required",
        message: "Por favor ingrese su apellido"
      }, {
        type: "minlength",
        message: "Este apellido no es válido"
      }],
      direccion: [{
        type: "required",
        message: "Por favor ingrese su dirección"
      }, {
        type: "minlength",
        message: "Esta dirección no es válida"
      }],
      telefono: [{
        type: "required",
        message: "Por favor ingrese su teléfono"
      }, {
        type: "minlength",
        message: "Este teléfono no es válido"
      }],
      password: [{
        type: "required",
        message: "Por favor ingrese su contraseña"
      }, {
        type: "minlength",
        message: "Esta contraseña no es válida"
      }]
    };
    this.cargarIdUsuario();
  }

  registrar(datosRegistro) {
    var _this = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Estoy logeado");
      console.log(datosRegistro);
      console.log("Correo:" + datosRegistro.correo);
      console.log("Password:" + datosRegistro.password); //Llama el Servicio y envía el Usuario y Password

      const valido = yield _this.servicios.registrar(datosRegistro.correo, datosRegistro.cedula, datosRegistro.nombres, datosRegistro.apellidos, datosRegistro.direccion, datosRegistro.telefono, datosRegistro.password, datosRegistro.password2);

      if (valido) {
        //Pagina que se muestra cuando el login es OK
        _this.navCtrl.navigateRoot('/informacion', {
          animated: true
        });
      } else {
        //Lo que hace si el usuario no es correcto
        console.log("Usuario Ya registrado");

        _this.herramientasUI.mostrarAlerta("Ya registrado", "Ya existe un usuario con ese número de cédula registrado.");
      }
    })();
  }

  actualizar(datosRegistro) {
    var _this2 = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Datos de registro...");
      console.log("Datos de registro id_usuario..." + datosRegistro.id_usuario);
      console.log(datosRegistro); //Llama el Servicio y envía el Usuario y Password

      _this2.id_usuario = yield _this2.crudContactosService.cargarIdUsuario2();
      const valido = yield _this2.crudContactosService.actualizar(datosRegistro.correo, datosRegistro.cedula, datosRegistro.nombres, datosRegistro.apellidos, datosRegistro.direccion, datosRegistro.telefono, datosRegistro.password, _this2.id_usuario);

      if (valido) {
        //Pagina que se muestra cuando el login es OK
        _this2.herramientasUI.mostrarAlerta("Registro Actualizado", "Los cambios fueron guardados");

        _this2.navCtrl.navigateRoot('/panico', {
          animated: true
        });
      } else {
        //Lo que hace si el usuario no es correcto
        console.log("Usuario Ya registrado");

        _this2.herramientasUI.mostrarAlerta("Ya registrado", "Ya existe un usuario con ese número de cédula registrado.");
      }
    })();
  }

  cargarDatosUsuario(id_usuario) {
    var _this3 = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //Carga los datos del usuarios desde el servicio REST
      _this3.datosCargarUsuario = yield _this3.servicios.cargar(id_usuario);
      console.log("Datos Cargados EditarPerfil");
      console.log(_this3.datosCargarUsuario);
    })();
  }

  cargarIdUsuario() {
    var _this4 = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.id_usuario = yield _this4.crudContactosService.cargarIdUsuario2();
      console.log("Editar Perfil:" + _this4.id_usuario);
      const data = {
        id_usuario: _this4.id_usuario
      };
      const URL = urlService + 'cargarUsuario.php';
      return new Promise(resolve => {
        _this4.http.post(URL, data).subscribe( /*#__PURE__*/function () {
          var _ref = (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
            console.log("Respuesta Servidor " + JSON.stringify(resp));
            console.log('Cargado Usuario Exitosamente');
            _this4.datosRegistro.cedula = resp[0].cedula;
            _this4.datosRegistro.nombres = resp[0].nombre;
            _this4.datosRegistro.apellidos = resp[0].apellido;
            _this4.datosRegistro.telefono = resp[0].telefono;
            _this4.datosRegistro.direccion = resp[0].direccion;
            _this4.datosRegistro.correo = resp[0].correo;
            _this4.datosRegistro.password = resp[0].password;
            _this4.datosRegistro.id_usuario = _this4.id_usuario;
            console.log("editarPerfil:cargarIdUsuario -> id_usuario asignado: " + _this4.id_usuario);
            console.log("editarPerfil:cargarIdUsuario -> datosRegistro.id_usuario asignado: " + _this4.datosRegistro.id_usuario);
            resolve(true);
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
      /*this.id_usuario = await this.crudContactosService.cargarIdUsuario2().subscribe(
        respuesta => {
        this.id_usuario = respuesta;
      });*/
    })();
  } //Sin promesa

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
      correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(6)])),
      nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(5)])),
      apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(5)])),
      direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(5)])),
      telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(5)])),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(5)]))
    });
  }

};

EditarperfilPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
}, {
  type: _services_herramientas_ui_service__WEBPACK_IMPORTED_MODULE_4__.HerramientasUIService
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage
}, {
  type: src_app_services_crud_contactos_service__WEBPACK_IMPORTED_MODULE_6__.CrudContactosService
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
}];

EditarperfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-editarperfil',
  template: _editarperfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_editarperfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EditarperfilPage);


/***/ }),

/***/ 4058:
/*!**********************************************************************!*\
  !*** ./src/app/pages/editarperfil/editarperfil.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0YXJwZXJmaWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4269:
/*!**********************************************************************!*\
  !*** ./src/app/pages/editarperfil/editarperfil.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <p class=\"titulo_submenu1\">Edición de Perfil</p>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/submenu1\" text=\"Regresar\" color=\"secondary\">Regresar</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"contenedorFormulario\">\n    \n    <form class=\"formularioActualizar\" [formGroup]=\"validador\" (ngSubmit)=\"actualizar(validador.value)\">\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Correo Electrónico</ion-label>\n        <ion-input name=\"correo\" formControlName=\"correo\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.correo\"\n          placeholder=\"Digite el correo\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.correo\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('correo').hasError(validation.type) && (validador.get('correo').dirty || validador.get('correo').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Cédula</ion-label>\n        <ion-input [disabled]=\"true\" name=\"cedula\" formControlName=\"cedula\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.cedula\"\n          placeholder=\"Ingrese su cedula\" ></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.cedula\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('cedula').hasError(validation.type) && (validador.get('cedula').dirty || validador.get('cedula').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Nombres</ion-label>\n        <ion-input name=\"nombres\" formControlName=\"nombres\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.nombres\"\n          placeholder=\"Digite su Nombre\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.nombres\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('nombres').hasError(validation.type) && (validador.get('nombres').dirty || validador.get('nombres').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Apellidos</ion-label>\n        <ion-input name=\"apellidos\" formControlName=\"apellidos\" class=\"inputsFormulario\"\n          [(ngModel)]=\"datosRegistro.apellidos\" placeholder=\"Ingrese su Apellido\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.apellidos\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('apellidos').hasError(validation.type) && (validador.get('apellidos').dirty || validador.get('apellidos').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Dirección</ion-label>\n        <ion-input name=\"direccion\" formControlName=\"direccion\" class=\"inputsFormulario\"\n          [(ngModel)]=\"datosRegistro.direccion\" placeholder=\"Digite su dirección\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.direccion\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('direccion').hasError(validation.type) && (validador.get('direccion').dirty || validador.get('direccion').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Teléfono</ion-label>\n        <ion-input name=\"telefono\" formControlName=\"telefono\" class=\"inputsFormulario\"\n          [(ngModel)]=\"datosRegistro.telefono\" placeholder=\"Digite su teléfono\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.telefono\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('telefono').hasError(validation.type) && (validador.get('telefono').dirty || validador.get('telefono').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Contraseña</ion-label>\n        <ion-input name=\"password\" formControlName=\"password\" class=\"inputsFormulario\"\n          [(ngModel)]=\"datosRegistro.password\" placeholder=\"Digite su contraseña\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.password\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('password').hasError(validation.type) && (validador.get('password').dirty || validador.get('password').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-button class=\"boton_guarda_cambios\" type=\"submit\" fill=\"solid\" expand=\"full\" [disabled]=\"!validador.valid\">Guardar Cambios</ion-button>\n\n    </form>\n  </div>\n\n</ion-content>\n<ion-footer>\n\n  \n\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_editarperfil_editarperfil_module_ts.js.map