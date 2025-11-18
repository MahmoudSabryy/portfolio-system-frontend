import { FetchApi } from './../../fetchingService/fetch-api';
import { CommonModule } from '@angular/common';

import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-project-dash',
  imports: [CommonModule],
  templateUrl: './project-dash.html',
  styleUrl: './project-dash.css',
})
export class ProjectDash {
  constructor(private FetchApi: FetchApi) {}

  isActiveproject: boolean = false;
  isActiveAddbtn: boolean = false;
  @Input() ProjectData!: any;

  @ViewChildren('projectId') projectIds!: QueryList<ElementRef>;
  @ViewChildren('projectName') projectNames!: QueryList<ElementRef>;
  @ViewChildren('projectDesc') projectDescs!: QueryList<ElementRef>;
  @ViewChildren('projectTools') projectTools!: QueryList<ElementRef>;
  @ViewChildren('projectLink') projectLinks!: QueryList<ElementRef>;

  @ViewChild('myFormproject') myFormproject!: ElementRef;
  changeIsActiveProject() {
    this.isActiveproject = !this.isActiveproject;
  }
  hideSectionProject() {
    if (this.isActiveproject === false) {
      this.myFormproject.nativeElement.classList.add('d-none');
      this.isActiveproject = !this.isActiveproject;
    }
  }
  displaySectionProject() {
    if (this.isActiveproject == true) {
      this.myFormproject.nativeElement.classList.remove('d-none');
    }
  }

  closeBtnProject() {
    this.isActiveproject = false;
  }

  getProjectDataFromInputs() {
    const ids = this.projectIds.toArray();
    const names = this.projectNames.toArray();
    const descs = this.projectDescs.toArray();
    const tools = this.projectTools.toArray();
    const links = this.projectLinks.toArray();

    for (let i = 0; i < names.length; i++) {
      const updatedProject = {
        id: ids[i]?.nativeElement?.value || this.ProjectData?.projectSection[i]?.id,
        projectName:
          names[i]?.nativeElement?.value || this.ProjectData?.projectSection[i]?.projectName,
        projectDesc:
          descs[i]?.nativeElement?.value || this.ProjectData?.projectSection[i]?.projectDesc,
        toolsData: tools[i]?.nativeElement?.value || this.ProjectData?.projectSection[i]?.toolsData,
        link: links[i]?.nativeElement?.value || this.ProjectData?.projectSection[i]?.link,
      };

      this.updateProjectData(updatedProject);
    }

    this.closeBtnProject();
  }

  updateProjectData(project: any) {
    console.log('SENDING TO BACKEND:', project);
    this.FetchApi.updateData('http://localhost:3000/project/update', 'PUT', project);
  }

  async deleteProject(id: string) {
    const response = await this.FetchApi.deleteProject(id);
  }

  @ViewChild('newProjectName') newProjectName!: ElementRef;
  @ViewChild('newProjectDesc') newProjectDesc!: ElementRef;
  @ViewChild('newProjectTools') newProjectTools!: ElementRef;
  @ViewChild('newProjectLink') newProjectLink!: ElementRef;

  async addNewProject() {
    const addedData = {
      projectName: this.newProjectName.nativeElement.value || '',
      projectDesc: this.newProjectDesc.nativeElement.value || '',
      toolsData: this.newProjectTools.nativeElement.value || '',
      link: this.newProjectLink.nativeElement.value || '',
    };
    await this.FetchApi.addData('http://localhost:3000/project/create', 'POST', addedData);
  }
}
