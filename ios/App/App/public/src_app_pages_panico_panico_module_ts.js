"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_panico_panico_module_ts"],{

/***/ 7318:
/*!*******************************************************!*\
  !*** ./src/app/pages/panico/panico-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanicoPageRoutingModule": () => (/* binding */ PanicoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _panico_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panico.page */ 4437);




const routes = [
    {
        path: '',
        component: _panico_page__WEBPACK_IMPORTED_MODULE_0__.PanicoPage
    }
];
let PanicoPageRoutingModule = class PanicoPageRoutingModule {
};
PanicoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PanicoPageRoutingModule);



/***/ }),

/***/ 9107:
/*!***********************************************!*\
  !*** ./src/app/pages/panico/panico.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanicoPageModule": () => (/* binding */ PanicoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _panico_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panico-routing.module */ 7318);
/* harmony import */ var _panico_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panico.page */ 4437);







let PanicoPageModule = class PanicoPageModule {
};
PanicoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _panico_routing_module__WEBPACK_IMPORTED_MODULE_0__.PanicoPageRoutingModule
        ],
        declarations: [_panico_page__WEBPACK_IMPORTED_MODULE_1__.PanicoPage]
    })
], PanicoPageModule);



/***/ }),

/***/ 4437:
/*!*********************************************!*\
  !*** ./src/app/pages/panico/panico.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanicoPage": () => (/* binding */ PanicoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _panico_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panico.page.html?ngResource */ 2097);
/* harmony import */ var _panico_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panico.page.scss?ngResource */ 2663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let PanicoPage = class PanicoPage {
    constructor() {
        this.mostrarAyuda = true;
    }
    ngOnInit() {
    }
};
PanicoPage.ctorParameters = () => [];
PanicoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-panico',
        template: _panico_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_panico_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PanicoPage);



/***/ }),

/***/ 2663:
/*!**********************************************************!*\
  !*** ./src/app/pages/panico/panico.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "ion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 130px;\n  height: 130px;\n  background-color: rgb(162, 29, 29);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmljby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7QUFDSiIsImZpbGUiOiJwYW5pY28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbltzaGFwZT1jaXJjbGVdIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAxMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYyLCAyOSwgMjkpO1xufSJdfQ== */";

/***/ }),

/***/ 2097:
/*!**********************************************************!*\
  !*** ./src/app/pages/panico/panico.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <!-- <ion-title>login</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"divContenedorPanico\">\n    <ion-card>\n      <ion-img class=\"logoCSI\" src=\"assets/logo_csi_1.png\"></ion-img>\n      <p class=\"slogan\">Seguridad al Instante</p>\n    </ion-card>\n    <div class=\"divContenedorBoton animate__animated animate__zoomInUp\">\n      <div style=\"text-align:center\">\n        <span class=\"botonPanico\">\n          \n            <!--  \n            <ion-button class=\"powePanico\">\n              <ion-icon name=\"power-outline\"></ion-icon>\n            </ion-button> -->\n\n            <ion-button shape=\"circle\" [routerLink]=\"['/timer']\">\n              <ion-icon class=\"powePanico\"  routerLinkActive=\"router-link-active\"  slot=\"icon-only\" name=\"power-outline\"></ion-icon>\n            </ion-button>\n          \n        </span>\n      </div>\n    </div>\n    <div *ngIf=\"mostrarAyuda\" class=\"divContenedorBoton animate__animated animate__tada\">\n      <div style=\"text-align:center\">\n        <div class=\"chatPanico\">\n          <p><b>Estamos aquí para ayudarte</b></p>\n          <p>Siempre que tengas una situación de riesgo, aquí estaremos para apoyarte</p>\n        </div>\n      </div>\n    </div>\n\n    <!-- \n    <ion-button class=\"btn-iniciarSesion2\" [routerLink]=\"['/submenu1']\" routerLinkActive=\"router-link-active\"\n      fill=\"solid\" shape=\"round\" expand=\"block\">Gestionar mi Cuenta</ion-button> -->\n\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-button class=\"gestionarCuenta\" shape=\"round\" [routerLink]=\"['/submenu1']\" expand=\"full\" fill=\"clear\" shape=\"round\">\n    Gestionar mi Cuenta\n  </ion-button>\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_panico_panico_module_ts.js.map