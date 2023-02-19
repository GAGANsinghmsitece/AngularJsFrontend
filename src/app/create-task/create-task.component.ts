import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import getHeaders from 'src/helpers/headers';
import config from 'src/helpers/helper';
import token from 'src/helpers/token';
import FetchSingleTaskType from 'src/types/FetchSingleTaskType';
import { DialogComponent } from '../dialog/dialog.component';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private _snackbar: MatSnackBar
  ) { }
  createTask = this.fb.group({
    name: ["", Validators.required]
  });
  listId: string | null | undefined;
  ngOnInit() {
    this.listId = this.route.snapshot.paramMap.get("id");
  }
  showNotification() {
    this._snackbar.openFromComponent(DialogComponent, {
      duration: 5 * 1000,
      data: {
        message: "Task Created Successfully!!!",
        url: `/show/task/${this.listId}`
      }
    });
  }
  onSubmit() {
    if (!this.listId || !this.createTask.valid) {
      return;
    }
    try {
      const requestBody = {
        name: this.createTask.value.name,
        todolistId: this.listId
      };
      this.http.post<FetchSingleTaskType>(
        `${config.baseUrl}/api/v1/tasklist`,
        requestBody,
        getHeaders(token.getToken())
      ).subscribe((response) => {
        if (response.status === true) {
          this.showNotification();
        }
      });
    } catch (err) {
      console.log(err);
      return;
    }

  }
}

