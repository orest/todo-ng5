import { Component, OnInit, Input } from "@angular/core"
import { SortablejsOptions } from 'angular-sortablejs';

import { ToDo } from "../shared/todo";
import { DataService } from "../shared/dataService";
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

@Component({
	selector: "todos",
	templateUrl: "./todoList.component.html"
})
export class TodoListComponent implements OnInit {
	@Input() mode: string;

	public todos: ToDo[] = [];
	public newToDo: ToDo = new ToDo();
	private sortOptions: SortablejsOptions = {
		handle: ".drag-handle",
		ghostClass: "sortable-ghost",
	//	filter: ".active",
		onUpdate: (event: any) => {
			this.postChangesToServer(event);
		}
	};

	constructor(private dataService: DataService, private router: Router) { }

	ngOnInit(): void {
		this.reload();
	}

	addNewTodo(form: NgForm) {
		if (this.newToDo.title) {
			this.newToDo.priority=this.todos.length+1;
			this.dataService.createTodo(this.newToDo).subscribe(p => {
				this.reload();
				form.resetForm();
				this.newToDo = new ToDo();
			}, error => {

			});
		}
	}

	editTodo(todo) {
		this.router.navigate(["./todo", 1]);
	}

	markAsCompleted(todo) {
		todo.isCompleted = true;
		this.dataService.saveTodo(todo).subscribe(p => this.reload());
	}

	postChangesToServer(event: any) {
		// var tempTodo = this.todos.splice(event.oldIndex - 1, 1);
		// this.todos.splice(event.newIndex + 1, 0, tempTodo[0]);

		for (var index = 0; index < this.todos.length; index++) {
			var todo = this.todos[index];
			todo.priority = index;
			console.log(todo)
			this.dataService.saveTodo(todo).subscribe();
		}
		//console.log(this.todos);
		//console.log(event);
	}

	showAllToDos(){
		this.dataService.loadAllTodos().subscribe(p => {
			this.todos = this.dataService.todos;
			console.log(this.todos);
		}, error => {
			console.log(error);
		});
	}

	private reload() {
		this.dataService.loadTodos().subscribe(p => {
			this.todos = this.dataService.todos;
			console.log(this.todos);
		}, error => {
			console.log(error);
		});
	}
}
