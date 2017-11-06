import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/dataService';
import { ToDo } from '../shared/todo';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {

	public todo: ToDo = new ToDo();
	public isError: boolean = false;
	public isSuccess: boolean = false;
	public errorMessage: string = "";

	constructor(private dataService: DataService, private activeRoute: ActivatedRoute) { }

	ngOnInit() {
		var eventId = this.activeRoute.snapshot.params["id"];
		this.dataService.getById(eventId).subscribe(data => {
			this.todo = data;
			console.log(data)
		}, error => {
			console.log(error);
		})
	}

	public saveTodo() {
		this.isError = false;
		this.isSuccess = false;

		this.dataService.saveTodo(this.todo).subscribe(p => {
			console.log(p);
			this.isSuccess = true;
		}, error => {
			this.isError = true;
			this.errorMessage = error;
			//console.log(error);
		});
	}

	public startTodo(){
		
	}
	public deleteTodo() {
		this.isError = false;
		this.isSuccess = false;

		this.dataService.deleteTodo(this.todo).subscribe(p => {
			console.log(p);
			this.isSuccess = true;
		}, error => {
			this.isError = true;
			this.errorMessage = error;
			//console.log(error);
		});
	}


	

}
