import { Component, OnInit } from "@angular/core"
import { ToDo } from "../shared/todo";
import { DataService } from "../shared/dataService";
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
    selector: "todos",
    templateUrl: "./todoList.component.html"
})
export class TodoListComponent implements OnInit {
    public todos: ToDo[] = [];
    public newToDo: ToDo = new ToDo();

    ngOnInit(): void {
        this.reload();
    }

    constructor(private dataService: DataService, private router: Router) {

    }

    addNewTodo(form: NgForm) {
        if (this.newToDo.title) {
            this.dataService.createTodo(this.newToDo).subscribe(p => {
                this.reload();
                form.resetForm();
                this.newToDo = new ToDo();
            }, error => {

            });
        }
	}
	
    editTodo(todo) {
        this.router.navigate(["./todo",1]);
    }

    private reload() {
        this.dataService.loadTodos().subscribe(p => {
            this.todos = this.dataService.todos;
        }, error => {
            console.log(error);
        });
    }
}
