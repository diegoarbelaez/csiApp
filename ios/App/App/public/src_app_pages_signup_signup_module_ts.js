"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_signup_signup_module_ts"],{

/***/ 392:
/*!*******************************************************!*\
  !*** ./src/app/pages/signup/signup-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageRoutingModule": () => (/* binding */ SignupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.page */ 4374);




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_0__.SignupPage
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ 7110:
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPageModule": () => (/* binding */ SignupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-routing.module */ 392);
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page */ 4374);







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_1__.SignupPage]
    })
], SignupPageModule);



/***/ }),

/***/ 4374:
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupPage": () => (/* binding */ SignupPage)
/* harmony export */ });
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.page.html?ngResource */ 4050);
/* harmony import */ var _signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.page.scss?ngResource */ 2124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var _services_herramientas_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/herramientas-ui.service */ 8108);









let SignupPage = class SignupPage {
  constructor(formbuider, servicios, navCtrl, herramientasUI) {
    this.formbuider = formbuider;
    this.servicios = servicios;
    this.navCtrl = navCtrl;
    this.herramientasUI = herramientasUI; //esto es para no tener que ingresar usuario y contraseña mientras estemos en pruebas
    //creamos un objeto para guardar los valores default y luego con ngModel los dejamos como default

    this.datosRegistro = {
      correo: '',
      cedula: '',
      nombres: '',
      apellidos: '',
      direccion: '',
      telefono: '',
      password: '',
      password2: ''
    };
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
        message: "Este correo no es válido"
      }],
      password2: [{
        type: "required",
        message: "Por ingrese la misma contraseña"
      }, {
        type: "minlength",
        message: "La contraseña es demasiado corta"
      }]
    };
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
        //Aqui falta guardar el Token en la BD y el ID del usuario, para que pueda ir al botón de pánico
        //Es decir hacer la misma rutina de un login
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

  ngOnInit() {
    this.validador = this.formbuider.group({
      correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      cedula: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)])),
      nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)])),
      apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)])),
      direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)])),
      telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)])),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)])),
      password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)]))
    });
  }

};

SignupPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _services_herramientas_ui_service__WEBPACK_IMPORTED_MODULE_4__.HerramientasUIService
}];

SignupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-signup',
  template: _signup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_signup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SignupPage);


/***/ }),

/***/ 2124:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4050:
/*!**********************************************************!*\
  !*** ./src/app/pages/signup/signup.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>login</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"validador\" (ngSubmit)=\"registrar(validador.value)\">\n    <ion-card>\n      <div class=\"contenedorLogo\">\n        <ion-img class=\"logoCSI\" src=\"assets/logo_csi_1.png\"></ion-img>\n      </div>\n      <p class=\"slogan\">Seguridad al Instante</p>\n    </ion-card>\n\n    <div class=\"contenedorFormulario\">\n      <p class=\"crearCuenta\">CREAR UNA NUEVA CUENTA</p>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Correo Electrónico</ion-label>\n        <ion-input name=\"correo\" formControlName=\"correo\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.correo\"\n          placeholder=\"Digite el correo\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.correo\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('correo').hasError(validation.type) && (validador.get('correo').dirty || validador.get('correo').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Cédula</ion-label>\n        <ion-input name=\"cedula\" formControlName=\"cedula\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.cedula\"\n          placeholder=\"Ingrese su cedula\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.cedula\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('cedula').hasError(validation.type) && (validador.get('cedula').dirty || validador.get('cedula').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Nombres</ion-label>\n        <ion-input name=\"nombres\"  formControlName=\"nombres\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.nombres\"\n          placeholder=\"Digite su Nombre\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.nombres\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('nombres').hasError(validation.type) && (validador.get('nombres').dirty || validador.get('nombres').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Apellidos</ion-label>\n        <ion-input name=\"apellidos\" formControlName=\"apellidos\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.apellidos\"\n          placeholder=\"Ingrese su Apellido\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.apellidos\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('apellidos').hasError(validation.type) && (validador.get('apellidos').dirty || validador.get('apellidos').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Dirección</ion-label>\n        <ion-input name=\"direccion\" formControlName=\"direccion\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.direccion\"\n          placeholder=\"Digite su dirección\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.direccion\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('direccion').hasError(validation.type) && (validador.get('direccion').dirty || validador.get('direccion').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Teléfono</ion-label>\n        <ion-input name=\"telefono\" formControlName=\"telefono\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.telefono\"\n          placeholder=\"Digite su teléfono\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.telefono\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('telefono').hasError(validation.type) && (validador.get('telefono').dirty || validador.get('telefono').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Contraseña</ion-label>\n        <ion-input name=\"password\" formControlName=\"password\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.password\"\n          placeholder=\"Digite su contraseña\"></ion-input>\n      </ion-item>\n      <div>\n        <ng-container *ngFor=\"let validation of mensajesValidacion.password\">\n          <div class=\"mensajesError\"\n            *ngIf=\"validador.get('password').hasError(validation.type) && (validador.get('password').dirty || validador.get('password').touched)\">\n            {{validation.message}}\n          </div>\n        </ng-container>\n      </div>\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Confirmar Contraseña</ion-label>\n        <ion-input name=\"password2\" formControlName=\"password2\" class=\"inputsFormulario\" [(ngModel)]=\"datosRegistro.password2\"\n          placeholder=\"Repita su contraseña\"></ion-input>\n      </ion-item>\n    </div>\n    <ng-container *ngFor=\"let validation of mensajesValidacion.password2\">\n      <div class=\"mensajesError\"\n        *ngIf=\"validador.get('password2').hasError(validation.type) && (validador.get('password2').dirty || validador.get('password2').touched)\">\n        {{validation.message}}\n      </div>\n    </ng-container>\n    <div class=\"contenedorIniciarSesion\">\n      <ion-button class=\"btn-iniciarSesion\" type=\"submit\" fill=\"solid\" shape=\"round\" expand=\"block\" [disabled]=\"!validador.valid\">Crear Cuenta</ion-button>\n    </div>\n  </form>\n  <div class=\"registrate\">\n    <!-- <p>¿No tienes cuenta? <span class=\"negrilla\">Registrate</span></p> -->\n    <p>¿Ya tienes cuenta? <a routerLink=\"/iniciosesion\"><b>Iniciar Sesión</b></a>\n  </div>\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_signup_signup_module_ts.js.map