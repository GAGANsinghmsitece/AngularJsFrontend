import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { ListItemComponent } from './list-item/list-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { HomePageComponent } from './home-page/home-page.component';
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatListModule } from "@angular/material/list";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon"
import { MatCheckboxModule } from "@angular/material/checkbox";
import { HeadingComponent } from './heading/heading.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { FormHeadingComponent } from './form-heading/form-heading.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import CustomHttpInterceptor from "../helpers/CustomHttpInterceptor";
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CreateListComponent,
    CreateTaskComponent,
    ListTodoComponent,
    ListItemComponent,
    TaskListComponent,
    TaskComponent,
    HomePageComponent,
    HeadingComponent,
    DialogComponent,
    FormHeadingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatListModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule
  ],
  providers: [
    // The multi: true option is used because we are providing a list of interceptors, rather than a single interceptor.
    { provide: HTTP_INTERCEPTORS, useClass: CustomHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
