"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_agregar-contacto_agregar-contacto_module_ts"],{

/***/ 8859:
/*!***************************************************************************!*\
  !*** ./src/app/pages/agregar-contacto/agregar-contacto-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarContactoPageRoutingModule": () => (/* binding */ AgregarContactoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _agregar_contacto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-contacto.page */ 353);




const routes = [
    {
        path: '',
        component: _agregar_contacto_page__WEBPACK_IMPORTED_MODULE_0__.AgregarContactoPage
    }
];
let AgregarContactoPageRoutingModule = class AgregarContactoPageRoutingModule {
};
AgregarContactoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgregarContactoPageRoutingModule);



/***/ }),

/***/ 3848:
/*!*******************************************************************!*\
  !*** ./src/app/pages/agregar-contacto/agregar-contacto.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarContactoPageModule": () => (/* binding */ AgregarContactoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _agregar_contacto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-contacto-routing.module */ 8859);
/* harmony import */ var _agregar_contacto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-contacto.page */ 353);







let AgregarContactoPageModule = class AgregarContactoPageModule {
};
AgregarContactoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agregar_contacto_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgregarContactoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_agregar_contacto_page__WEBPACK_IMPORTED_MODULE_1__.AgregarContactoPage]
    })
], AgregarContactoPageModule);



/***/ }),

/***/ 353:
/*!*****************************************************************!*\
  !*** ./src/app/pages/agregar-contacto/agregar-contacto.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarContactoPage": () => (/* binding */ AgregarContactoPage)
/* harmony export */ });
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _agregar_contacto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-contacto.page.html?ngResource */ 6673);
/* harmony import */ var _agregar_contacto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agregar-contacto.page.scss?ngResource */ 6865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_herramientas_ui_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/herramientas-ui.service */ 8108);
/* harmony import */ var src_app_services_crud_contactos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/crud-contactos.service */ 1901);









let AgregarContactoPage = class AgregarContactoPage {
  constructor(formbuider, crudContactos, navCtrl, herramientasUI) {
    this.formbuider = formbuider;
    this.crudContactos = crudContactos;
    this.navCtrl = navCtrl;
    this.herramientasUI = herramientasUI;
    this.datos = {
      nombreContacto: 'Angélica Ceballos',
      telefonoContacto: '3174337569',
      descripcionContacto: 'Mi Amor'
    };
    this.mensajesValidacion = {
      nombreContacto: [{
        type: "required",
        message: "Por favor ingrese el Nombre del Contacto"
      }, {
        type: "pattern",
        message: "Este correo no es válido"
      }],
      telefonoContacto: [{
        type: "required",
        message: "Por favor ingrese el teléfono del Contacto"
      }, {
        type: "pattern",
        message: "Este teléfono no es válido"
      }],
      descripcionContacto: [{
        type: "required",
        message: "Por favor ingrese la descripción"
      }, {
        type: "minlength",
        message: "Descripción es demasiado corta"
      }]
    };
  }

  crearContacto(datos) {
    var _this = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log("Estoy logeado");
      // console.log(credenciales);
      // console.log("Correo:" + credenciales.correo);
      // console.log("Password:" + credenciales.password);
      //Llama el Servicio y envía el Usuario y Password
      yield _this.cargarIdUsuario();
      const valido = yield _this.crudContactos.crearContacto(datos.nombreContacto, datos.telefonoContacto, datos.descripcionContacto, _this.id_usuario);

      if (valido) {
        //Pagina que se muestra cuando el login es OK
        _this.navCtrl.navigateRoot('/submenu2', {
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
      nombreContacto: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)])),
      telefonoContacto: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)])),
      descripcionContacto: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(5)]))
    });
  }

  cargarIdUsuario() {
    var _this2 = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.id_usuario = yield _this2.crudContactos.cargarIdUsuario2();
    })();
  }

};

AgregarContactoPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: src_app_services_crud_contactos_service__WEBPACK_IMPORTED_MODULE_4__.CrudContactosService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _services_herramientas_ui_service__WEBPACK_IMPORTED_MODULE_3__.HerramientasUIService
}];

AgregarContactoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-agregar-contacto',
  template: _agregar_contacto_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_agregar_contacto_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AgregarContactoPage);


/***/ }),

/***/ 6865:
/*!******************************************************************************!*\
  !*** ./src/app/pages/agregar-contacto/agregar-contacto.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZ2FyLWNvbnRhY3RvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6673:
/*!******************************************************************************!*\
  !*** ./src/app/pages/agregar-contacto/agregar-contacto.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <p class=\"titulo_submenu1\">AGREGAR CONTACTO</p>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/panico\" text=\"Regresar\" color=\"secondary\">Regresar</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <form [formGroup]=\"validador\" (ngSubmit)=\"crearContacto(validador.value)\">\n    \n    <ion-card>\n      <div class=\"contenedorLogo\">\n        <ion-img class=\"logoCSI\" src=\"assets/logo_csi_1.png\"></ion-img>\n      </div>\n      <p class=\"slogan\">Seguridad al Instante</p>\n    </ion-card>\n\n\n    <div class=\"contenedorFormulario\">\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Nombre</ion-label>\n        <!-- <ion-input name=\"correo\" class=\"inputsFormulario\" [(ngModel)]=\"datosLogin.correo\" required></ion-input> -->\n        <ion-input name=\"nombreContacto\" formControlName=\"nombreContacto\" class=\"inputsFormulario\" required></ion-input>\n\n      </ion-item>\n      <div>\n          <ng-container *ngFor=\"let validation of mensajesValidacion.nombreContacto\">\n                <div class=\"mensajesError\" *ngIf=\"validador.get('nombreContacto').hasError(validation.type) && (validador.get('nombreContacto').dirty || validador.get('nombreContacto').touched)\">\n                   {{validation.message}}\n                </div>\n          </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Teléfono del Contacto</ion-label>\n        <!-- <ion-input name=\"correo\" class=\"inputsFormulario\" [(ngModel)]=\"datosLogin.correo\" required></ion-input> -->\n        <ion-input name=\"telefonoContacto\" type=\"number\" formControlName=\"telefonoContacto\" class=\"inputsFormulario\" required></ion-input>\n\n      </ion-item>\n      <div>\n          <ng-container *ngFor=\"let validation of mensajesValidacion.telefonoContacto\">\n                <div class=\"mensajesError\" *ngIf=\"validador.get('telefonoContacto').hasError(validation.type) && (validador.get('telefonoContacto').dirty || validador.get('telefonoContacto').touched)\">\n                   {{validation.message}}\n                </div>\n          </ng-container>\n      </div>\n\n\n      <ion-item>\n        <ion-label class=\"inputsFormulario\" position=\"floating\">Descripción</ion-label>\n        <ion-input name=\"descripcionContacto\" formControlName=\"descripcionContacto\" class=\"inputsFormulario\" required>\n        </ion-input>\n      </ion-item>\n\n      <div>\n      <ng-container *ngFor=\"let validation of mensajesValidacion.descripcionContacto\">\n           <div class=\"mensajesError\" *ngIf=\"validador.get('descripcionContacto').hasError(validation.type) && (validador.get('descripcionContacto').dirty || validador.get('descripcionContacto').touched)\">\n              {{validation.message}}\n           </div>\n       </ng-container>\n  </div>\n\n\n      <ion-button class=\"btn-iniciarSesion\" type=\"submit\" fill=\"solid\" shape=\"round\" expand=\"block\" [disabled]=\"!validador.valid\" >Crear Contacto\n      \n      </ion-button>\n\n  \n\n    </div>\n\n  </form>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_agregar-contacto_agregar-contacto_module_ts.js.map