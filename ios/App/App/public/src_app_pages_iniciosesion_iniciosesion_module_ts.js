"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_iniciosesion_iniciosesion_module_ts"],{

/***/ 4570:
/*!*******************************************************************!*\
  !*** ./src/app/pages/iniciosesion/iniciosesion-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IniciosesionPageRoutingModule": () => (/* binding */ IniciosesionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _iniciosesion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iniciosesion.page */ 290);




const routes = [
    {
        path: '',
        component: _iniciosesion_page__WEBPACK_IMPORTED_MODULE_0__.IniciosesionPage
    }
];
let IniciosesionPageRoutingModule = class IniciosesionPageRoutingModule {
};
IniciosesionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], IniciosesionPageRoutingModule);



/***/ }),

/***/ 4101:
/*!***********************************************************!*\
  !*** ./src/app/pages/iniciosesion/iniciosesion.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IniciosesionPageModule": () => (/* binding */ IniciosesionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _iniciosesion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./iniciosesion-routing.module */ 4570);
/* harmony import */ var _iniciosesion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iniciosesion.page */ 290);







let IniciosesionPageModule = class IniciosesionPageModule {
};
IniciosesionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _iniciosesion_routing_module__WEBPACK_IMPORTED_MODULE_0__.IniciosesionPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_iniciosesion_page__WEBPACK_IMPORTED_MODULE_1__.IniciosesionPage]
    })
], IniciosesionPageModule);



/***/ }),

/***/ 290:
/*!*********************************************************!*\
  !*** ./src/app/pages/iniciosesion/iniciosesion.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IniciosesionPage": () => (/* binding */ IniciosesionPage)
/* harmony export */ });
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _iniciosesion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iniciosesion.page.html?ngResource */ 6988);
/* harmony import */ var _iniciosesion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iniciosesion.page.scss?ngResource */ 3587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var _services_herramientas_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/herramientas-ui.service */ 8108);









let IniciosesionPage = class IniciosesionPage {
  constructor(formbuider, servicios, navCtrl, herramientasUI) {
    this.formbuider = formbuider;
    this.servicios = servicios;
    this.navCtrl = navCtrl;
    this.herramientasUI = herramientasUI; //esto es para no tener que ingresar usuario y contraseña mientras estemos en pruebas
    //creamos un objeto para guardar los valores default y luego con ngModel los dejamos como default

    this.credenciales = {
      correo: "",
      password: "" //correo : "diegoarbelaez.co@gmail.com",
      //password : "Juryzu57"

    };
    this.mensajesValidacion = {
      correo: [{
        type: "required",
        message: "Por favor ingrese su correo"
      }, {
        type: "pattern",
        message: "Este correo no es válido"
      }],
      password: [{
        type: "required",
        message: "Por favor ingrese su contraseña"
      }, {
        type: "minlength",
        message: "La contraseña es demasiado corta"
      }]
    };
  }

  login(credenciales) {
    var _this = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log("Estoy logeado");
      console.log(credenciales);
      console.log("Correo:" + credenciales.correo);
      console.log("Password:" + credenciales.password); //Llama el Servicio y envía el Usuario y Password

      const valido = yield _this.servicios.login(credenciales.correo, credenciales.password);

      if (valido) {
        //Pagina que se muestra cuando el login es OK
        _this.navCtrl.navigateRoot('/informacion', {
          animated: true
        });
      } else {
        //Lo que hace si el usuario no es correcto
        console.log("no debe dejarlo logear");

        _this.herramientasUI.mostrarAlerta("No encontrado", "Asegurate de haber escrito bien tus credenciales");
      }
    })();
  }

  ngOnInit() {
    this.validador = this.formbuider.group({
      correo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)]))
    });
  }

};

IniciosesionPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_3__.UsuarioService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _services_herramientas_ui_service__WEBPACK_IMPORTED_MODULE_4__.HerramientasUIService
}];

IniciosesionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-iniciosesion',
  template: _iniciosesion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_iniciosesion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], IniciosesionPage);


/***/ }),

/***/ 3587:
/*!**********************************************************************!*\
  !*** ./src/app/pages/iniciosesion/iniciosesion.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmljaW9zZXNpb24ucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6988:
/*!**********************************************************************!*\
  !*** ./src/app/pages/iniciosesion/iniciosesion.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>login</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"contenedorIniciarSesion\">\n\n    <form [formGroup]=\"validador\" (ngSubmit)=\"login(validador.value)\">\n\n      <ion-card>\n        <div class=\"contenedorLogo\">\n          <ion-img class=\"logoCSI\" src=\"assets/logo_csi_1.png\"></ion-img>\n        </div>\n        <p class=\"slogan\">Seguridad al Instante</p>\n      </ion-card>\n\n\n     \n        <ion-item>\n          <ion-label class=\"inputsFormulario\" position=\"floating\">Correo Electrónico</ion-label>\n          <!-- <ion-input name=\"correo\" class=\"inputsFormulario\" [(ngModel)]=\"datosLogin.correo\" required></ion-input> -->\n          <ion-input name=\"correo\" formControlName=\"correo\" class=\"inputsFormulario\" [(ngModel)]=\"credenciales.correo\"\n            required></ion-input>\n\n        </ion-item>\n        <div>\n          <ng-container *ngFor=\"let validation of mensajesValidacion.correo\">\n            <div class=\"mensajesError\"\n              *ngIf=\"validador.get('correo').hasError(validation.type) && (validador.get('correo').dirty || validador.get('correo').touched)\">\n              {{validation.message}}\n            </div>\n          </ng-container>\n        </div>\n\n\n        <ion-item>\n          <ion-label class=\"inputsFormulario\" position=\"floating\">Contraseña</ion-label>\n          <ion-input name=\"password\" formControlName=\"password\" class=\"inputsFormulario\" type=\"password\"\n            [(ngModel)]=\"credenciales.password\" autocomplete=\"password\" required>\n          </ion-input>\n        </ion-item>\n\n        <div>\n          <ng-container *ngFor=\"let validation of mensajesValidacion.password\">\n            <div class=\"mensajesError\"\n              *ngIf=\"validador.get('password').hasError(validation.type) && (validador.get('password').dirty || validador.get('password').touched)\">\n              {{validation.message}}\n            </div>\n          </ng-container>\n        </div>\n\n\n        <ion-button class=\"btn-iniciarSesion\" type=\"submit\" fill=\"solid\" shape=\"round\" expand=\"block\"\n          [disabled]=\"!validador.valid\">Iniciar Sesión\n\n        </ion-button>\n\n\n\n\n\n      <div class=\"registrate\">\n        <!-- <p>¿No tienes cuenta? <span class=\"negrilla\">Registrate</span></p> -->\n        <p>¿No tienes cuenta? <a routerLink=\"/signup\"><b>Registrate</b></a>\n      </div>\n    </form>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_iniciosesion_iniciosesion_module_ts.js.map