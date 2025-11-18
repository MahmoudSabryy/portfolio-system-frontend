import { FetchApi } from './../fetchingService/fetch-api';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  data: any;

  constructor(private FetchApi: FetchApi) {}

  async ngOnInit() {
    this.data = await this.FetchApi.fetchData('http://localhost:3000/project', 'GET');

    console.log(this.data);
  }
}
