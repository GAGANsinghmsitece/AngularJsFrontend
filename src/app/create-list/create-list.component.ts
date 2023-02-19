import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import getHeaders from 'src/helpers/headers';
import config from 'src/helpers/helper';
import token from 'src/helpers/token';
import CreateListType from 'src/types/CreateListType';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss']
})
export class CreateListComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  createList = this.fb.group({
    name: ["", [Validators.required]],
    description: ["", [Validators.required]]
  });
  onSubmit() {
    if (this.createList.valid) {
      this.http.post<CreateListType>(
        `${config.baseUrl}/api/v1/todolist`,
        this.createList.value,
        getHeaders(token.getToken())
      ).subscribe((response) => {
        if (response.status === true) {
          this.router.navigate(["/show/list"]);
        }
      });
    }
  }
}
