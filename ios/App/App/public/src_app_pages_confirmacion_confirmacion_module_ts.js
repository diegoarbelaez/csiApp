"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_confirmacion_confirmacion_module_ts"],{

/***/ 8745:
/*!*******************************************************************!*\
  !*** ./src/app/pages/confirmacion/confirmacion-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacionPageRoutingModule": () => (/* binding */ ConfirmacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _confirmacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmacion.page */ 2509);




const routes = [
    {
        path: '',
        component: _confirmacion_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmacionPage
    }
];
let ConfirmacionPageRoutingModule = class ConfirmacionPageRoutingModule {
};
ConfirmacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmacionPageRoutingModule);



/***/ }),

/***/ 463:
/*!***********************************************************!*\
  !*** ./src/app/pages/confirmacion/confirmacion.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacionPageModule": () => (/* binding */ ConfirmacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _confirmacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmacion-routing.module */ 8745);
/* harmony import */ var _confirmacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmacion.page */ 2509);







let ConfirmacionPageModule = class ConfirmacionPageModule {
};
ConfirmacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirmacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmacionPageRoutingModule
        ],
        declarations: [_confirmacion_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmacionPage]
    })
], ConfirmacionPageModule);



/***/ }),

/***/ 2509:
/*!*********************************************************!*\
  !*** ./src/app/pages/confirmacion/confirmacion.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmacionPage": () => (/* binding */ ConfirmacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _confirmacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmacion.page.html?ngResource */ 1768);
/* harmony import */ var _confirmacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmacion.page.scss?ngResource */ 4742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let ConfirmacionPage = class ConfirmacionPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmacionPage.ctorParameters = () => [];
ConfirmacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-confirmacion',
        template: _confirmacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirmacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmacionPage);



/***/ }),

/***/ 4742:
/*!**********************************************************************!*\
  !*** ./src/app/pages/confirmacion/confirmacion.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "ion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 130px;\n  height: 130px;\n  background-color: rgb(29, 162, 39);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hY2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFDSiIsImZpbGUiOiJjb25maXJtYWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbltzaGFwZT1jaXJjbGVdIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjksIDE2MiwgMzkpO1xufSJdfQ== */";

/***/ }),

/***/ 1768:
/*!**********************************************************************!*\
  !*** ./src/app/pages/confirmacion/confirmacion.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>login</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"divContenedorPanico\">\n    <ion-card>\n      <ion-img class=\"logoCSI\" src=\"assets/logo_csi_1.png\"></ion-img>\n      <p class=\"slogan\">Seguridad al Instante</p>\n    </ion-card>\n    <p class=\"activandoText\" class=\"texto_apoyo1\">\n      <b>BOTÓN DE PÁNICO ACTIVADO</b>\n    </p>\n\n\n    <div class=\"pastillaConfirmacion ion-margin animate__animated animate__fadeIn\">\n      <p class=\"ion-padding\" class=\"texto_apoyo2\">\n        La alerta ha sido enviada, si te es posible ten tu teléfono a la mano, te contactaremos enseguida.\n        Ubicate en un lugar seguro, printo CSI estará contigo.\n        </p>\n    </div>\n\n\n\n\n\n    <div class=\"divContenedorBoton animate__animated animate__shakeX\">\n      <div style=\"text-align:center\">\n        <span class=\"botonConfirmacion\">\n\n          <!--  \n            <ion-button class=\"powePanico\">\n              <ion-icon name=\"power-outline\"></ion-icon>\n            </ion-button> -->\n\n          <ion-button shape=\"circle\" [routerLink]=\"['/panico']\">\n            <ion-icon class=\"poweConfirmacion\" routerLinkActive=\"router-link-active\" slot=\"icon-only\"\n              name=\"checkmark-circle-outline\"></ion-icon>\n          </ion-button>\n\n        </span>\n      </div>\n    </div>\n\n    <p class=\"activandoText\" class=\"texto_apoyo1\">\n      <b>ATENCIÓN</b>\n    </p>\n\n    <div class=\"pastillaConfirmacion ion-margin animate__animated animate__fadeIn\">\n      <p class=\"texto_apoyo3\">\n        Una falsa alarma nos pone en riesgo a todos, utiliza el botón de pánico\n        única y exclusivamente cuando estés en una situación de riesgo inminente        </p>\n    </div>\n  \n\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-button class=\"ion-padding\" shape=\"round\" routerLink=\"/panico\" expand=\"full\" class=\"continuar\" fill=\"clear\"\n    shape=\"round\">\n    CONTINUAR\n  </ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_confirmacion_confirmacion_module_ts.js.map