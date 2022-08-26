"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_submenu2_submenu2_module_ts"],{

/***/ 9294:
/*!***********************************************************!*\
  !*** ./src/app/pages/submenu2/submenu2-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submenu2PageRoutingModule": () => (/* binding */ Submenu2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _submenu2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submenu2.page */ 4468);




const routes = [
    {
        path: '',
        component: _submenu2_page__WEBPACK_IMPORTED_MODULE_0__.Submenu2Page
    }
];
let Submenu2PageRoutingModule = class Submenu2PageRoutingModule {
};
Submenu2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Submenu2PageRoutingModule);



/***/ }),

/***/ 3230:
/*!***************************************************!*\
  !*** ./src/app/pages/submenu2/submenu2.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submenu2PageModule": () => (/* binding */ Submenu2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _submenu2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./submenu2-routing.module */ 9294);
/* harmony import */ var _submenu2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submenu2.page */ 4468);







let Submenu2PageModule = class Submenu2PageModule {
};
Submenu2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _submenu2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Submenu2PageRoutingModule
        ],
        declarations: [_submenu2_page__WEBPACK_IMPORTED_MODULE_1__.Submenu2Page]
    })
], Submenu2PageModule);



/***/ }),

/***/ 4468:
/*!*************************************************!*\
  !*** ./src/app/pages/submenu2/submenu2.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Submenu2Page": () => (/* binding */ Submenu2Page)
/* harmony export */ });
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _submenu2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submenu2.page.html?ngResource */ 3271);
/* harmony import */ var _submenu2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./submenu2.page.scss?ngResource */ 8487);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_crud_contactos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/crud-contactos.service */ 1901);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 190);








let Submenu2Page = class Submenu2Page {
  constructor(crud, storage) {
    this.crud = crud;
    this.storage = storage;
    this.token = null; //this.contactos = this.crud.getContactos();

    this.cargarIdUsuario();
    console.log("submenu2::OnInit, acaba de cargar id_usuario");
    console.log("submenu2::OnInit, id_usuario=" + this.id_usuario); //this.contactos = this.crud.getContactos3(this.id_usuario);
    //console.log("submenu2::OnInit, acaba de llamar getContactos3");
  }

  ngOnInit() {//this.recargar();
  }

  ionViewWillEnter() {
    this.cargarIdUsuario();
  }

  cargarIdUsuario() {
    var _this = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.id_usuario = yield _this.crud.cargarIdUsuario2();
      console.log("submenu2::cargarIdUsuario -> id_usuario:" + _this.id_usuario); //cargamos de una vez el listado de usuarios

      _this.contactos = _this.crud.getContactos3(_this.id_usuario);
    })();
  }
  /*async cargarToken() {
    console.log("CargarToken");
    await this.storage.create();
    this.token = await this.storage.get('token') || null;
     }*/

  /*async cargarIdUsuario() {
    await this.storage.create();
    this.id_usuario = await this.storage.get('id_usuario') || null;
    console.log("cargarIdUsuario - completado, cargado "+this.id_usuario)
     }*/


  eliminarContacto(event) {
    this.crud.eliminarContacto(event["id_contacto"]);
    this.listado.closeSlidingItems(); //Vuelve a recuperar los contactos
    //this.contactos = this.crud.getContactos3(this.id_usuario);
    //Vuel

    this.cargarIdUsuario();
  }

};

Submenu2Page.ctorParameters = () => [{
  type: _services_crud_contactos_service__WEBPACK_IMPORTED_MODULE_3__.CrudContactosService
}, {
  type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage
}];

Submenu2Page.propDecorators = {
  listado: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonList]
  }]
};
Submenu2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-submenu2',
  template: _submenu2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_submenu2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], Submenu2Page);


/***/ }),

/***/ 8487:
/*!**************************************************************!*\
  !*** ./src/app/pages/submenu2/submenu2.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJtZW51Mi5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 3271:
/*!**************************************************************!*\
  !*** ./src/app/pages/submenu2/submenu2.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <p class=\"titulo_submenu1\">EDITAR TUS CONTACTOS</p>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/panico\" text=\"Regresar\" color=\"secondary\">Regresar</ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  \n  <ion-list class=\"listaSubmenu1\">\n    <ion-button class=\"boton_agregar_contactos\" shape=\"round\" expand=\"block\" [routerLink]=\"['/agregar-contacto']\" routerLinkActive=\"router-link-active\"  expand=\"block\" fill=\"clear\" shape=\"round\">\n      Agregar Contactos\n    </ion-button>\n    <ion-item-sliding *ngFor=\"let item of contactos | async\">\n      <ion-item-options side=\"end\">\n        <ion-item-option color=\"danger\" (click)=\"eliminarContacto(item)\">\n          <ion-icon name=\"trash-outline\" slot=\"icon-only\"></ion-icon>\n          Eliminar\n        </ion-item-option>\n      </ion-item-options>\n      <ion-item>\n        <ion-label color=\"light\">\n          <h3>{{item.nombreContacto}}</h3>\n          <p class=\"apellido_lista\">{{item.descripcionContacto}}</p>\n        </ion-label>\n        <ion-label color=\"secondary\" slot=\"end\" class=\"ion-text-end texto-pequeno\">{{item.telefonoContacto}}</ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_submenu2_submenu2_module_ts.js.map