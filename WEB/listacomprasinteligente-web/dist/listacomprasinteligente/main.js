(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [hidden]=\"!showTemplate\"></app-header>\n<app-menu [hidden]=\"!showTemplate\"></app-menu>\n<div [ngClass]=\"showContentWrapper()\"> \n    <section class=\"content-header\">\n    </section>\n    <section class=\"content\">\n        <router-outlet></router-outlet>\n    </section>\n</div>\n<app-footer [hidden]=\"!showTemplate\"></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showTemplate = false;
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shared.showTemplate.subscribe(function (show) { return _this.showTemplate = show; });
    };
    AppComponent.prototype.showContentWrapper = function () {
        return {
            'content-wrapper': this.shared.isLoggedIn()
        };
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/security/auth.guard */ "./src/app/components/security/auth.guard.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/security/auth.interceptor */ "./src/app/components/security/auth.interceptor.ts");
/* harmony import */ var _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/user-new/user-new.component */ "./src/app/components/user-new/user-new.component.ts");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/ticket-new/ticket-new.component */ "./src/app/components/ticket-new/ticket-new.component.ts");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/ticket-list/ticket-list.component */ "./src/app/components/ticket-list/ticket-list.component.ts");
/* harmony import */ var _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/ticket-detail/ticket-detail.component */ "./src/app/components/ticket-detail/ticket-detail.component.ts");
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");
/* harmony import */ var _components_ingrediente_new_ingrediente_new_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/ingrediente-new/ingrediente-new.component */ "./src/app/components/ingrediente-new/ingrediente-new.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_18__["UserNewComponent"],
                _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_19__["UserListComponent"],
                _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_20__["TicketNewComponent"],
                _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_22__["TicketListComponent"],
                _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_23__["TicketDetailComponent"],
                _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_24__["SummaryComponent"],
                _components_ingrediente_new_ingrediente_new_component__WEBPACK_IMPORTED_MODULE_25__["IngredienteNewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_13__["routes"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
                _services_shared_service__WEBPACK_IMPORTED_MODULE_14__["SharedService"],
                _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"],
                _services_ticket_service__WEBPACK_IMPORTED_MODULE_21__["TicketService"],
                _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HTTP_INTERCEPTORS"],
                    useClass: _components_security_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/summary/summary.component */ "./src/app/components/summary/summary.component.ts");
/* harmony import */ var _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/user-new/user-new.component */ "./src/app/components/user-new/user-new.component.ts");
/* harmony import */ var _components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/security/auth.guard */ "./src/app/components/security/auth.guard.ts");
/* harmony import */ var _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/security/login/login.component */ "./src/app/components/security/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-list/user-list.component */ "./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ticket-new/ticket-new.component */ "./src/app/components/ticket-new/ticket-new.component.ts");
/* harmony import */ var _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/ticket-list/ticket-list.component */ "./src/app/components/ticket-list/ticket-list.component.ts");
/* harmony import */ var _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ticket-detail/ticket-detail.component */ "./src/app/components/ticket-detail/ticket-detail.component.ts");










var ROUTES = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'login', component: _components_security_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user-new', component: _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_1__["UserNewComponent"] },
    { path: 'user-new/:id', component: _components_user_new_user_new_component__WEBPACK_IMPORTED_MODULE_1__["UserNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'user-list', component: _components_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ticket-list', component: _components_ticket_list_ticket_list_component__WEBPACK_IMPORTED_MODULE_8__["TicketListComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ticket-new', component: _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_7__["TicketNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ticket-new/:id', component: _components_ticket_new_ticket_new_component__WEBPACK_IMPORTED_MODULE_7__["TicketNewComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'ticket-detail/:id', component: _components_ticket_detail_ticket_detail_component__WEBPACK_IMPORTED_MODULE_9__["TicketDetailComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'summary', component: _components_summary_summary_component__WEBPACK_IMPORTED_MODULE_0__["SummaryComponent"], canActivate: [_components_security_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] }
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n    <div class=\"pull-right hidden-xs\">\n      <b>Versão</b> 1.0.0\n      Angular CLI: 7.2.3\n      Node: 10.15.0\n      Angular: 7.2.16\n      SpringBoot: 2.1.2\n      Java 8\n    </div>\n    <strong>Copyright &copy; 2018-2019<a href=\"https://github.com/ramos1gabriel\" target=\"_blank\"> GRS</a>.</strong> Todos os direitos reservados.\n  </footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n    <!-- Logo -->\n    <a [routerLink]=\"['/']\" class=\"logo\">\n      <span class=\"logo-mini\"><b>LCI</b></span>\n      <span class=\"logo-lg\"><b>ListaCompras</b></span>\n    </a>\n\n    <nav class=\"navbar navbar-static-top\">\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n      <!-- MENU -->\n      <div class=\"navbar-custom-menu\">\n\n        <ul class=\"nav navbar-nav\">\n          <li class=\"dropdown messages-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n          </li>\n\n          <li class=\"dropdown notifications-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n          </li>\n\n          <li class=\"dropdown tasks-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n          </li>\n\n          <!-- User Account: style can be found in dropdown.less -->\n          <li class=\"dropdown user user-menu\">\n\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"assets\\img\\cozinheira.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">{{ shared.user.nome }}</span>\n            </a>\n\n            <!-- DROPDOWN USER -->\n            <ul class=\"dropdown-menu\">\n              <!-- User image -->\n              <li class=\"user-header\">\n                <img src=\"assets\\img\\cozinheira.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                <p>\n                  Alexander Pierce - Web Developer\n                  <small>Member since Nov. 2012</small>\n                </p>\n              </li>\n              <!-- Menu Body -->\n              <li class=\"user-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Followers</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Sales</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Friends</a>\n                  </div>\n                </div>\n                <!-- /.row -->\n              </li>\n              <!-- Menu Footer-->\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                </div>\n                <div class=\"pull-right\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n                </div>\n              </li>\n            </ul>\n\n          </li>\n\n          <!-- SAIR -->\n          <li>\n            <a href=\"#\" id=\"logout-confirm\" title=\"Sair\" (click)=\"signOut();\"><i class=\"fa fa-sign-out\"></i></a>\n          </li>\n\n        </ul>\n\n        <!--\n        <p style=\"color:white\">{{ shared.user.nome }} | \n        <button class=\"btn btn-link\" (click)=\"signOut();\"><font style=\"color:white\">Sair</font></button></p>\n        -->\n      </div>\n\n    </nav>\n  </header>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/user.model */ "./src/app/model/user.model.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
        this.shared.user = new src_app_model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '', '');
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.signOut = function () {
        this.shared.token = null;
        this.shared.user = null;
        window.location.href = '/login';
        window.location.reload();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Welcome!\n</p>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/ingrediente-new/ingrediente-new.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/ingrediente-new/ingrediente-new.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudGUtbmV3L2luZ3JlZGllbnRlLW5ldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/ingrediente-new/ingrediente-new.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/ingrediente-new/ingrediente-new.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" style=\"margin-left:  0%\">\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Novo Ingrediente</h3>\n    </div>\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"save()\">\n\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <span>{{ message.text }}</span>\n      </div>\n\n      <div class=\"box-body\">\n\n        <div [ngClass]=\"getFromGroupClass(email.invalid, email.dirty)\">\n          <label for=\"inputNome\" class=\"col-sm-2 control-label\">Nome</label>\n\n          <div class=\"col-sm-10\">\n            <input \n                  type=\"nome\" \n                  [(ngModel)]=\"ingrediente.nome\" \n                  class=\"form-control\" \n                  name=\"nome\" \n                  id=\"inputNome\" \n                  #nome=\"ngModel\" \n                  placeholder=\"Nome\" \n                  required>\n            <span class=\"help-block\" *ngIf=\"email.invalid && email.dirty\">Nome é necessário</span>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"box-footer\">\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Gravar</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ingrediente-new/ingrediente-new.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/ingrediente-new/ingrediente-new.component.ts ***!
  \*************************************************************************/
/*! exports provided: IngredienteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredienteNewComponent", function() { return IngredienteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_ingrediente_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/ingrediente.service */ "./src/app/services/ingrediente.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _model_ingrediente_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../model/ingrediente.model */ "./src/app/model/ingrediente.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var IngredienteNewComponent = /** @class */ (function () {
    function IngredienteNewComponent(IngredienteService, route) {
        this.IngredienteService = IngredienteService;
        this.route = route;
        this.ingrediente = new _model_ingrediente_model__WEBPACK_IMPORTED_MODULE_3__["Ingrediente"]('', '');
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    IngredienteNewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    IngredienteNewComponent.prototype.findById = function (id) {
        var _this = this;
        this.IngredienteService.findById(id).subscribe(function (responseApi) {
            _this.ingrediente = responseApi.data;
            //this.user.senha = '';
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    IngredienteNewComponent.prototype.save = function () {
        var _this = this;
        this.message = {};
        this.IngredienteService.createOrUpdate(this.ingrediente).subscribe(function (responseApi) {
            _this.ingrediente = new _model_ingrediente_model__WEBPACK_IMPORTED_MODULE_3__["Ingrediente"]('', '');
            var ingredienteRet = responseApi.data;
            _this.form.resetForm();
            _this.showMessage({
                type: 'success',
                text: ingredienteRet.nome + " cadastrado com sucesso!"
            });
            //window.location.href = '/login';
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    IngredienteNewComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    IngredienteNewComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    IngredienteNewComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])("form"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], IngredienteNewComponent.prototype, "form", void 0);
    IngredienteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-ingrediente-new',
            template: __webpack_require__(/*! ./ingrediente-new.component.html */ "./src/app/components/ingrediente-new/ingrediente-new.component.html"),
            styles: [__webpack_require__(/*! ./ingrediente-new.component.css */ "./src/app/components/ingrediente-new/ingrediente-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ingrediente_service__WEBPACK_IMPORTED_MODULE_1__["IngredienteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], IngredienteNewComponent);
    return IngredienteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n    <section class=\"sidebar\">\n\n    <!-- Sidebar user panel -->\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"assets/img/cozinheira.jpg\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>{{ shared.user.nome }}</p>\n        <a href=\"javascript:void(0)\"><i class=\"fa fa-circle text-success\"></i> Online</a>\n      </div>\n    </div>\n\n      <ul class=\"sidebar-menu\" data-widget=\"tree\">\n        <li class=\"header\">MAIN NAVIGATION</li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-apple\"></i><span>Ingredientes</span>\n            <span class=\"pull-right-container\">\n              <i class=\"fa fa-angle-left pull-right\"></i>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li><a [routerLink]=\"['/user-list']\"><i class=\"fa fa-circle-o\"></i>Lista</a></li>\n            <li><a [routerLink]=\"['/ingrediente-new']\"><i class=\"fa fa-circle-o\"></i>Novo Ingrediente</a></li>\n          </ul>\n        </li>\n\n        <li class=\"treeview\">\n            <a href=\"#\">\n              <i class=\"fa fa-book\"></i><span>Receitas</span>\n              <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n            </a>\n            <ul class=\"treeview-menu\">\n              <li><a [routerLink]=\"['/ticket-list']\"><i class=\"fa fa-circle-o\"></i>Lista</a></li>\n              <li><a [routerLink]=\"['/ticket-new']\"><i class=\"fa fa-circle-o\"></i>Novo Ticket</a></li>\n            </ul>\n          </li>\n\n          <li class=\"treeview\">\n            <a href=\"#\">\n              <i class=\"fa fa-pencil-square-o \"></i><span>Cardápios</span>\n              <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n            </a>\n            <ul class=\"treeview-menu\">\n              <li><a [routerLink]=\"['/ticket-list']\"><i class=\"fa fa-circle-o\"></i>Lista</a></li>\n              <li><a [routerLink]=\"['/ticket-new']\"><i class=\"fa fa-circle-o\"></i>Novo Ticket</a></li>\n            </ul>\n          </li>\n\n          <li class=\"treeview\">\n              <a href=\"#\">\n                <i class=\"fa fa-shopping-basket\"></i><span>Lista de Compras</span>\n                <span class=\"pull-right-container\">\n                  <i class=\"fa fa-angle-left pull-right\"></i>\n                </span>\n              </a>\n              <ul class=\"treeview-menu\">\n                <li><a [routerLink]=\"['/summary']\"><i class=\"fa fa-circle-o\"></i>Ver</a></li>\n              </ul>\n            </li>\n\n            <li class=\"treeview\">\n              <a href=\"#\">\n                <i class=\"fa fa-edit\"></i><span>USAR COMO EXEMPLO</span>\n                <span class=\"pull-right-container\">\n                  <i class=\"fa fa-angle-left pull-right\"></i>\n                </span>\n              </a>\n              <ul class=\"treeview-menu\">\n                <li><a [routerLink]=\"['/user-list']\"><i class=\"fa fa-circle-o\"></i>Lista</a></li>\n                <li><a [routerLink]=\"['/user-new']\"><i class=\"fa fa-circle-o\"></i>Novo Usuário</a></li>\n              </ul>\n            </li>\n\n      </ul>\n    </section>\n  </aside>"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/security/auth.guard.ts":
/*!***************************************************!*\
  !*** ./src/app/components/security/auth.guard.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"].getInstance();
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.shared.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/security/auth.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/security/auth.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"].getInstance();
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authRequest;
        if (this.shared.isLoggedIn()) {
            authRequest = req.clone({
                setHeaders: {
                    'Authorization': this.shared.token
                }
            });
            return next.handle(authRequest);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/security/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/security/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjdXJpdHkvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/security/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/security/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- LAYOUT ANTIGO \n\n<div class=\"col-md-6\" style=\"margin-left:  20%\">\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Lista de Compras Inteligente</h3>\n    </div>\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"login()\">\n\n      <div class=\"alert alert-error\" role=\"alert\" *ngIf=\"message\">\n        <span>Nome de usuário ou senha inválido!</span>\n      </div>\n\n      <div class=\"box-body\">\n\n        <div [ngClass]=\"getFromGroupClass(username.invalid, username.dirty)\">\n          <label for=\"inputUsername\" class=\"col-sm-2 control-label\">Nome de Usuário</label>\n\n          <div class=\"col-sm-10\">\n            <input \n                  type=\"text\" \n                  [(ngModel)]=\"user.username\" \n                  class=\"form-control\" \n                  name=\"username\" \n                  id=\"inputUsername\" \n                  #username=\"ngModel\" \n                  placeholder=\"Nome de Usuário\">\n            <span class=\"help-block\" *ngIf=\"username.invalid && username.dirty\">Nome de usuário é inválido</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(password.invalid, password.dirty)\">\n          <label for=\"inputPassword\" class=\"col-sm-2 control-label\">Senha</label>\n\n          <div class=\"col-sm-10\">\n            <input \n                  type=\"password\" \n                  [(ngModel)]=\"user.password\" \n                  class=\"form-control\" \n                  name=\"password\" \n                  id=\"inputPassword\" \n                  #password=\"ngModel\" \n                  placeholder=\"Senha\" \n                  required>\n            <span class=\"help-block\" *ngIf=\"password.invalid && password.dirty\">Senha é necessária</span>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"box-footer\">\n        \n        <a [routerLink]=\"['/user-new']\" class=\"\">Cadastra-se</a>\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Login</button>\n      </div>\n    </form>\n  </div>\n</div>\n-->\n\n<!-- LAYOUT ALTERNATIVO -->\n<div class=\"login-box\">\n  <div class=\"login-logo\">\n    <p class=\"\"><b>Lista de Compras </b>Inteligente</p>\n  </div>\n\n  <div class=\"box box-info\">\n    <div class=\"card-body login-card-body\">\n      <p></p>\n      <p class=\"login-box-msg\">Faça login para iniciar sua sessão</p>\n\n      <div class=\"alert alert-error\" role=\"alert\" *ngIf=\"message\">\n        <span>Nome de usuário ou senha inválido!</span>\n      </div>\n\n      <form #form=\"ngForm\" (ngSubmit)=\"login()\">\n\n        <div [ngClass]=\"getFromGroupClass(username.invalid, username.dirty)\">\n\n          <div class=\"mb-3\">\n            <input type=\"text\" \n            [(ngModel)]=\"user.username\" \n            class=\"form-control\" \n            name=\"username\" \n            id=\"inputUsername\" \n            #username=\"ngModel\" \n            placeholder=\"Nome de Usuário\"\n            required>\n\n            <span class=\"help-block\" *ngIf=\"username.invalid && username.dirty\">Nome de usuário é necessário</span>\n          </div>\n\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(password.invalid, password.dirty)\">\n\n          <div class=\"mb-3\">\n            <input type=\"password\" \n            [(ngModel)]=\"user.password\" \n            class=\"form-control\" \n            name=\"password\" \n            id=\"inputPassword\" \n            #password=\"ngModel\" \n            placeholder=\"Senha\"\n            required>\n          </div>\n\n          <span class=\"help-block\" *ngIf=\"password.invalid && password.dirty\">Senha é necessária</span>\n        </div>\n        \n        <div class=\"col-8\"></div>\n        <div class=\"col-4\">\n          <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info btn-block\">Login</button>\n        </div>\n        \n      </form>\n\n      <div class=\"social-auth-links text-center mb-3\">\n        <p></p>\n      </div>\n\n      <p class=\"mb-1\"></p>\n      <p class=\"mb-0\">\n        <a [routerLink]=\"['/user-new']\"><h4>Criar uma conta</h4></a>\n      </p>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/security/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/security/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '', '');
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.message = '';
        this.userService.login(this.user).subscribe(function (userAuthentication) {
            _this.shared.token = userAuthentication.token;
            _this.shared.user = userAuthentication.user;
            //this.shared.user.profile = this.shared.user.profile.substring(5);
            _this.shared.showTemplate.emit(true);
            _this.router.navigate(['/']);
            sessionStorage.setItem("currentUser", userAuthentication.toString()); //TESTE F5
        }, function (err) {
            _this.shared.token = null;
            _this.shared.user = null;
            _this.shared.showTemplate.emit(false);
            _this.message = 'Erro';
        });
    };
    LoginComponent.prototype.cancelLogin = function () {
        this.message = '';
        this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '', '');
        window.location.href = '/login';
        window.location.reload();
    };
    LoginComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/security/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/security/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/summary/summary.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/summary/summary.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/summary/summary.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/summary/summary.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" style=\"margin-left: 0%\">\n  <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n    <strong>{{ message.text }}</strong>\n  </div>\n  <div class=\"box box-body\">\n    <div class=\"box-header with-border\">\n      <h3>Resumo</h3>\n    </div>\n    <div class=\"box-body\">\n      <ul class=\"list-group list-group-unbordered\">\n        <li class=\"list-group-item\">\n          <b>Novos: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountNew }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Resolvidos: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountResolved }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Aprovados: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountApproved }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Reprovados: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountDisapproved }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Atributos: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountAssigned }}</span></span>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Finalizados: </b>\n          <span class=\"pull-right\"><span>{{ summary?.amountClosed }}</span></span>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/summary/summary.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/summary/summary.component.ts ***!
  \*********************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_ticket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_summary_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/summary.model */ "./src/app/model/summary.model.ts");




var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(ticketService) {
        this.ticketService = ticketService;
        this.summary = new src_app_model_summary_model__WEBPACK_IMPORTED_MODULE_3__["Summary"]();
    }
    SummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ticketService.summary()
            .subscribe(function (responseApi) {
            _this.summary = responseApi.data;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    // classes default
    SummaryComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    SummaryComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    SummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/components/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.css */ "./src/app/components/summary/summary.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_ticket_service__WEBPACK_IMPORTED_MODULE_1__["TicketService"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-detail/ticket-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/ticket-detail/ticket-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LWRldGFpbC90aWNrZXQtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ticket-detail/ticket-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/ticket-detail/ticket-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-10\" style=\"margin-left: 0%\">\n  <div class=\"box box-body\">\n    <div class=\"box-header with-border\">\n      <h3>Detalhe do Ticket</h3>\n    </div>\n    <form class=\"form-horizontal\">\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <strong>{{ message.text }}</strong>\n      </div>\n      <div class=\"box-body\">\n        <ul class=\"list-group list-group-unbordered\">\n          <li class=\"list-group-item\">\n            <b>Número: </b><span>{{ ticket.number }}</span>\n            <span class=\"pull-right\">\n              <b>Título: </b><span>{{ ticket.title }}</span>\n            </span>\n          </li>\n          <li class=\"list-group-item\">\n            <b>Prioridade: </b><span>{{ ticket.priority }}</span>\n            <span class=\"pull-right\">\n              <b>Criado por: </b><span>{{ ticket.user?.email }}</span>\n            </span>\n          </li>\n          <li class=\"list-group-item\">\n            <b>Status: </b><span>{{ ticket.status }}</span>\n            <span class=\"pull-right\">\n              <b>Atríbuido para: </b><span>{{ticket?.assignedUser?.email}}</span>\n            </span>\n          </li>\n          <li class=\"list-group-item\">\n            <b>Data: </b><span>{{ ticket.date | date:'dd/MM/yyyy' }}</span>\n            <span class=\"pull-right\">\n              <b>Descrição: </b><span>{{ ticket.description }}</span>\n            </span>\n          </li>\n          <li class=\"list-group-item\">\n            <span><img [src]=\"ticket.image\" witdh=\"370px\"/></span>\n            <span class=\"pull-right\">\n              <table class=\"table table-bordered\">\n                <tr>\n                  <td>Usuário Alteração</td>\n                  <td>Data Alteração</td>\n                  <td>Status Alteração</td>\n                <tr *ngFor=\"let change of ticket.changes\">\n                  <td>{{ change?.userChange.email }}</td>\n                  <td>{{ change?.dateChangeStatus | date:'dd/MM/yyyy HH:mm:ss' }}</td>\n                  <td>{{ change?.status }}</td>\n                </tr>\n              </table>\n            </span>\n          </li>\n        </ul>\n      </div>\n      <div class=\"box-footer\">\n        <button *ngIf=\"shared.user.profile == 'TECHNICIAN' && ticket.status == 'Novo'\"\n          (click)=\"changeStatus('Atribuido')\"\n          class=\"btn btn-primary\">Aceito\n        </button>\n        &nbsp;\n        <button *ngIf=\"shared.user.profile == 'TECHNICIAN' && (ticket.status == 'Atribuido' || ticket.status == 'Reprovado')\"\n          (click)=\"changeStatus('Resolvido')\"\n          class=\"btn btn-primary\">Resolver\n        </button>\n        &nbsp;\n        <button *ngIf=\"shared.user.profile == 'CUSTOMER' && ticket.status == 'Resolvido'\"\n          (click)=\"changeStatus('Aprovado')\"\n          class=\"btn btn-primary\">Aprovar\n        </button>\n        &nbsp;\n        <button *ngIf=\"shared.user.profile == 'CUSTOMER' && ticket.status == 'Resolvido'\"\n          (click)=\"changeStatus('Reprovado')\"\n          class=\"btn btn-primary\">Reprovar\n        </button>\n        &nbsp;\n        <button *ngIf=\"shared.user.profile == 'TECHNICIAN' && ticket.status == 'Aprovado'\"\n          (click)=\"changeStatus('Finalizado')\"\n          class=\"btn btn-primary\">Finalizar\n        </button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ticket-detail/ticket-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ticket-detail/ticket-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: TicketDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailComponent", function() { return TicketDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/ticket.model */ "./src/app/model/ticket.model.ts");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var TicketDetailComponent = /** @class */ (function () {
    function TicketDetailComponent(ticketService, route) {
        this.ticketService = ticketService;
        this.route = route;
        this.ticket = new src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_3__["Ticket"]('', 0, '', '', '', '', null, null, '', null);
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    TicketDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    TicketDetailComponent.prototype.findById = function (id) {
        var _this = this;
        this.ticketService.findById(id).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
            _this.ticket.date = new Date(_this.ticket.date).toISOString();
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketDetailComponent.prototype.changeStatus = function (status) {
        var _this = this;
        this.ticketService.changeStatus(status, this.ticket)
            .subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
            _this.ticket.date = new Date(_this.ticket.date).toISOString();
            _this.showMessage({
                type: 'success',
                text: 'Status alterado'
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketDetailComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketDetailComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketDetailComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    TicketDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-detail',
            template: __webpack_require__(/*! ./ticket-detail.component.html */ "./src/app/components/ticket-detail/ticket-detail.component.html"),
            styles: [__webpack_require__(/*! ./ticket-detail.component.css */ "./src/app/components/ticket-detail/ticket-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_4__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
    ], TicketDetailComponent);
    return TicketDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-list/ticket-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/ticket-list/ticket-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LWxpc3QvdGlja2V0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/ticket-list/ticket-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/ticket-list/ticket-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n  <span>{{ message.text }}</span>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"box\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Lista de Tickets</h3>\n      </div>\n\n      <!-- FILTROS -->\n      <div class=\"box-body\">\n        <div class=\"form-group\" *ngIf=\"shared.user.profile == 'TECHNICIAN'\">\n          <div class=\"checkbox\">\n            <label>\n              <input \n                type=\"checkbox\" \n                [(ngModel)]=\"assignedToMe\" \n                name=\"assignedToMe\" \n                id=\"assignedToMe\">\n                <b>Atribuído a mim</b>\n             </label>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"inputNumber\" class=\"col-sm-2 control-label\">Número</label>\n              <div class=\"col-sm-10\">\n                <input \n                    type=\"number\" \n                    [(ngModel)]=\"ticketFilter.number\" \n                    class=\"form-control\" \n                    name=\"number\" \n                    id=\"inputNumber\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"inputTitle\" class=\"col-sm-2 control-label\">Título</label>\n              <div class=\"col-sm-10\">\n                <input \n                    type=\"text\" \n                    [(ngModel)]=\"ticketFilter.title\" \n                    class=\"form-control\" \n                    name=\"title\" \n                    id=\"inputTitle\">\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"inputStatus\" class=\"col-sm-2 control-label\">Status</label>\n              <div class=\"col-sm-10\">\n                <select \n                    type=\"text\" \n                    [(ngModel)]=\"ticketFilter.status\" \n                    class=\"form-control\" \n                    name=\"status\" \n                    id=\"inputStatus\"\n                    style=\"width: 100%\">\n                    <option>Novo</option>\n                    <option>Resolvido</option>\n                    <option>Aprovado</option>\n                    <option>Desaprovado</option>\n                    <option>Atribuído</option>\n                    <option>Finalizado</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"inputPriority\" class=\"col-sm-2 control-label\">Prioridade</label>\n              <div class=\"col-sm-10\">\n                <select \n                    type=\"text\" \n                    [(ngModel)]=\"ticketFilter.priority\" \n                    class=\"form-control\" \n                    name=\"priority\" \n                    id=\"inputPriority\"\n                    style=\"width: 100%\">\n                    <option>Alta</option>\n                    <option>Normal</option>\n                    <option>Baixa</option>\n                </select>\n              </div>\n          </div>\n        </div>\n      <div class=\"box-footer\">\n        <button class=\"btn btn-info pull-left\" (click)=\"cleanFilter();\">Limpar</button>\n        <button style=\"margin-left: 10px;\" class=\"btn btn-info pull-right\" (click)=\"filter();\">Filtrar</button>\n      </div>\n\n      <!-- TABELA -->\n      <div class=\"box-body\">\n        <table class=\"table table-bordered\">\n          <tr>\n            <th>Número</th>\n            <th>Título</th>\n            <th>Prioridade</th>\n            <th>Status</th>\n            <th>Proprietário</th>\n            <th style=\"width: 40px\" *ngIf=\"shared.user.profile == 'CUSTOMER'\">&nbsp;</th>\n            <th style=\"width: 40px\" *ngIf=\"shared.user.profile == 'CUSTOMER'\">&nbsp;</th>\n            <th style=\"width: 40px\">&nbsp;</th>\n          </tr>\n          <tr *ngFor=\"let ticket of listTicket\">\n            <td>{{ ticket.number }}</td>\n            <td>{{ ticket.title }}</td>\n            <td>{{ ticket.priority }}</td>\n            <td>{{ ticket.status }}</td>\n            <td>{{ ticket.user.email }}</td>\n            <td *ngIf=\"shared.user.profile == 'CUSTOMER'\">\n              <button class=\"btn btn-primary\" (click)=\"edit(ticket.id);\">Editar</button>\n            </td>\n            <td *ngIf=\"shared.user.profile == 'CUSTOMER'\">\n              <button class=\"btn btn-danger\" (click)=\"delete(ticket.id);\">Excluir</button>\n            </td>\n            <td>\n              <button class=\"btn btn-success\" (click)=\"detail(ticket.id);\">Detail</button>\n            </td>\n          </tr>\n        </table>\n      </div>\n\n      <div class=\"box-footer clearfix\">\n        <ul class=\"pagination pagination-sm no-margin pull-right\">\n          <li><a href=\"\" (click)=\"setPreviousPage($event);\">&laquo;</a></li>\n          <li *ngFor=\"let p of pages; let i = index\">\n            <a [ngClass]=\"{'pagination-focus' : i == page}\" href=\"\" (click)=\"setPage(i, $event);\">{{i+1}}</a>\n          </li>\n          <li><a href=\"\" (click)=\"setNextPage($event);\">&raquo;</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/ticket-list/ticket-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/ticket-list/ticket-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: TicketListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketListComponent", function() { return TicketListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/ticket.model */ "./src/app/model/ticket.model.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TicketListComponent = /** @class */ (function () {
    function TicketListComponent(dialogService, ticketService, router) {
        this.dialogService = dialogService;
        this.ticketService = ticketService;
        this.router = router;
        this.assignedToMe = false;
        this.page = 0;
        this.count = 5;
        this.ticketFilter = new src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_3__["Ticket"]('', null, '', '', '', '', null, null, '', null); //??
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    TicketListComponent.prototype.ngOnInit = function () {
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.findAll = function (page, count) {
        var _this = this;
        this.ticketService.findAll(page, count).subscribe(function (responseApi) {
            _this.listTicket = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketListComponent.prototype.filter = function () {
        var _this = this;
        console.log(' this.assignedToMe --> ', this.assignedToMe);
        console.log(' number --> ', this.assignedToMe);
        this.page = 0;
        this.count = 5;
        this.ticketService.findByParams(this.page, this.count, this.assignedToMe, this.ticketFilter)
            .subscribe(function (responseApi) {
            _this.ticketFilter.title = _this.ticketFilter.title == 'uninformed' ? '' : _this.ticketFilter.title;
            _this.ticketFilter.number = _this.ticketFilter.number == 0 ? null : _this.ticketFilter.number;
            _this.listTicket = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['content']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketListComponent.prototype.cleanFilter = function () {
        this.assignedToMe = false;
        this.page = 0;
        this.count = 5;
        this.ticketFilter = new src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_3__["Ticket"]('', null, '', '', '', '', null, null, '', null);
        this.findAll(this.page, this.count);
    };
    TicketListComponent.prototype.edit = function (id) {
        this.router.navigate(['/ticket-new', id]);
    };
    TicketListComponent.prototype.detail = function (id) {
        this.router.navigate(['/ticket-detail', id]);
    };
    TicketListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm('Tem certeza que deseja excluir?')
            .then(function (canDelete) {
            if (canDelete) {
                _this.message = {};
                _this.ticketService.delete(id).subscribe(function (responseApi) {
                    _this.showMessage({
                        type: 'success',
                        text: 'Registro deletado'
                    });
                    _this.findAll(_this.page, _this.count);
                }, function (err) {
                    _this.showMessage({
                        type: 'error',
                        text: err['error']['errors'][0]
                    });
                });
            }
        });
    };
    //PAGINACAO
    TicketListComponent.prototype.setNextPage = function (event) {
        event.preventDefault();
        if (this.page + 1 < this.pages.length) {
            this.page = this.page + 1;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.setPreviousPage = function (event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = this.page - 1;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.setPage = function (i, event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = i;
            this.findAll(this.page, this.count);
        }
    };
    TicketListComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketListComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketListComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    TicketListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket-list',
            template: __webpack_require__(/*! ./ticket-list.component.html */ "./src/app/components/ticket-list/ticket-list.component.html"),
            styles: [__webpack_require__(/*! ./ticket-list.component.css */ "./src/app/components/ticket-list/ticket-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"],
            src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_5__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], TicketListComponent);
    return TicketListComponent;
}());



/***/ }),

/***/ "./src/app/components/ticket-new/ticket-new.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/ticket-new/ticket-new.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlja2V0LW5ldy90aWNrZXQtbmV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ticket-new/ticket-new.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/ticket-new/ticket-new.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6\" style=\"margin-left:  0%\">\n    <div class=\"box box-info\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Novo Ticket</h3>\n      </div>\n      <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"register()\">\n  \n        <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n          <span>{{ message.text }}</span>\n        </div>\n  \n        <div class=\"box-body\">\n  \n          <!-- TITULO -->\n          <div [ngClass]=\"getFromGroupClass(title.invalid, title.dirty)\">\n            <label for=\"inputTitle\" class=\"col-sm-2 control-label\">Título</label>\n  \n            <div class=\"col-sm-10\">\n              <input \n                    type=\"text\" \n                    [(ngModel)]=\"ticket.title\" \n                    class=\"form-control\" \n                    name=\"title\" \n                    id=\"inputTitle\" \n                    #title=\"ngModel\" \n                    placeholder=\"Título\" \n                    required>\n              <span class=\"help-block\" *ngIf=\"title.invalid && title.dirty\">Título é obrigatório</span>\n            </div>\n          </div>\n  \n          <!-- PRIORIDADE -->\n          <div [ngClass]=\"getFromGroupClass(priority.invalid, priority.dirty)\">\n            <label for=\"inputPriority\" class=\"col-sm-2 control-label\">Prioridade</label>\n  \n            <div class=\"col-sm-10\">\n                <select [(ngModel)]=\"ticket.priority\" \n                      class=\"form-control select2\" \n                      id=\"inputPriority\" \n                      name=\"priority\" \n                      #priority=\"ngModel\" \n                      style=\"width: 100%\" \n                      required>\n                      <option>Alta</option>\n                      <option>Normal</option>\n                      <option>Baixa</option>\n                </select>\n                <span class=\"help-block\" *ngIf=\"priority.invalid && priority.dirty\">Prioridade é obrigatória</span>\n            </div>\n          </div>\n  \n          <!-- DESCRICAO -->\n          <div [ngClass]=\"getFromGroupClass(description.invalid, description.dirty)\">\n            <label for=\"inputDescription\" class=\"col-sm-2 control-label\">Descrição</label>\n  \n            <div class=\"col-sm-10\">\n              <textarea \n                    [(ngModel)]=\"ticket.description\" \n                    class=\"form-control\" \n                    name=\"description\" \n                    rows=\"3\"\n                    id=\"inputDescription\" \n                    #description=\"ngModel\" \n                    placeholder=\"Descrição\" \n                    required></textarea>\n              <span class=\"help-block\" *ngIf=\"description.invalid && description.dirty\">Descrição é obrigatória</span>\n            </div>\n          </div>\n\n          <!-- IMAGEM -->\n          <div>\n            <div class=\"form-group\">\n                <label for=\"inputImage\" class=\"col-sm-2 control-label\">Imagem</label>\n                <div class=\"col-sm-10\">\n                  <img [src]=\"ticket.image\" width=\"50%\" height=\"50%\">\n                  <input type=\"file\" id=\"image\" (change)=\"onFileChange($event);\">\n                </div>\n            </div>\n          </div>\n  \n        </div>\n        <div class=\"box-footer\">\n          <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Gravar</button>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/ticket-new/ticket-new.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ticket-new/ticket-new.component.ts ***!
  \***************************************************************/
/*! exports provided: TicketNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketNewComponent", function() { return TicketNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/model/ticket.model */ "./src/app/model/ticket.model.ts");
/* harmony import */ var src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/ticket.service */ "./src/app/services/ticket.service.ts");







var TicketNewComponent = /** @class */ (function () {
    function TicketNewComponent(ticketService, route) {
        this.ticketService = ticketService;
        this.route = route;
        this.ticket = new src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_5__["Ticket"]('', 0, '', '', '', '', null, null, '', null);
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    TicketNewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    TicketNewComponent.prototype.findById = function (id) {
        var _this = this;
        this.ticketService.findById(id).subscribe(function (responseApi) {
            _this.ticket = responseApi.data;
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    TicketNewComponent.prototype.register = function () {
        var _this = this;
        this.message = {};
        this.ticketService.createOrUpdate(this.ticket).subscribe(function (responseApi) {
            _this.ticket = new src_app_model_ticket_model__WEBPACK_IMPORTED_MODULE_5__["Ticket"]('', 0, '', '', '', '', null, null, '', null);
            var ticket = responseApi.data;
            _this.form.resetForm();
            _this.showMessage({
                type: 'success',
                text: ticket.title + " cadastrado com sucesso"
            });
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    //GRAVAR IMAGEM
    TicketNewComponent.prototype.onFileChange = function (event) {
        var _this = this;
        if (event.target.files[0].size > 2000000) {
            this.showMessage({
                type: 'error',
                text: 'Tamanho máximo da imagem: 2 MB'
            });
        }
        else {
            this.ticket.image = '';
            var reader = new FileReader();
            reader.onloadend = function (e) {
                _this.ticket.image = reader.result; //CAST string
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    TicketNewComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    TicketNewComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    TicketNewComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])("form"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], TicketNewComponent.prototype, "form", void 0);
    TicketNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-ticket-new',
            template: __webpack_require__(/*! ./ticket-new.component.html */ "./src/app/components/ticket-new/ticket-new.component.html"),
            styles: [__webpack_require__(/*! ./ticket-new.component.css */ "./src/app/components/ticket-new/ticket-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_ticket_service__WEBPACK_IMPORTED_MODULE_6__["TicketService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TicketNewComponent);
    return TicketNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n  <span>{{ message.text }}</span>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-8\">\n    <div class=\"box\">\n      <div class=\"box-header with-border\">\n        <h3 class=\"box-title\">Lista de Usuários</h3>\n      </div>\n\n      <div class=\"box-body\">\n        <table class=\"table table-bordered\">\n          <tr>\n            <th>Email</th>\n            <th>Perfil</th>\n            <th style=\"width: 40px\">&nbsp;</th>\n            <th style=\"width: 40px\">&nbsp;</th>\n          </tr>\n          <tr *ngFor=\"let user of listUser\">\n            <td>{{ user.email }}</td>\n            <td>{{ user.profile }}</td>\n            <td><button  class=\"btn btn-primary\" (click)=\"edit(user.id);\">Editar</button></td>\n            <td><button  class=\"btn btn-danger\" (click)=\"delete(user.id);\">Excluir</button></td>\n          </tr>\n        </table>\n      </div>\n\n      <div class=\"box-footer clearfix\">\n        <ul class=\"pagination pagination-sm no-margin pull-right\">\n          <li><a href=\"\" (click)=\"setPreviousPage($event);\">&laquo;</a></li>\n          <li *ngFor=\"let p of pages; let i = index\">\n            <a [ngClass]=\"{'pagination-focus' : i == page}\" href=\"\" (click)=\"setPage(i, $event);\">{{i+1}}</a>\n          </li>\n          <li><a href=\"\" (click)=\"setNextPage($event);\">&raquo;</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/user-list/user-list.component.ts ***!
  \*************************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserListComponent = /** @class */ (function () {
    function UserListComponent(dialogService, userService, router) {
        this.dialogService = dialogService;
        this.userService = userService;
        this.router = router;
        this.page = 0;
        this.count = 5;
        this.listUser = [];
        this.shared = src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"].getInstance();
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.findAll(this.page, this.count);
    };
    UserListComponent.prototype.findAll = function (page, count) {
        var _this = this;
        this.userService.findAll(page, count).subscribe(function (responseApi) {
            _this.listUser = responseApi['data']['content'];
            _this.pages = new Array(responseApi['data']['totalPages']);
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserListComponent.prototype.edit = function (id) {
        this.router.navigate(['/user-new', id]);
    };
    UserListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialogService.confirm('Tem certeza que deseja excluir?')
            .then(function (canDelete) {
            if (canDelete) {
                _this.message = {};
                _this.userService.delete(id).subscribe(function (responseApi) {
                    _this.showMessage({
                        type: 'success',
                        text: 'Registro deletado'
                    });
                    _this.findAll(_this.page, _this.count);
                }, function (err) {
                    _this.showMessage({
                        type: 'error',
                        text: err['error']['errors'][0]
                    });
                });
            }
        });
    };
    UserListComponent.prototype.setNextPage = function (event) {
        event.preventDefault();
        if (this.page + 1 < this.pages.length) {
            this.page = this.page + 1;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.setPreviousPage = function (event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = this.page - 1;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.setPage = function (i, event) {
        event.preventDefault();
        if (this.page > 0) {
            this.page = i;
            this.findAll(this.page, this.count);
        }
    };
    UserListComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    UserListComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    UserListComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/components/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/user-new/user-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/user-new/user-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1uZXcvdXNlci1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/user-new/user-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/user-new/user-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"col-md-6\" style=\"margin-left:  0%\">\n  <div class=\"box box-info\">\n    <div class=\"box-header with-border\">\n      <h3 class=\"box-title\">Novo Usuário</h3>\n    </div>\n    <form class=\"form-horizontal\" #form=\"ngForm\" (ngSubmit)=\"register()\">\n\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <span>{{ message.text }}</span>\n      </div>\n\n      <div class=\"box-body\">\n\n        <div [ngClass]=\"getFromGroupClass(nome.invalid, nome.dirty)\">\n          <label for=\"inputNome\" class=\"col-sm-2 control-label\">Nome</label>\n\n          <div class=\"col-sm-10\">\n            <input \n                  type=\"text\" \n                  [(ngModel)]=\"user.nome\" \n                  class=\"form-control\" \n                  name=\"nome\" \n                  id=\"inputNome\" \n                  #nome=\"ngModel\" \n                  placeholder=\"Nome\">\n            <span class=\"help-block\" *ngIf=\"nome.invalid && nome.dirty\">Nome é inválido</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(email.invalid, email.dirty)\">\n          <label for=\"inputEmail\" class=\"col-sm-2 control-label\">Email</label>\n\n          <div class=\"col-sm-10\">\n            <input \n                  type=\"email\" \n                  [(ngModel)]=\"user.email\" \n                  class=\"form-control\" \n                  name=\"email\" \n                  id=\"inputEmail\" \n                  #email=\"ngModel\" \n                  placeholder=\"Email\" \n                  email>\n            <span class=\"help-block\" *ngIf=\"email.invalid && email.dirty\">Email é inválido</span>\n          </div>\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(username.invalid, username.dirty)\">\n            <label for=\"inputUsername\" class=\"col-sm-2 control-label\">Nome de Usuário</label>\n  \n            <div class=\"col-sm-10\">\n              <input \n                    type=\"text\" \n                    [(ngModel)]=\"user.username\" \n                    class=\"form-control\" \n                    name=\"username\" \n                    id=\"inputUsername\" \n                    #username=\"ngModel\" \n                    placeholder=\"Nome de Usuário\" \n                    required>\n              <span class=\"help-block\" *ngIf=\"username.invalid && username.dirty\">Nome de Usuário é necessário</span>\n            </div>\n          </div>\n\n        <div [ngClass]=\"getFromGroupClass(senha.invalid, senha.dirty)\">\n          <label for=\"inputSenha\" class=\"col-sm-2 control-label\">Senha</label>\n\n          <div class=\"col-sm-10\">\n            <input \n                  type=\"password\" \n                  [(ngModel)]=\"user.senha\" \n                  class=\"form-control\" \n                  name=\"senha\" \n                  id=\"inputSenha\" \n                  #senha=\"ngModel\" \n                  placeholder=\"Senha\" \n                  required>\n            <span class=\"help-block\" *ngIf=\"senha.invalid && senha.dirty\">Senha é necessária</span>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"box-footer\">\n        <button type=\"button\" [routerLink]=\"['/login']\" class=\"btn btn-info\">Voltar</button>\n        <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info pull-right\">Gravar</button>\n      </div>\n    </form>\n  </div>\n</div>\n-->\n\n<!-- LAYOUT ALTERNATIVO -->\n<div class=\"login-box\">\n  <div class=\"login-logo\">\n    <p class=\"\"><b>Lista de Compras </b>Inteligente</p>\n  </div>\n\n  <div class=\"box box-info\">\n    <div class=\"card-body\">\n      <p></p>\n      <p class=\"login-box-msg\">Criar sua conta para acessar o sistema</p>\n\n      <div [ngClass]=\"classCss\" role=\"alert\" *ngIf=\"message\">\n        <span>{{ message.text }}</span>\n      </div>\n\n      <form #form=\"ngForm\" (ngSubmit)=\"register()\">\n\n        <div [ngClass]=\"getFromGroupClass(nome.invalid, nome.dirty)\">\n\n          <div class=\"mb-3\">\n            <input type=\"text\" \n            [(ngModel)]=\"user.nome\" \n            class=\"form-control\" \n            name=\"nome\" \n            id=\"inputNome\" \n            #nome=\"ngModel\" \n            placeholder=\"Nome\"\n            required>\n\n            <span class=\"help-block\" *ngIf=\"nome.invalid && nome.dirty\">Nome é necessário</span>\n          </div>\n\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(email.invalid, email.dirty)\">\n\n          <div class=\"mb-3\">\n            <input type=\"email\" \n            [(ngModel)]=\"user.email\" \n            class=\"form-control\" \n            name=\"email\" \n            id=\"inputEmail\" \n            #email=\"ngModel\" \n            placeholder=\"Email\"\n            email>\n\n            <span class=\"help-block\" *ngIf=\"email.invalid && email.dirty\">Email é inválido</span>\n          </div>\n\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(username.invalid, username.dirty)\">\n\n          <div class=\"mb-3\">\n            <input type=\"text\" \n            [(ngModel)]=\"user.username\" \n            class=\"form-control\" \n            name=\"username\" \n            id=\"inputUsername\" \n            #username=\"ngModel\" \n            placeholder=\"Nome de Usuário\"\n            required>\n\n            <span class=\"help-block\" *ngIf=\"username.invalid && username.dirty\">Nome de Usuário é necessário</span>\n          </div>\n\n        </div>\n\n        <div [ngClass]=\"getFromGroupClass(senha.invalid, senha.dirty)\">\n\n          <div class=\"mb-3\">\n            <input type=\"password\" \n            [(ngModel)]=\"user.senha\" \n            class=\"form-control\" \n            name=\"senha\" \n            id=\"inputSenha\" \n            #senha=\"ngModel\" \n            placeholder=\"Senha\"\n            required>\n          </div>\n\n          <span class=\"help-block\" *ngIf=\"senha.invalid && senha.dirty\">Senha é necessária</span>\n        </div>\n        \n        <div class=\"col-8\"></div>\n        <div class=\"col-4\">\n          <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-info btn-block\">Gravar</button>\n        </div>\n        \n      </form>\n\n      <div class=\"social-auth-links text-center mb-3\">\n        <p></p>\n      </div>\n\n      <p class=\"mb-1\"></p>\n      <p class=\"mb-0\">\n        <a [routerLink]=\"['/login']\"><h4>Faça login em vez disso</h4></a>\n      </p>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user-new/user-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/user-new/user-new.component.ts ***!
  \***********************************************************/
/*! exports provided: UserNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNewComponent", function() { return UserNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../model/user.model */ "./src/app/model/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UserNewComponent = /** @class */ (function () {
    function UserNewComponent(UserService, route) {
        this.UserService = UserService;
        this.route = route;
        this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '', '');
        this.shared = _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"].getInstance();
    }
    UserNewComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        if (id != undefined) {
            this.findById(id);
        }
    };
    UserNewComponent.prototype.findById = function (id) {
        var _this = this;
        this.UserService.findById(id).subscribe(function (responseApi) {
            _this.user = responseApi.data;
            _this.user.senha = '';
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserNewComponent.prototype.register = function () {
        var _this = this;
        this.message = {};
        this.UserService.createOrUpdate(this.user).subscribe(function (responseApi) {
            _this.user = new _model_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]('', '', '', '', '');
            var userRet = responseApi.data;
            _this.form.resetForm();
            _this.showMessage({
                type: 'success',
                text: userRet.username + " cadastrado com sucesso"
            });
            window.location.href = '/login';
        }, function (err) {
            _this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
            });
        });
    };
    UserNewComponent.prototype.showMessage = function (message) {
        var _this = this;
        this.message = message;
        this.buildClasses(message.type);
        setTimeout(function () {
            _this.message = undefined;
        }, 3000);
    };
    UserNewComponent.prototype.buildClasses = function (type) {
        this.classCss = {
            'alert': true
        };
        this.classCss['alert-' + type] = true;
    };
    UserNewComponent.prototype.getFromGroupClass = function (isInvalid, isDirty) {
        return {
            'form-group': true,
            'has-error': isInvalid && isDirty,
            'has-success': !isInvalid && isDirty
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])("form"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"])
    ], UserNewComponent.prototype, "form", void 0);
    UserNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-user-new',
            template: __webpack_require__(/*! ./user-new.component.html */ "./src/app/components/user-new/user-new.component.html"),
            styles: [__webpack_require__(/*! ./user-new.component.css */ "./src/app/components/user-new/user-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], UserNewComponent);
    return UserNewComponent;
}());



/***/ }),

/***/ "./src/app/model/ingrediente.model.ts":
/*!********************************************!*\
  !*** ./src/app/model/ingrediente.model.ts ***!
  \********************************************/
/*! exports provided: Ingrediente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingrediente", function() { return Ingrediente; });
var Ingrediente = /** @class */ (function () {
    function Ingrediente(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    return Ingrediente;
}());



/***/ }),

/***/ "./src/app/model/summary.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/summary.model.ts ***!
  \****************************************/
/*! exports provided: Summary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Summary", function() { return Summary; });
var Summary = /** @class */ (function () {
    function Summary() {
    }
    return Summary;
}());



/***/ }),

/***/ "./src/app/model/ticket.model.ts":
/*!***************************************!*\
  !*** ./src/app/model/ticket.model.ts ***!
  \***************************************/
/*! exports provided: Ticket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ticket", function() { return Ticket; });
var Ticket = /** @class */ (function () {
    function Ticket(id, number, title, status, priority, image, user, assignedUser, date, changes) {
        this.id = id;
        this.number = number;
        this.title = title;
        this.status = status;
        this.priority = priority;
        this.image = image;
        this.user = user;
        this.assignedUser = assignedUser;
        this.date = date;
        this.changes = changes;
    }
    return Ticket;
}());



/***/ }),

/***/ "./src/app/model/user.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/user.model.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, nome, email, senha, username) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.username = username;
    }
    //TESTE F5
    /**/ User.prototype.toString = function () {
        return this.id + "," + this.username + "," + this.senha;
    };
    return User;
}());



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DialogService = /** @class */ (function () {
    function DialogService() {
    }
    DialogService.prototype.confirm = function (message) {
        return new Promise(function (resolve) {
            return resolve(window.confirm(message || 'Confirmar?'));
        });
    };
    DialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/ingrediente.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/ingrediente.service.ts ***!
  \*************************************************/
/*! exports provided: IngredienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredienteService", function() { return IngredienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listacomprasinteligente.api */ "./src/app/services/listacomprasinteligente.api.ts");




var IngredienteService = /** @class */ (function () {
    function IngredienteService(http) {
        this.http = http;
    }
    IngredienteService.prototype.createOrUpdate = function (ingrediente) {
        if (ingrediente.id != null && ingrediente.id != '') {
            return this.http.put(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ingrediente", ingrediente); //UPDATE
        }
        else {
            ingrediente.id = null;
            return this.http.post(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ingrediente", ingrediente); //CREATE
        }
    };
    IngredienteService.prototype.findAll = function (page, count) {
        return this.http.get(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ingrediente/" + page + "/" + count);
    };
    IngredienteService.prototype.findById = function (id) {
        return this.http.get(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ingrediente/" + id);
    };
    IngredienteService.prototype.delete = function (id) {
        return this.http.delete(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ingrediente/" + id);
    };
    IngredienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IngredienteService);
    return IngredienteService;
}());



/***/ }),

/***/ "./src/app/services/listacomprasinteligente.api.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/listacomprasinteligente.api.ts ***!
  \*********************************************************/
/*! exports provided: BACK_END_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK_END_API", function() { return BACK_END_API; });
var BACK_END_API = 'http://localhost:8080/tcc';


/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
        this.showTemplate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return SharedService_1.instance = SharedService_1.instance || this;
    }
    SharedService_1 = SharedService;
    SharedService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new SharedService_1();
        }
        return this.instance;
    };
    SharedService.prototype.isLoggedIn = function () {
        if (this.user == null) {
            return false;
        }
        return this.user.email != '';
        /*if(sessionStorage.getItem("currentUser") == null){
          return false;
        }
        return true;*/
    };
    var SharedService_1;
    SharedService.instance = null;
    SharedService = SharedService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/ticket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/ticket.service.ts ***!
  \********************************************/
/*! exports provided: TicketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketService", function() { return TicketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listacomprasinteligente.api */ "./src/app/services/listacomprasinteligente.api.ts");




var TicketService = /** @class */ (function () {
    function TicketService(http) {
        this.http = http;
    }
    TicketService.prototype.createOrUpdate = function (ticket) {
        if (ticket.id != null && ticket.id != '') {
            return this.http.put(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ticket", ticket);
        }
        else {
            ticket.id = null;
            ticket.status = 'Novo';
            return this.http.post(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ticket", ticket);
        }
    };
    TicketService.prototype.findAll = function (page, count) {
        return this.http.get(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ticket/" + page + "/" + count);
    };
    TicketService.prototype.findById = function (id) {
        return this.http.get(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ticket/" + id);
    };
    TicketService.prototype.delete = function (id) {
        return this.http.delete(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ticket/" + id);
    };
    TicketService.prototype.findByParams = function (page, count, assignedToMe, t) {
        t.number = t.number == null ? 0 : t.number;
        t.title = t.title == '' ? 'uninformed' : t.title;
        t.status = t.status == '' ? 'uninformed' : t.status;
        t.priority = t.priority == '' ? 'uninformed' : t.priority;
        console.log(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ticket/" + page + "/" + count + "/" + t.number + "/" + t.title + "/" + t.status + "/" + t.priority + "/" + assignedToMe);
        return this.http.get(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ticket/" + page + "/" + count + "/" + t.number + "/" + t.title + "/" + t.status + "/" + t.priority + "/" + assignedToMe);
    };
    TicketService.prototype.changeStatus = function (status, ticket) {
        return this.http.put(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ticket/" + ticket.id + "/" + status, ticket);
    };
    TicketService.prototype.summary = function () {
        return this.http.get(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/ticket/summary");
    };
    TicketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TicketService);
    return TicketService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listacomprasinteligente.api */ "./src/app/services/listacomprasinteligente.api.ts");




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.login = function (user) {
        return this.http.post(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/auth", user);
    };
    UserService.prototype.createOrUpdate = function (user) {
        if (user.id != null && user.id != '') {
            return this.http.put(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/usuario", user); //UPDATE
        }
        else {
            user.id = null;
            return this.http.post(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/usuario", user); //CREATE
        }
    };
    UserService.prototype.findAll = function (page, count) {
        return this.http.get(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/usuario/" + page + "/" + count);
    };
    UserService.prototype.findById = function (id) {
        return this.http.get(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/usuario/" + id);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_listacomprasinteligente_api__WEBPACK_IMPORTED_MODULE_3__["BACK_END_API"] + "/api/usuario/" + id);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Desenvolvimento\GitHub\tcc-uva\WEB\listacomprasinteligente-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map