"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_submenu1_submenu1_module_ts"],{

/***/ 843:
/*!***********************************************************!*\
  !*** ./src/app/pages/submenu1/submenu1-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submenu1PageRoutingModule": () => (/* binding */ Submenu1PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _submenu1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submenu1.page */ 5558);




const routes = [
    {
        path: '',
        component: _submenu1_page__WEBPACK_IMPORTED_MODULE_0__.Submenu1Page
    }
];
let Submenu1PageRoutingModule = class Submenu1PageRoutingModule {
};
Submenu1PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Submenu1PageRoutingModule);



/***/ }),

/***/ 5752:
/*!***************************************************!*\
  !*** ./src/app/pages/submenu1/submenu1.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submenu1PageModule": () => (/* binding */ Submenu1PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _submenu1_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submenu1-routing.module */ 843);
/* harmony import */ var _submenu1_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submenu1.page */ 5558);







let Submenu1PageModule = class Submenu1PageModule {
};
Submenu1PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _submenu1_routing_module__WEBPACK_IMPORTED_MODULE_0__.Submenu1PageRoutingModule
        ],
        declarations: [_submenu1_page__WEBPACK_IMPORTED_MODULE_1__.Submenu1Page]
    })
], Submenu1PageModule);



/***/ }),

/***/ 5558:
/*!*************************************************!*\
  !*** ./src/app/pages/submenu1/submenu1.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submenu1Page": () => (/* binding */ Submenu1Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _submenu1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submenu1.page.html?ngResource */ 9014);
/* harmony import */ var _submenu1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submenu1.page.scss?ngResource */ 3057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);






let Submenu1Page = class Submenu1Page {
    constructor(storage, navCtrl) {
        this.storage = storage;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    logout() {
        this.storage.clear();
        this.navCtrl.navigateRoot('/login', { animated: true });
    }
};
Submenu1Page.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__.Storage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
Submenu1Page = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-submenu1',
        template: _submenu1_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_submenu1_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Submenu1Page);



/***/ }),

/***/ 3057:
/*!**************************************************************!*\
  !*** ./src/app/pages/submenu1/submenu1.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJtZW51MS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9014:
/*!**************************************************************!*\
  !*** ./src/app/pages/submenu1/submenu1.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <p class=\"titulo_submenu1\">MENÚ DE OPCIONES</p> \n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/panico\" text=\"Regresar\" color=\"secondary\" >Regresar</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list class=\"listaSubmenu1\">\n    <ion-item>\n      <ion-icon color=\"secondary\" slot=\"start\" name=\"people-outline\"></ion-icon>\n      <ion-label color=\"light\" routerLink=\"/submenu2\" >Mis Contactos</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon color=\"secondary\" slot=\"start\" name=\"create-outline\"></ion-icon>\n      <ion-label color=\"light\" routerLink=\"/editarperfil\" >Editar mi Perfil</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon color=\"secondary\" slot=\"start\" name=\"log-out-outline\"></ion-icon>\n      <ion-label color=\"light\" (click)='logout()' >Cerrar Sesión</ion-label>\n    </ion-item>\n  </ion-list>\n\n\n  \n\n  \n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_submenu1_submenu1_module_ts.js.map