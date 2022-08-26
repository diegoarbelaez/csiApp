"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_timer_timer_module_ts"],{

/***/ 7070:
/*!*****************************************************!*\
  !*** ./src/app/pages/timer/timer-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPageRoutingModule": () => (/* binding */ TimerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer.page */ 3449);




const routes = [
    {
        path: '',
        component: _timer_page__WEBPACK_IMPORTED_MODULE_0__.TimerPage
    }
];
let TimerPageRoutingModule = class TimerPageRoutingModule {
};
TimerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TimerPageRoutingModule);



/***/ }),

/***/ 3242:
/*!*********************************************!*\
  !*** ./src/app/pages/timer/timer.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPageModule": () => (/* binding */ TimerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer-routing.module */ 7070);
/* harmony import */ var _timer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.page */ 3449);







let TimerPageModule = class TimerPageModule {
};
TimerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _timer_routing_module__WEBPACK_IMPORTED_MODULE_0__.TimerPageRoutingModule
        ],
        declarations: [_timer_page__WEBPACK_IMPORTED_MODULE_1__.TimerPage]
    })
], TimerPageModule);



/***/ }),

/***/ 3449:
/*!*******************************************!*\
  !*** ./src/app/pages/timer/timer.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimerPage": () => (/* binding */ TimerPage)
/* harmony export */ });
/* harmony import */ var _Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _timer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer.page.html?ngResource */ 1147);
/* harmony import */ var _timer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.page.scss?ngResource */ 2919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 190);
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/usuario.service */ 5763);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ 2340);












const circleR = 80;
const circleDasharray = 2 * Math.PI * circleR;
const urlService = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.urlServices;
let TimerPage = class TimerPage {
  constructor(navCtrl, geolocation, http, storage, service) {
    this.navCtrl = navCtrl;
    this.geolocation = geolocation;
    this.http = http;
    this.storage = storage;
    this.service = service;
    this.time = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject('00:00');
    this.percent = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(100);
    this.state = 'stop'; //Variables de eventos

    this.evento1 = false; //Accidente de tránsito

    this.evento2 = false; //Atraco 

    this.evento3 = false; //Afección de Salud

    this.evento4 = false; //Persona Sospechosa

    this.evento5 = false; //Animal Perdido

    this.evento6 = false; //Persona Siguiendome
    //Nombres de eventos

    this.nombreEvento1 = 'Accidente de';
    this.nombreEvento2 = '';
    this.nombreEvento3 = '';
    this.nombreEvento4 = '';
    this.nombreEvento5 = '';
    this.nombreEvento6 = '';
    this.startDuration = 1;
    this.circleR = circleR;
    this.circleDasharray = circleDasharray;
    this.cargarIdUsuario();
  }

  ionViewWillEnter() {
    this.startTimer(1);
  }

  startTimer(duration) {
    this.state = 'start';
    clearInterval(this.interval);
    this.timer = duration * 15;
    this.updateTimeValue();
    this.interval = setInterval(() => {
      this.updateTimeValue();
    }, 1000);
  }

  updateTimeValue() {
    let minutes = this.timer / 60;
    let seconds = this.timer % 60;
    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);
    const text = minutes + ':' + seconds;
    this.time.next(text);
    const totalTime = this.startDuration * 15;
    const percentage = (totalTime - this.timer) / totalTime * 100;
    this.percent.next(percentage);
    console.log(percentage);
    this.valorProgress = percentage / 100;
    --this.timer;

    if (this.timer < -1) {
      //this.startTimer(this.startDuration);
      this.lanzarAlerta();
      this.stopTimer();
      this.navCtrl.navigateRoot('/confirmacion');
    }
  }

  lanzarAlerta() {
    console.log("Enviando Alerta..."); //Aquí está el código para enviar las coordenadas y lo que se obtenga de los eventos

    this.geolocation.getCurrentPosition().then(resp => {
      // resp.coords.latitude
      // resp.coords.longitude
      console.log("Latitud" + resp.coords.latitude);
      console.log("Longitud" + resp.coords.longitude);
      this.latitudCapturada = resp.coords.latitude;
      this.logintudCapturada = resp.coords.longitude; //envia la alerta al servidor

      const data = {
        tipo_evento: this.tipo_evento,
        latitud: this.latitudCapturada,
        longitud: this.logintudCapturada,
        id_usuario: this.id_usuario
      };
      console.log(data);
      const URL = urlService + 'alerta.php';
      return new Promise(resolve => {
        this.http.post(URL, data).subscribe( /*#__PURE__*/function () {
          var _ref = (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resp) {
            console.log("Respuesta Servidor " + resp['confirmacion'] + resp['sql']);

            if (resp['confirmacion'] == 'alertarecibida') {
              console.log("recibió la alerta bien");
              resolve(true);
            } else {
              console.log("Error en el servidor" + resp["confirmacion"]);
              resolve(false);
            }
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
      console.log("fin...");
    }).catch(error => {
      console.log('Error getting location', error);
    }); //trael el id del usuario
  }

  percentageOffset(percent) {
    const percentFloat = percent / 100;
    return circleDasharray * (1 - percentFloat);
  }

  stopTimer() {
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

  cambiarEstado(evento_reportar) {
    switch (evento_reportar) {
      case 1:
        this.evento1 = !this.evento1;
        this.evento2 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.evento6 = false;
        this.tipo_evento = 1;
        break;

      case 2:
        this.evento2 = !this.evento2;
        this.evento1 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.evento6 = false;
        this.tipo_evento = 2;
        break;

      case 3:
        this.evento3 = !this.evento3;
        this.evento1 = false;
        this.evento2 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.evento6 = false;
        this.tipo_evento = 3;
        break;

      case 4:
        this.evento4 = !this.evento4;
        this.evento1 = false;
        this.evento2 = false;
        this.evento3 = false;
        this.evento5 = false;
        this.evento6 = false;
        this.tipo_evento = 4;
        break;

      case 5:
        this.evento5 = !this.evento5;
        this.evento1 = false;
        this.evento2 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento6 = false;
        this.tipo_evento = 5;
        break;

      case 6:
        this.evento6 = !this.evento6;
        this.evento1 = false;
        this.evento2 = false;
        this.evento3 = false;
        this.evento4 = false;
        this.evento5 = false;
        this.tipo_evento = 6;
        break;
    }
  }

  cargarIdUsuario() {
    var _this = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.storage.create();
      _this.id_usuario = (yield _this.storage.get('id_usuario')) || null;
    })();
  }

  ngOnInit() {
    this.startTimer(this.startDuration);
    this.cargarNombreServicios();
  }

  cargarNombreServicios() {
    var _this2 = this;

    return (0,_Applications_XAMPP_xamppfiles_htdocs_CSICliente_csiapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.nombreEventos = yield _this2.service.getNombreAlertas();
      console.log(_this2.nombreEventos);
      _this2.nombreEvento1 = _this2.nombreEventos[0]["descripcion"];
      _this2.nombreEvento2 = _this2.nombreEventos[1]["descripcion"];
      _this2.nombreEvento3 = _this2.nombreEventos[2]["descripcion"];
      _this2.nombreEvento4 = _this2.nombreEventos[3]["descripcion"];
      _this2.nombreEvento5 = _this2.nombreEventos[4]["descripcion"];
      _this2.nombreEvento6 = _this2.nombreEventos[5]["descripcion"];
    })();
  }

  cargarImagen() {
    console.log("Carga imagen iniciada");
    clearInterval(this.interval);
    this.time.next('00:00');
    this.state = 'stop';
  }

};

TimerPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__.Geolocation
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient
}, {
  type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage
}, {
  type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_5__.UsuarioService
}];

TimerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-timer',
  template: _timer_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_timer_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TimerPage);


/***/ }),

/***/ 2919:
/*!********************************************************!*\
  !*** ./src/app/pages/timer/timer.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aW1lci5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1147:
/*!********************************************************!*\
  !*** ./src/app/pages/timer/timer.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <ion-row class=\"ion-justify-content-center\">\n    <ion-card>\n      <ion-img class=\"logoCSI\" src=\"assets/logo_csi_1.png\"></ion-img>\n      <p class=\"slogan\">Seguridad al Instante</p>\n    </ion-card>\n    <p class=\"activandoText\" class=\"texto_apoyo1\">\n      <b>ACTIVANDO BOTÓN DE PÁNICO</b>\n    </p>\n    <ion-progress-bar value=\"{{valorProgress}}\"></ion-progress-bar>\n    <div class=\"animate__animated animate__backInLeft\">\n      <svg id=\"progress-circle\" width=\"20vh\" heigth=\"20vh\" viewBox=\"0 0 200 200\">\n        <linearGradient id=\"linearColors1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\">\n          <stop offset=\"0%\" stop-color=\"#A21D1D\"></stop>\n          <stop offset=\"100%\" stop-color=\"#FF0000\"></stop>\n        </linearGradient>\n        <circle cx=\"50%\" cy=\"50%\" [attr.r]=\"circleR\" fill=\"none\" stroke=\"#f3f3f3\" stroke-width=\"12\" />\n        <circle cx=\"50%\" cy=\"50%\" [attr.r]=\"circleR\" fill=\"none\" stroke=\"url(#linearColors1)\" stroke-width=\"12\"\n          stroke-linecap=\"round\" [attr.stroke-dasharray]=\"circleDasharray\"\n          [attr.stroke-dashoffset]=\"percentageOffset(percent|async)\" />\n        <text x=\"50%\" y=\"55%\" class=\"timer-text\">{{time |async}}</text>\n      </svg>\n    </div>\n  </ion-row>\n\n\n  <ion-chip class=\"animate__animated animate__fadeInLeft\"\n    [ngClass]=\"evento1 == true ? 'eventoActivado': 'eventoDesactivado'\" (click)=\"cambiarEstado(1)\">\n    <ion-label>{{nombreEvento1}}</ion-label>\n  </ion-chip>\n  <ion-chip class=\"animate__animated animate__fadeInLeft\"\n    [ngClass]=\"evento2 == true ? 'eventoActivado': 'eventoDesactivado'\" (click)=\"cambiarEstado(2)\">\n    <ion-label>{{nombreEvento2}}</ion-label>\n  </ion-chip>\n  <ion-chip class=\"animate__animated animate__fadeInLeft\"\n    [ngClass]=\"evento3 == true ? 'eventoActivado': 'eventoDesactivado'\" (click)=\"cambiarEstado(3)\">\n    <ion-label>{{nombreEvento3}}</ion-label>\n  </ion-chip>\n  <ion-chip class=\"animate__animated animate__fadeInRight\"\n    [ngClass]=\"evento4 == true ? 'eventoActivado': 'eventoDesactivado'\" (click)=\"cambiarEstado(4)\">\n    <ion-label>{{nombreEvento4}}</ion-label>\n  </ion-chip>\n  <ion-chip class=\"animate__animated animate__fadeInRight\"\n    [ngClass]=\"evento5 == true ? 'eventoActivado': 'eventoDesactivado'\" (click)=\"cambiarEstado(5)\">\n    <ion-label>{{nombreEvento5}}</ion-label>\n  </ion-chip>\n  <ion-chip class=\"animate__animated animate__fadeInRight\"\n    [ngClass]=\"evento6 == true ? 'eventoActivado': 'eventoDesactivado'\" (click)=\"cambiarEstado(6)\">\n    <ion-label>{{nombreEvento6}}</ion-label>\n  </ion-chip>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"cargarImagen()\" fill=\"solid\" shape=\"round\" expand=\"full\"\n          class=\"btn-AceptarInformacion\">\n          <ion-icon class=\"ion-padding\" name=\"images-outline\"></ion-icon>Galeria\n          \n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"cargarImagen()\" fill=\"solid\" shape=\"round\" expand=\"full\"\n          class=\"btn-AceptarInformacion\">\n          <ion-icon class=\"ion-padding\" name=\"camera-outline\"></ion-icon>Tomar\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n<ion-footer>\n\n  <ion-button class=\"ion-padding\" (click)=\"stopTimer()\" shape=\"round\" routerLink=\"/panico\" expand=\"full\"\n    class=\"cancelar\" fill=\"clear\" shape=\"round\">\n    CANCELAR\n  </ion-button>\n\n</ion-footer>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_timer_timer_module_ts.js.map