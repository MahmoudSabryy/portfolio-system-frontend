import { FetchApi } from './../fetchingService/fetch-api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  data: any;
  constructor(private FetchApi: FetchApi) {}

  async ngOnInit() {
    this.data = await this.FetchApi.fetchData('http://localhost:3000/exp', 'GET');
  }
}
