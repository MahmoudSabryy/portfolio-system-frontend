import { FetchApi } from './../../fetchingService/fetch-api';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-dash',
  imports: [CommonModule],
  templateUrl: './about-dash.html',
  styleUrl: './about-dash.css',
})
export class AboutDash {
  constructor(private FetchApi: FetchApi) {}

  @Input() AboutData!: any;

  isActiveAbout: boolean = false;

  aboutSectionEditInput = {
    section1: {
      first: '',
      second: '',
      third: '',
      fourth: '',
      fifth: ' ',
    },
    section2: {
      first: '',
    },
  };

  @ViewChild('myFormAbout') myFormAbout!: ElementRef;
  changeIsActiveAbout() {
    this.isActiveAbout = !this.isActiveAbout;
  }
  hideSectionAbout() {
    if (this.isActiveAbout === false) {
      this.myFormAbout.nativeElement.classList.add('d-none');
      this.isActiveAbout = !this.isActiveAbout;
    }
  }
  displaySectionAbout() {
    if (this.isActiveAbout == true) {
      this.myFormAbout.nativeElement.classList.remove('d-none');
    }
  }

  @ViewChild('AboutTitle1') myAboutTitle1!: ElementRef;
  @ViewChild('AboutTitle2') myAboutTitle2!: ElementRef;
  @ViewChild('AboutTitle3') myAboutTitle3!: ElementRef;
  @ViewChild('AboutTitle4') myAboutTitle4!: ElementRef;
  @ViewChild('AboutTitle5') myAboutTitle5!: ElementRef;
  @ViewChild('AboutTitle6') myAboutTitle6!: ElementRef;

  getAboutDataFromInputs() {
    this.aboutSectionEditInput.section1.first =
      this.myAboutTitle1.nativeElement.value || this.AboutData.aboutSection.section1.first;

    this.aboutSectionEditInput.section1.second =
      this.myAboutTitle2.nativeElement.value || this.AboutData.aboutSection.section1.second;

    this.aboutSectionEditInput.section1.third =
      this.myAboutTitle3.nativeElement.value || this.AboutData.aboutSection.section1.third;

    this.aboutSectionEditInput.section1.fourth =
      this.myAboutTitle4.nativeElement.value || this.AboutData.aboutSection.section1.fourth;

    this.aboutSectionEditInput.section1.fifth =
      this.myAboutTitle5.nativeElement.value || this.AboutData.aboutSection.section1.fifth;

    this.aboutSectionEditInput.section2.first =
      this.myAboutTitle6.nativeElement.value || this.AboutData.aboutSection.section2.first;
  }

  async updateAboutData() {
    const result = await this.FetchApi.updateData(
      'http://localhost:3000/about/update',
      'PUT',
      this.aboutSectionEditInput
    );
  }

  closeBtnAbout() {
    this.isActiveAbout = false;
  }
}
