import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import getHeaders from 'src/helpers/headers';
import config from 'src/helpers/helper';
import token from 'src/helpers/token';
import ErrorResponse from 'src/types/ErrorResponse';
import FetchTodoList from 'src/types/FetchTodoList';
import ListType from 'src/types/ListType';
import { ListItemComponent } from '../list-item/list-item.component';
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent {
  constructor(
    private http: HttpClient,
  ) {
  }
  data: Array<ListType> = [];
  ngOnInit() {

    try {
      this.http
        .get<FetchTodoList>(
          `${config.baseUrl}/api/v1/todolist`,
          getHeaders(token.getToken()))
        .subscribe((response) => {
          if (response?.status === true) {
            this.data = response?.items;
          }
        });
    } catch (err: any) {
      console.log(err?.status);
    }
  }
}
