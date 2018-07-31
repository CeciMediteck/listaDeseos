webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgregarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_deseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_lista_model__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_lista_item_model__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AgregarPage = /** @class */ (function () {
    function AgregarPage(deseosService, navParams) {
        this.deseosService = deseosService;
        this.navParams = navParams;
        var titulo = this.navParams.get("titulo");
        if (this.navParams.get("lista")) {
            this.lista = this.navParams.get("lista");
        }
        else {
            this.lista = new __WEBPACK_IMPORTED_MODULE_2__models_lista_model__["a" /* Lista */](titulo); //Se crea una lista
            this.deseosService.agregarLista(this.lista); //grabar la nueva lista
        }
    }
    AgregarPage.prototype.agregarItem = function () {
        if (this.nombreItem.length === 0) {
            return;
        }
        var nuevoItem = new __WEBPACK_IMPORTED_MODULE_4__models_lista_item_model__["a" /* ListaItem */](this.nombreItem);
        //grabar dentro de la lista
        this.lista.items.push(nuevoItem);
        this.deseosService.guardarStorage();
        this.nombreItem = ""; //Borra lo que se escribe en el campo
        //console.log(this.nombreItem);
    };
    AgregarPage.prototype.actualizarTarea = function (item) {
        item.completado = !item.completado;
        //contar tareas pendientes de la lista
        var pendientes = this.lista.items.filter(function (itemData) {
            return !itemData.completado; //si no esta completado
        }).length; //retorna elementos sin el check
        if (pendientes === 0) {
            //lista completada 
            this.lista.terminada = true;
            this.lista.terminadaEn = new Date();
        }
        else {
            //no terminada
            this.lista.terminada = false;
            this.lista.terminadaEn = null;
        }
        this.deseosService.guardarStorage();
    };
    AgregarPage.prototype.borrar = function (idx) {
        this.lista.items.splice(idx, 1);
        this.deseosService.guardarStorage();
    };
    AgregarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-agregar",template:/*ion-inline-start:"C:\Users\Cecilia\Documents\GitHub\deseos\src\pages\agregar\agregar.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title> {{ lista.titulo }} </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-list-header>\n\n            Tareas por hacer\n\n        </ion-list-header>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label floating> Nuevo Item </ion-label>\n\n            <ion-input [(ngModel)]="nombreItem" type="text" (keyup.enter)="agregarItem()">\n\n            </ion-input>\n\n\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n\n\n    <ion-list *ngIf="lista.items.length > 0">\n\n\n\n        <ion-list-header>\n\n            Tareas por hacer\n\n        </ion-list-header>\n\n\n\n        <!--Para deslizar y aparecer mas botones-->\n\n        <ion-item-sliding *ngFor="let item of lista.items; let i = index" class="animated fadeInDown">\n\n            <button ion-item detail-none (click)="actualizarTarea(item)">\n\n                <ion-icon *ngIf="item.completado" name="checkbox-outline" item-start></ion-icon>\n\n                <ion-icon *ngIf="!item.completado" name="square-outline" item-start></ion-icon>\n\n                    {{ item.desc }}\n\n                        \n\n            </button>\n\n\n\n            <!--bOTON APARECE AL DESLIZAR-->\n\n            <ion-item-options side="right">\n\n                <button (click)="borrar( i )" ion-button color="danger">\n\n                    <ion-icon name="close"></ion-icon>\n\n                </button>\n\n\n\n            </ion-item-options>\n\n\n\n        </ion-item-sliding>\n\n\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cecilia\Documents\GitHub\deseos\src\pages\agregar\agregar.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_deseos_service__["a" /* DeseosService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], AgregarPage);
    return AgregarPage;
}());

//# sourceMappingURL=agregar.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__terminados_terminados_component__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__pendientes_pendientes_component__["a" /* PendientesPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__terminados_terminados_component__["a" /* TerminadosPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Cecilia\Documents\GitHub\deseos\src\pages\tabs\tabs.html"*/'<ion-tabs color="primary">\n    <ion-tab [root]="tab1Root" tabTitle="Pendientes" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Terminados" tabIcon="information-circle"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\Cecilia\Documents\GitHub\deseos\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PendientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_deseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agregar_agregar_component__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PendientesPage = /** @class */ (function () {
    function PendientesPage(deseosService, navCtrl, alertCtrl) {
        this.deseosService = deseosService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    PendientesPage.prototype.agregarLista = function () {
        var _this = this;
        //Pop up para crear notas
        var alerta = this.alertCtrl.create({
            title: 'Nueva lita',
            message: 'Nombre de la nueva lista que desea',
            inputs: [{
                    name: 'titulo',
                    placeholder: 'Nombre de la lista'
                }],
            buttons: [{
                    text: 'Cancelar'
                }, {
                    text: 'Agregar',
                    handler: function (data) {
                        //Vlidacion para no recibir cadenas vacias
                        if (data.titulo.length === 0) {
                            return;
                        }
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__agregar_agregar_component__["a" /* AgregarPage */], {
                            titulo: data.titulo
                        });
                        //console.log(data);
                    }
                }]
        });
        alerta.present();
    };
    PendientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pendientes',template:/*ion-inline-start:"C:\Users\Cecilia\Documents\GitHub\deseos\src\pages\pendientes\pendientes.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title> Pendientes </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n    <img src="../../assets/imgs/pendientes.jpg">\n\n\n\n    <app-listas></app-listas>\n\n\n\n\n\n    <ion-fab bottom right>\n\n        <button (click)="agregarLista()" ion-fab>\n\n            <ion-icon name="add"></ion-icon>\n\n        </button>\n\n\n\n    </ion-fab>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cecilia\Documents\GitHub\deseos\src\pages\pendientes\pendientes.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_deseos_service__["a" /* DeseosService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], PendientesPage);
    return PendientesPage;
}());

//# sourceMappingURL=pendientes.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_deseos_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminadosPage = /** @class */ (function () {
    function TerminadosPage(deseosService) {
        this.deseosService = deseosService;
    }
    TerminadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-terminados",template:/*ion-inline-start:"C:\Users\Cecilia\Documents\GitHub\deseos\src\pages\terminados\terminados.component.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title> Terminados</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="../../assets/imgs/completados.jpg">\n\n    <ion-list>\n\n        <button ion-item *ngFor="let lista of deseosService.listas | filtroCompletado: true" (click)="listaSeleccionada(lista)">\n\n          {{ lista.titulo }}\n\n        </button>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title> Terminados</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <img src="../../assets/imgs/completados.jpg">\n\n\n\n    <app-listas [terminada]="true"></app-listas>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Cecilia\Documents\GitHub\deseos\src\pages\terminados\terminados.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_deseos_service__["a" /* DeseosService */]])
    ], TerminadosPage);
    return TerminadosPage;
}());

//# sourceMappingURL=terminados.component.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pendientes_pendientes_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_terminados_terminados_component__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_agregar_agregar_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_listas_component__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_deseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_filtro_completado_filtro_completado__ = __webpack_require__(275);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//Componentes




//Servicios

//pipes

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pendientes_pendientes_component__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_terminados_terminados_component__["a" /* TerminadosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_agregar_agregar_component__["a" /* AgregarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pipes_filtro_completado_filtro_completado__["a" /* FiltroCompletadoPipe */],
                __WEBPACK_IMPORTED_MODULE_10__components_listas_component__["a" /* ListasComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                //componentes especiales, se pueden cargar de manera dinamica
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_pendientes_pendientes_component__["a" /* PendientesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_terminados_terminados_component__["a" /* TerminadosPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_agregar_agregar_component__["a" /* AgregarPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__services_deseos_service__["a" /* DeseosService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Cecilia\Documents\GitHub\deseos\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Cecilia\Documents\GitHub\deseos\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lista; });
var Lista = /** @class */ (function () {
    function Lista(titulo) {
        this.titulo = titulo;
        this.terminada = false;
        this.creadaEn = new Date();
        this.items = [];
        this.id = new Date().getTime();
    }
    return Lista;
}());

//# sourceMappingURL=lista.model.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaItem; });
var ListaItem = /** @class */ (function () {
    function ListaItem(desc) {
        this.desc = desc;
        this.completado = false;
    }
    return ListaItem;
}());

//# sourceMappingURL=lista-item.model.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_deseos_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_agregar_agregar_component__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListasComponent = /** @class */ (function () {
    function ListasComponent(deseosService, navCtrl, alertCtrl) {
        this.deseosService = deseosService;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.terminada = false;
    }
    ListasComponent.prototype.listaSeleccionada = function (lista) {
        //console.log ( lista ); //lo que se manda a la otra pantall
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_agregar_agregar_component__["a" /* AgregarPage */], {
            titulo: lista.titulo,
            lista: lista
        });
    };
    ListasComponent.prototype.borrarLista = function (lista) {
        this.deseosService.borrarLista(lista);
    };
    //editar listas
    ListasComponent.prototype.editarLista = function (lista, slidingItem) {
        var _this = this;
        slidingItem.close(); //cuando se edite que se cierre el deslizable
        //Pop up para crear notas
        var alerta = this.alertCtrl.create({
            title: "Editar nombre",
            message: "Editar el nombre de la lista",
            inputs: [
                {
                    name: "titulo",
                    placeholder: "Nombre de la lista",
                    value: lista.titulo
                }
            ],
            buttons: [
                {
                    text: "Guardar"
                },
                {
                    text: "Agregar",
                    handler: function (data) {
                        //Vlidacion para no recibir cadenas vacias
                        if (data.titulo.length === 0) {
                            return;
                        }
                        //console.log(data);
                        lista.titulo = data.titulo;
                        _this.deseosService.guardarStorage();
                    }
                }
            ]
        });
        alerta.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ListasComponent.prototype, "terminada", void 0);
    ListasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-listas",template:/*ion-inline-start:"C:\Users\Cecilia\Documents\GitHub\deseos\src\components\listas.component.html"*/'<ion-list>\n\n    <ion-item-sliding #slidingItem *ngFor="let lista of deseosService.listas | filtroCompletado:terminada ">\n\n\n\n        <ion-item-options side="left">\n\n            <button (click)="editarLista(lista, slidingItem)" ion-button icon-only color="info">\n\n                <ion-icon name="create"></ion-icon>\n\n            </button>\n\n        </ion-item-options>\n\n\n\n        <button ion-item (click)="listaSeleccionada(lista)">\n\n            {{ lista.titulo }}\n\n          \n\n            <ion-note item-end>\n\n                {{ lista.items.length }} items\n\n            </ion-note>\n\n        </button>\n\n\n\n        <ion-item-options side="right">\n\n            <button (click)="borrarLista(lista)" ion-button icon-only color="danger">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n\n\n</ion-list>'/*ion-inline-end:"C:\Users\Cecilia\Documents\GitHub\deseos\src\components\listas.component.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_deseos_service__["a" /* DeseosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_deseos_service__["a" /* DeseosService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], ListasComponent);
    return ListasComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=listas.component.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltroCompletadoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FiltroCompletadoPipe = /** @class */ (function () {
    function FiltroCompletadoPipe() {
    }
    FiltroCompletadoPipe.prototype.transform = function (listas, completada) {
        return listas.filter(function (lista) {
            return lista.terminada === completada;
        });
    };
    FiltroCompletadoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'filtroCompletado',
            pure: false //pendiente del ciclo de deteccion de cambios de angular
        })
    ], FiltroCompletadoPipe);
    return FiltroCompletadoPipe;
}());

//# sourceMappingURL=filtro-completado.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeseosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeseosService = /** @class */ (function () {
    function DeseosService() {
        //coleccion de listas
        this.listas = [];
        this.cargarStorage();
        //console.log('Deseos Service Inicializado');
        // const lista1 = new Lista (' Recolectar Piedras del Infinito');
        // const lista2 = new Lista (' Heroes a vencer ');
        // this.listas.push(lista1, lista2);
        // console.log( this.listas );
    }
    DeseosService.prototype.agregarLista = function (lista) {
        this.listas.push(lista);
        this.guardarStorage();
    };
    DeseosService.prototype.borrarLista = function (lista) {
        this.listas = this.listas.filter(function (listaData) {
            return listaData.id !== lista.id;
        });
        this.guardarStorage(); //para que el cambio sea persistente
    };
    DeseosService.prototype.guardarStorage = function () {
        //Cuando se modifica la lista
        localStorage.setItem('data', JSON.stringify(this.listas));
    };
    DeseosService.prototype.cargarStorage = function () {
        //Confurmar si existe la entrada 'data' en el localStorage
        if (localStorage.getItem('data')) {
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
        else {
            this.listas = [];
        }
    };
    DeseosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DeseosService);
    return DeseosService;
}());

//# sourceMappingURL=deseos.service.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map