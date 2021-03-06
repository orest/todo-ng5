﻿import {Injectable} from "@angular/core"
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ToDo} from "./todo";
import {Observable} from "rxjs/Observable";

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

    loadAllTodos(): Observable<boolean> {
        return this.http.get("api/todos/all")
            .map((data: ToDo[]) => {
                this.todos = data;
                return true;
            });
    }


    getById(id: number): Observable<ToDo> {
        return this.http.get("/api/todos/" + id)
            .map((data: ToDo) => {
                return data;
            });
    }

    public createTodo(todo: ToDo): Observable<boolean> {
        return this.http.post("/api/todos", todo).map(p => {
            return true;
        });
    }


    public saveTodo(todo: ToDo): Observable<boolean> {
        return this.http.put("/api/todos/" + todo.id, todo).map(p => {
            return true;
        });
    }

    public startTodo(todo: ToDo): Observable<boolean> {
        return this.http.put("/api/todos/start/?id=" + todo.id, todo).map(p => {
            return true;
        });
    }


    public deleteTodo(todo: ToDo) {
        return this.http.delete("/api/todos/" + todo.id).map(p => {
            return true;
        });
    }

    //deleteTodo
}