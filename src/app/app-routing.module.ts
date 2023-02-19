import { NgModule } from '@angular/core';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AuthGuard } from 'src/guards/AuthGuard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "create/list", component: CreateListComponent, canActivate: [AuthGuard] },
  { path: "create/task/:id", component: CreateTaskComponent, canActivate: [AuthGuard] },
  { path: "show/list", component: ListTodoComponent, canActivate: [AuthGuard] },
  { path: "show/task/:id", component: TaskListComponent, canActivate: [AuthGuard] },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
