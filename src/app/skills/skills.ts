import { FetchApi } from './../fetchingService/fetch-api';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  imports: [CommonModule],
})
export class Skills implements OnInit {
  skills: any[] = [];

  constructor(private FetchApi: FetchApi) {}

  async ngOnInit() {
    this.skills = await this.FetchApi.fetchData('http://localhost:3000/skills', 'GET');
    console.log(this.skills);
  }
}
