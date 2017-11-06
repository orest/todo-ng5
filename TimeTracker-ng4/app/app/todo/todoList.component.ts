﻿import { Component, OnInit } from "@angular/core"
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
	public todos: ToDo[] = [];
	public newToDo: ToDo = new ToDo();
	private sortOptions: SortablejsOptions = {
		handle: ".drag-handle",
		ghostClass: "sortable-ghost",
		onUpdate: (event: any) => {
			this.postChangesToServer(event);
		}
	};

	constructor(private dataService: DataService, private router: Router) {

	}

	ngOnInit(): void {
		this.reload();
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
		this.router.navigate(["./todo", 1]);
	}

	postChangesToServer(event: any) {
		for (var index = 0; index < this.todos.length; index++) {
			var todo = this.todos[index];
			todo.priority = index;
			this.dataService.saveTodo(todo).subscribe();
		}
		// console.log(this.todos);
		// console.log(event);
	}
	private reload() {
		this.dataService.loadTodos().subscribe(p => {
			this.todos = this.dataService.todos;
		}, error => {
			console.log(error);
		});
	}
}
