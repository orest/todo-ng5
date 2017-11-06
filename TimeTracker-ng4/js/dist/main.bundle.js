webpackJsonp(["main"],{

/***/ "../../../../../app/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../app/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../app/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../app/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"margin-top-20\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../app/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'my app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../app/app/app.component.html"),
        styles: [__webpack_require__("../../../../../app/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../app/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../app/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_dataService__ = __webpack_require__("../../../../../app/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_todoList_component__ = __webpack_require__("../../../../../app/app/todo/todoList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__todo_todo_component__ = __webpack_require__("../../../../../app/app/todo/todo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_sortablejs__ = __webpack_require__("../../../../angular-sortablejs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular_sortablejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular_sortablejs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_6__todo_todoList_component__["a" /* TodoListComponent */] },
    { path: "todo/:id", component: __WEBPACK_IMPORTED_MODULE_8__todo_todo_component__["a" /* TodoComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__todo_todoList_component__["a" /* TodoListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__todo_todo_component__["a" /* TodoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular_sortablejs__["SortablejsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(routes, {
                useHash: true,
                enableTracing: false
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__shared_dataService__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../app/app/shared/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.todos = [];
    }
    DataService.prototype.loadTodos = function () {
        var _this = this;
        return this.http.get("/api/todos")
            .map(function (data) {
            _this.todos = data;
            return true;
        });
    };
    DataService.prototype.loadAllTodos = function () {
        var _this = this;
        return this.http.get("api/todos/all")
            .map(function (data) {
            _this.todos = data;
            return true;
        });
    };
    DataService.prototype.getById = function (id) {
        return this.http.get("/api/todos/" + id)
            .map(function (data) {
            return data;
        });
    };
    DataService.prototype.createTodo = function (todo) {
        return this.http.post("/api/todos", todo, {}).map(function (p) {
            return true;
        });
    };
    DataService.prototype.saveTodo = function (todo) {
        return this.http.put("/api/todos/" + todo.id, todo, {}).map(function (p) {
            return true;
        });
    };
    DataService.prototype.startTodo = function (todo) {
        return this.http.put("api/todos/start/?id=" + todo.id, todo).map(function (p) {
            return true;
        });
    };
    DataService.prototype.deleteTodo = function (todo) {
        return this.http.delete("/api/todos/" + todo.id, {}).map(function (p) {
            return true;
        });
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=dataService.js.map

/***/ }),

/***/ "../../../../../app/app/shared/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToDo; });
var ToDo = (function () {
    function ToDo() {
    }
    return ToDo;
}());

//# sourceMappingURL=todo.js.map

/***/ }),

/***/ "../../../../../app/app/todo/todo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default\">\r\n\t<div class=\"header-nav\">\r\n\t\t<div class=\"navbar-brand\">\r\n\t\t\t<a routerLink=\"/\">\r\n\t\t\t\t<i class=\"glyphicon glyphicon-chevron-left\"></i> Back </a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<hr>\r\n<div class=\"alert alert-success\" *ngIf=\"isSuccess\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n\t<strong>Successfully Saved</strong>\r\n\tData saved successfuly\r\n\r\n</div>\r\n\r\n<div class=\"alert alert-danger\" *ngIf=\"isError\">\r\n\t<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n\t{{errorMessage|json}}\r\n</div>\r\n\r\n<div class=\"panel panel-primary\">\r\n\t<div class=\"panel-heading\">Todo Details</div>\r\n\t<div class=\"panel-body\">\r\n\t\t<div class=\"col-md-10 col-md-offset-1\">\r\n\t\t\t<form novalidate #editForm=\"ngForm\" class=\"form-horizontal\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-md-2\">Title</label>\r\n\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t<textarea name=\"title\" [(ngModel)]=\"todo.title\" #title=\"ngModel\" required class=\"form-control\" rows=\"8\"></textarea>\r\n\t\t\t\t\t\t<div class=\"text-danger\" *ngIf=\"title.touched && title.invalid && title.errors.required\">required!</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-md-2\">Minutes Spent</label>\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<input type=\"number\" name=\"minutesSpent\" [(ngModel)]=\"todo.minutesSpent\" class=\"form-control\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<button class=\"btn btn-default \" (click)=\"startTodo()\">\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-play\"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-md-2\">Priority</label>\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t\t<input type=\"text\" name=\"priority\" [(ngModel)]=\"todo.priority\" class=\"form-control\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label class=\"col-md-2\">Start Date</label>\r\n\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t<input type=\"text\" readonly value=\"{{todo.startDate}}\" class=\"form-control\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-md-2\">Completed Date</label>\r\n\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t<input type=\"text\" readonly value=\"{{todo.endDate|date:'medium'}}\" class=\"form-control\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t<div class=\"checkbox\">\r\n\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"isCompleted\" [(ngModel)]=\"todo.isCompleted\">Is Completed</label>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<div class=\"col-md-2\">\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t<button class=\"btn btn-success \" (click)=\"saveTodo()\" [disabled]=\"editForm.invalid\">\r\n\t\t\t\t\t\t\t\tSave\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-floppy-disk\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-danger \" (click)=\"deleteTodo()\">\r\n\t\t\t\t\t\t\t\tDelete\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-trash\"> </i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/']\" class=\"btn btn-default\">\r\n\t\t\t\t\t\t\t\tCancel\r\n\t\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t\t<i class=\"glyphicon glyphicon-remove\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\r\n\r\n\t</div>\r\n</div>\r\n\r\n\r\n\r\n<!-- \r\nisCompleted: boolean;\r\nstarDate: Date;\r\nendDate: Date; -->"

/***/ }),

/***/ "../../../../../app/app/todo/todo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dataService__ = __webpack_require__("../../../../../app/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_todo__ = __webpack_require__("../../../../../app/app/shared/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoComponent = (function () {
    function TodoComponent(dataService, activeRoute) {
        this.dataService = dataService;
        this.activeRoute = activeRoute;
        this.todo = new __WEBPACK_IMPORTED_MODULE_3__shared_todo__["a" /* ToDo */]();
        this.isError = false;
        this.isSuccess = false;
        this.errorMessage = "";
    }
    TodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var eventId = this.activeRoute.snapshot.params["id"];
        this.dataService.getById(eventId).subscribe(function (data) {
            _this.todo = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    TodoComponent.prototype.saveTodo = function () {
        var _this = this;
        this.isError = false;
        this.isSuccess = false;
        this.dataService.saveTodo(this.todo).subscribe(function (p) {
            console.log(p);
            _this.isSuccess = true;
        }, function (error) {
            _this.isError = true;
            _this.errorMessage = error;
            //console.log(error);
        });
    };
    TodoComponent.prototype.startTodo = function () {
        var _this = this;
        this.isError = false;
        this.isSuccess = false;
        this.dataService.startTodo(this.todo).subscribe(function (p) {
            console.log(p);
            _this.isSuccess = true;
        }, function (error) {
            _this.isError = true;
            _this.errorMessage = error;
            //console.log(error);
        });
    };
    TodoComponent.prototype.deleteTodo = function () {
        var _this = this;
        this.isError = false;
        this.isSuccess = false;
        this.dataService.deleteTodo(this.todo).subscribe(function (p) {
            console.log(p);
            _this.isSuccess = true;
        }, function (error) {
            _this.isError = true;
            _this.errorMessage = error;
            //console.log(error);
        });
    };
    return TodoComponent;
}());
TodoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-todo',
        template: __webpack_require__("../../../../../app/app/todo/todo.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_dataService__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], TodoComponent);

var _a, _b;
//# sourceMappingURL=todo.component.js.map

/***/ }),

/***/ "../../../../../app/app/todo/todoList.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-heading text-right\">\r\n\t<button class=\"btn btn-warning\" (click)=\"showAllToDos()\">Show All</button>\r\n</div>\r\n<div class=\"display-box\">\r\n\t<ul class=\"list-group display-box-item todo\" [sortablejs]=\"todos\" [sortablejsOptions]=\"sortOptions\">\r\n\t\t<li class=\"list-group-item \"  [ngClass]=\"{'active':(!!t.startDate)}\"  *ngFor=\"let t of todos; let i = index\">\r\n\t\t\t<!-- <span class=\"badge\">8 </span> -->\r\n\t\t\t<div class=\"row \">\r\n\r\n\t\t\t\t<div *ngIf=\"t.isCompleted else elseBlock\">\r\n\t\t\t\t\t<div class=\"col-sm-9 col-xs-6\">\r\n\t\t\t\t\t\t<s>{{t.title}}</s>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-3 col-xs-6 text-right\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['./todo',t.id]\" class=\"no-decor\" class=\"btn btn-sm btn-default\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-larger glyphicon glyphicon-pencil\"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t\t<ng-template #elseBlock>\r\n\t\t\t\t\t<div class=\"col-sm-10 col-xs-6\">\r\n\t\t\t\t\t\t<span class=\"drag-handle\">☰</span>\r\n\t\t\t\t\t\t<span >{{t.title}}</span> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-2 col-xs-6 text-right\">\r\n\t\t\t\t\t\t<a [routerLink]=\"['./todo',t.id]\" class=\"no-decor\" class=\"btn btn-sm btn-default\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-larger glyphicon glyphicon-pencil\"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t\t<a (click)=\"markAsCompleted(t)\" class=\"btn btn-success\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t<i class=\"icon-larger glyphicon glyphicon glyphicon-ok \"></i>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</a>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<div class=\"panel panel-primary display-box-item\">\r\n\t\t<div class=\"panel-heading text-center\">Add New </div>\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<form novalidate #addForm=\"ngForm\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<textarea name=\"newItem\" [(ngModel)]=\"newToDo.title\" #newItem=\"ngModel\" required class=\"form-control\" rows=\"5\"></textarea>\r\n\t\t\t\t\t<div class=\"text-danger\" *ngIf=\"newItem.touched && newItem.invalid && newItem.errors.required\">required!</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<button class=\"btn btn-success width100\" (click)=\"addNewTodo(addForm)\" [disabled]=\"addForm.invalid\">ADD</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../app/app/todo/todoList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_todo__ = __webpack_require__("../../../../../app/app/shared/todo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_dataService__ = __webpack_require__("../../../../../app/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TodoListComponent = (function () {
    function TodoListComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.todos = [];
        this.newToDo = new __WEBPACK_IMPORTED_MODULE_1__shared_todo__["a" /* ToDo */]();
        this.sortOptions = {
            handle: ".drag-handle",
            ghostClass: "sortable-ghost",
            //	filter: ".active",
            onUpdate: function (event) {
                _this.postChangesToServer(event);
            }
        };
    }
    TodoListComponent.prototype.ngOnInit = function () {
        this.reload();
    };
    TodoListComponent.prototype.addNewTodo = function (form) {
        var _this = this;
        if (this.newToDo.title) {
            this.newToDo.priority = this.todos.length + 1;
            this.dataService.createTodo(this.newToDo).subscribe(function (p) {
                _this.reload();
                form.resetForm();
                _this.newToDo = new __WEBPACK_IMPORTED_MODULE_1__shared_todo__["a" /* ToDo */]();
            }, function (error) {
            });
        }
    };
    TodoListComponent.prototype.editTodo = function (todo) {
        this.router.navigate(["./todo", 1]);
    };
    TodoListComponent.prototype.markAsCompleted = function (todo) {
        var _this = this;
        todo.isCompleted = true;
        this.dataService.saveTodo(todo).subscribe(function (p) { return _this.reload(); });
    };
    TodoListComponent.prototype.postChangesToServer = function (event) {
        for (var index = 0; index < this.todos.length; index++) {
            var todo = this.todos[index];
            todo.priority = index;
            //console.log(todo)
            this.dataService.saveTodo(todo).subscribe();
        }
    };
    TodoListComponent.prototype.showAllToDos = function () {
        var _this = this;
        this.dataService.loadAllTodos().subscribe(function (p) {
            _this.todos = _this.dataService.todos;
            //console.log(this.todos);
        }, function (error) {
            console.log(error);
        });
    };
    TodoListComponent.prototype.reload = function () {
        var _this = this;
        this.dataService.loadTodos().subscribe(function (p) {
            _this.todos = _this.dataService.todos;
            console.log(_this.todos);
        }, function (error) {
            console.log(error);
        });
    };
    return TodoListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TodoListComponent.prototype, "mode", void 0);
TodoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "todos",
        template: __webpack_require__("../../../../../app/app/todo/todoList.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_dataService__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_dataService__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], TodoListComponent);

var _a, _b;
//# sourceMappingURL=todoList.component.js.map

/***/ }),

/***/ "../../../../../app/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../app/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../app/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../app/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../app/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map