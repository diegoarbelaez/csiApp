"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_informacion_informacion_module_ts"],{

/***/ 1443:
/*!*****************************************************************!*\
  !*** ./src/app/pages/informacion/informacion-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionPageRoutingModule": () => (/* binding */ InformacionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _informacion_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion.page */ 44);




const routes = [
    {
        path: '',
        component: _informacion_page__WEBPACK_IMPORTED_MODULE_0__.InformacionPage
    }
];
let InformacionPageRoutingModule = class InformacionPageRoutingModule {
};
InformacionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InformacionPageRoutingModule);



/***/ }),

/***/ 7325:
/*!*********************************************************!*\
  !*** ./src/app/pages/informacion/informacion.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionPageModule": () => (/* binding */ InformacionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _informacion_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion-routing.module */ 1443);
/* harmony import */ var _informacion_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informacion.page */ 44);







let InformacionPageModule = class InformacionPageModule {
};
InformacionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _informacion_routing_module__WEBPACK_IMPORTED_MODULE_0__.InformacionPageRoutingModule
        ],
        declarations: [_informacion_page__WEBPACK_IMPORTED_MODULE_1__.InformacionPage]
    })
], InformacionPageModule);



/***/ }),

/***/ 44:
/*!*******************************************************!*\
  !*** ./src/app/pages/informacion/informacion.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InformacionPage": () => (/* binding */ InformacionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _informacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./informacion.page.html?ngResource */ 8406);
/* harmony import */ var _informacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./informacion.page.scss?ngResource */ 8538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let InformacionPage = class InformacionPage {
    constructor() { }
    ngOnInit() {
    }
};
InformacionPage.ctorParameters = () => [];
InformacionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-informacion',
        template: _informacion_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_informacion_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InformacionPage);



/***/ }),

/***/ 8538:
/*!********************************************************************!*\
  !*** ./src/app/pages/informacion/informacion.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".bg-class {\n  --background: linear-gradient(0deg, rgba(0, 121, 251, 1) 0%, rgba(28, 57, 87, 1) 100%) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWFjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlHQUFBO0FBQ0oiLCJmaWxlIjoiaW5mb3JtYWNpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWNsYXNzIHtcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDEyMSwgMjUxLCAxKSAwJSwgcmdiYSgyOCwgNTcsIDg3LCAxKSAxMDAlKSAhaW1wb3J0YW50O1xufSJdfQ== */";

/***/ }),

/***/ 8406:
/*!********************************************************************!*\
  !*** ./src/app/pages/informacion/informacion.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-class\">\n\n  <div class=\"divContenedorInformacion\">\n\n    <ion-card class=\"animate__animated animate__backInDown\">\n      <ion-card-header>\n        <ion-card-title>TU SEGURIDAD NUESTRA PRIORIDAD</ion-card-title>\n      </ion-card-header>\n\n      <ion-card-content>\n        <p class=\"textoInformacion\">\n          Esta aplicación te brinda todas las posibilidades para que te sientas seguro en cualquier sitio…\n        </p>\n        <br>\n        <p class=\"textoInformacionNegrita\">\n          Recomendaciones:\n          <br>\n        </p>\n        <br>\n        <p class=\"textoInformacion\">\n          Tendrás un botón de pánico, pero debes tener autocuidado.\n        </p>\n        <br>\n        <p class=\"textoInformacion\">\n          Nuestra promesa de valor es que tendrás a un agente CSI en segundos contactándote.\n        </p>\n        <br>\n        <p class=\"textoInformacion\">\n          Ten a la mano tu red de apoyo actualizada, para que sea más fácil asistirte\n        </p>\n        <br>\n        <p class=\"textoInformacion\">\n          CSI no es una aplicación que garantice los resultados, pero si los medios para que puedas alertar a tus seres\n          queridos cuando estés en situación de riesgo inminente. Aceptar Política de Privacidad y Términos y\n          condiciones.\n        </p>\n        <ion-button class=\"btn-AceptarInformacion\" fill=\"solid\" shape=\"round\" expand=\"block\" routerLink=\"/panico\">Aceptar y\n          Continuar</ion-button>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_informacion_informacion_module_ts.js.map