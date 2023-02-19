import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import getHeaders from 'src/helpers/headers';
import config from 'src/helpers/helper';
import token from 'src/helpers/token';
import FetchSingleTodoList from 'src/types/FetchSingleTodoListType';
import FetchTaskType from 'src/types/FetchTaskType';
import TaskType from 'src/types/TaskType';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) {
  }
  data: Array<TaskType> = [];
  listId: string | null | undefined;
  heading: string = "";
  description: string = "";
  ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get("id");
    if (this.listId === null || this.listId === undefined) {
      return;
    }
    try {
      this.http
        .get<FetchSingleTodoList>(
          `${config.baseUrl}/api/v1/todolist/${this.listId}`,
          getHeaders(token.getToken())
        )
        .subscribe((response) => {
          if (response.status === true) {
            this.heading = response.item.name;
            this.description = response.item.description;
            this.data = response.item.listItems;
          }

        });
    } catch (err) {
      console.log(err);
      return;
    }

  }
}
