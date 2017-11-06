"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dataService_1 = require("../shared/dataService");
var todo_1 = require("../shared/todo");
var TodoComponent = (function () {
    function TodoComponent(dataService, activeRoute) {
        this.dataService = dataService;
        this.activeRoute = activeRoute;
        this.todo = new todo_1.ToDo();
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
    core_1.Component({
        selector: 'app-todo',
        templateUrl: './todo.component.html',
    }),
    __metadata("design:paramtypes", [dataService_1.DataService, router_1.ActivatedRoute])
], TodoComponent);
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map