import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import config from 'src/helpers/helper';
import token from 'src/helpers/token';
import getHeaders from 'src/helpers/headers';
import FetchSingleTaskType from 'src/types/FetchSingleTaskType';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  constructor(private http: HttpClient) { }
  @Input() id: number | null = null;
  @Input() name: string = "";
  @Input() isCompleted: boolean | undefined;
  @Input() listId: string | null | undefined = null;

  markCompleted() {
    try {
      if (this.id === null ||
        this.listId === null ||
        this.listId === undefined ||
        this.listId !== parseInt(this.listId).toString()
      ) {
        return;
      }

      const requestBody = {
        "name": this.name,
        "isCompleted": !this.isCompleted,
        "listId": parseInt(this.listId)
      };
      this.http.put<FetchSingleTaskType>(
        `${config.baseUrl}/api/v1/tasklist/${this.id}`,
        requestBody,
        getHeaders(token.getToken())
      ).subscribe((response) => {
        if (response.status === true) {
          this.isCompleted = response.items.completed;
        }
      });
    } catch (err) {
      console.log(err);
      return;
    }
  }
}
