"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var dataService_1 = require("./shared/dataService");
var todoList_component_1 = require("./todo/todoList.component");
var router_1 = require("@angular/router");
var todo_component_1 = require("./todo/todo.component");
var angular_sortablejs_1 = require("angular-sortablejs");
var routes = [
    { path: "", component: todoList_component_1.TodoListComponent },
    { path: "todo/:id", component: todo_component_1.TodoComponent },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            todoList_component_1.TodoListComponent,
            todo_component_1.TodoComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            forms_1.FormsModule,
            angular_sortablejs_1.SortablejsModule,
            router_1.RouterModule.forRoot(routes, {
                useHash: true,
                enableTracing: false
            })
        ],
        providers: [dataService_1.DataService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map