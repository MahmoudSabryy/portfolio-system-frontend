import { FetchApi } from './../../fetchingService/fetch-api';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-education-dash',
  imports: [CommonModule],
  templateUrl: './education-dash.html',
  styleUrl: './education-dash.css',
})
export class EducationDash {
  constructor(private FetchApi: FetchApi) {}

  educationSectionEditInput = {
    section: {
      first: '',
      second: '',
      third: '',
    },
  };
  isActiveEducation: boolean = false;

  @Input() EducationData!: any;

  closeBtnEducation() {
    this.isActiveEducation = false;
  }

  @ViewChild('myFormAbout') myFormEducation!: ElementRef;
  changeIsActiveEducation() {
    this.isActiveEducation = !this.isActiveEducation;
  }
  hideSectionEducation() {
    if (this.isActiveEducation === false) {
      this.myFormEducation.nativeElement.classList.add('d-none');
      this.isActiveEducation = !this.isActiveEducation;
    }
  }
  displaySectionEducation() {
    if (this.isActiveEducation == true) {
      this.myFormEducation.nativeElement.classList.remove('d-none');
    }
  }
  @ViewChild('EducationTitle1') myEduTitle1!: ElementRef;
  @ViewChild('EducationTitle2') myEduTitle2!: ElementRef;
  @ViewChild('EducationTitle3') myEduTitle3!: ElementRef;

  getEducationDataFromInput() {
    this.educationSectionEditInput.section.first =
      this.myEduTitle1.nativeElement.value || this.EducationData.educationSection.section.first;

    this.educationSectionEditInput.section.second =
      this.myEduTitle2.nativeElement.value || this.EducationData.educationSection.section.second;

    this.educationSectionEditInput.section.third =
      this.myEduTitle3.nativeElement.value || this.EducationData.educationSection.section.third;
  }

  async updateEducationData() {
    const result = await this.FetchApi.updateData(
      'http://localhost:3000/education/update',
      'PUT',
      this.educationSectionEditInput
    );
  }
}
