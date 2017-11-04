import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";

import { DataService } from './shared/dataService';
import { TodoListComponent } from './todo/todoList.component';
import { RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

let routes = [
    { path: "", component: TodoListComponent },
    { path: "todo/:id", component: TodoComponent },    
]

@NgModule({
    declarations: [
        AppComponent,
        TodoListComponent,
        TodoComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            enableTracing: false
        })
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
