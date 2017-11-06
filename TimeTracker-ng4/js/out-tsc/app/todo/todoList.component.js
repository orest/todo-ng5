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
var todo_1 = require("../shared/todo");
var dataService_1 = require("../shared/dataService");
var router_1 = require("@angular/router");
var TodoListComponent = (function () {
    function TodoListComponent(dataService, router) {
        var _this = this;
        this.dataService = dataService;
        this.router = router;
        this.todos = [];
        this.newToDo = new todo_1.ToDo();
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
                _this.newToDo = new todo_1.ToDo();
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
    core_1.Input(),
    __metadata("design:type", String)
], TodoListComponent.prototype, "mode", void 0);
TodoListComponent = __decorate([
    core_1.Component({
        selector: "todos",
        templateUrl: "./todoList.component.html"
    }),
    __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
], TodoListComponent);
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todoList.component.js.map