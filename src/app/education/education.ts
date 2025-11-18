import { FetchApi } from './../fetchingService/fetch-api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.css',
})
export class Education {
  data: any;
  constructor(private FetchApi: FetchApi) {}

  async ngOnInit() {
    this.data = await this.FetchApi.fetchData('http://localhost:3000/education', 'GET');
    console.log(this.data);
  }
}
