import { FetchApi } from './../fetchingService/fetch-api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  data: any;
  constructor(private FetchApi: FetchApi) {}

  async ngOnInit() {
    this.data = await this.FetchApi.fetchData('http://localhost:3000/about', 'GET');
  }
}
