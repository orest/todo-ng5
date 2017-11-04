import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToDo } from "./todo";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";

@Injectable()
export class DataService {
    constructor(private http: HttpClient) {
    }

    public todos: ToDo[] = [];

    loadTodos(): Observable<boolean> {
        return this.http.get("/api/todos")
            .map((data: ToDo[]) => {
                this.todos = data;
                return true;
            });
    }
    getById(id): Observable<ToDo> {
        return this.http.get("/api/todos/" + id)
            .map((data: ToDo) => {
                return data
            });
    }

    public createTodo(todo: ToDo) {
        return this.http.post("/api/todos", todo, {
            //headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
        }).map(p => {
            return true;
        });
	}
	
	
    public saveTodo(todo: ToDo) {
        return this.http.put("/api/todos/" + todo.id, todo, {
            //headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token),
        }).map(p => {
            return true;
        });
    }

}