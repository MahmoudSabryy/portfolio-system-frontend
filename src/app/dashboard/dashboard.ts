import { FetchApi } from './../fetchingService/fetch-api';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProfileDash } from './profile-dash/profile-dash';
import { AboutDash } from './about-dash/about-dash';
import { EducationDash } from './education-dash/education-dash';
import { ProjectDash } from './project-dash/project-dash';
import { SkillsDash } from './skills-dash/skills-dash';
import { ExperienceDash } from './experience-dash/experience-dash';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    ProfileDash,
    AboutDash,
    EducationDash,
    ProjectDash,
    SkillsDash,
    ExperienceDash,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  Profiledata: any;
  AboutData: any;
  EducationData: any;
  ProjectData: any;

  constructor(private FetchApi: FetchApi) {}

  async ngOnInit() {
    const result = await this.FetchApi.fetchDashboardData(
      [
        'http://localhost:3000/profile',
        'http://localhost:3000/about',
        'http://localhost:3000/education',
        'http://localhost:3000/project',
      ],
      'GET'
    );
    this.Profiledata = result.dashboardDataHome;
    this.AboutData = result.dashboardDataAbout;
    this.EducationData = result.dashboardDataEducation;
    this.ProjectData = result.dashboardDataProject;
  }

  //About

  // Education Section
}
