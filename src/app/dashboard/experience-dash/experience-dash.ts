import { CommonModule } from '@angular/common';
import { FetchApi } from './../../fetchingService/fetch-api';
import { Component, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-experience-dash',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './experience-dash.html',
  styleUrls: ['./experience-dash.css'],
})
export class ExperienceDash {
  constructor(private FetchApi: FetchApi) {}

  isActiveAdd: boolean = false;
  isActiveEdit: boolean = false;
  ExperienceData: any;

  async ngOnInit() {
    this.ExperienceData = await this.FetchApi.fetchData('http://localhost:3000/exp', 'GET');
    console.log(this.ExperienceData);
  }

  @ViewChild('myFormproject') myFormExp!: ElementRef;
  @ViewChildren('Experience1') myIds!: QueryList<ElementRef>;
  @ViewChildren('Experience2') myfirsts!: QueryList<ElementRef>;
  @ViewChildren('Experience3') myseconds!: QueryList<ElementRef>;
  @ViewChildren('Experience4') mythirds!: QueryList<ElementRef>;

  changeIsActiveProject() {
    this.isActiveEdit = !this.isActiveEdit;
  }
  hideSectionProject() {
    if (this.isActiveEdit === false) {
      this.myFormExp.nativeElement.classList.add('d-none');
      this.isActiveEdit = !this.isActiveEdit;
    }
  }
  displaySectionProject() {
    if (this.isActiveEdit == true) {
      this.myFormExp.nativeElement.classList.remove('d-none');
    }
  }

  closeBtnProject() {
    this.isActiveEdit = false;
  }
  async getProjectDataFromInputs() {
    const ids = this.myIds.toArray();
    const first = this.myfirsts.toArray();
    const second = this.myseconds.toArray();
    const third = this.mythirds.toArray();

    for (let i = 0; i < ids.length; i++) {
      const updatedProject = {
        ides: Number(ids[i]?.nativeElement?.value),
        section: {
          first:
            first[i]?.nativeElement?.value ||
            this.ExperienceData?.experienceSection[i]?.section.first,
          second:
            second[i]?.nativeElement?.value ||
            this.ExperienceData?.experienceSection[i]?.section.second,
          third:
            third[i]?.nativeElement?.value ||
            this.ExperienceData?.experienceSection[i]?.section.third,
        },
      };

      await this.updateExpData(updatedProject); // 🔹 انتظار الرد
    }

    this.closeBtnProject();
  }

  async deleteExp(id: string) {
    const response = await this.FetchApi.deleteExp(id);
  }
  async updateExpData(project: any) {
    console.log('SENDING TO BACKEND:', project);
    const updated = await this.FetchApi.updateData(
      'http://localhost:3000/exp/update',
      'PUT',
      project
    );
    console.log('UPDATED RESPONSE:', updated);
  }
}
