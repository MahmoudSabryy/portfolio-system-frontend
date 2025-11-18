import { FetchApi } from './../fetchingService/fetch-api';
import { Component, ViewChild, ElementRef } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],

  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  data: any;
  currentImg!: string;
  constructor(private FetchApi: FetchApi) {}

  async ngOnInit() {
    this.data = await this.FetchApi.fetchData('http://localhost:3000/profile', 'GET');
    console.log(this.data);
  }

  @ViewChild('imageInput') myimgInput!: ElementRef;
  async updateImage() {
    this.currentImg = this.myimgInput.nativeElement.value;
    const imgAbsolutePath = this.currentImg.slice(12);

    this.data.image = await this.FetchApi.updateData(
      'http://localhost:3000/profile/updateimage',
      'PATCH',
      imgAbsolutePath
    );
  }
}
