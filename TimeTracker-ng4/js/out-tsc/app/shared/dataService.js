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
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
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
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map