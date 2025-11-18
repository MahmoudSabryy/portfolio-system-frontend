import { FetchApi } from './../../fetchingService/fetch-api';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile-dash',
  imports: [CommonModule],
  templateUrl: './profile-dash.html',
  styleUrl: './profile-dash.css',
})
export class ProfileDash {
  constructor(private FetchApi: FetchApi) {}

  profileSectionEditInput = {
    section1: {
      first: '',
      second: '',
    },
    section2: {
      first: '',
      second: '',
    },
    section3: {
      first: '',
      second: '',
      third: '',
    },
  };
  isActiveProfile: boolean = false;

  @Input() ProfileData!: any;

  @ViewChild('myFormHome') myFormHome!: ElementRef;

  @ViewChild('titlep1') mytitlep1!: ElementRef;
  @ViewChild('titlep2') mytitlep2!: ElementRef;
  @ViewChild('titlep3') mytitlep3!: ElementRef;
  @ViewChild('titlep4') mytitlep4!: ElementRef;
  @ViewChild('titlep5') mytitlep5!: ElementRef;
  @ViewChild('titlep6') mytitlep6!: ElementRef;
  @ViewChild('titlep7') mytitlep7!: ElementRef;

  closeBtnProfile() {
    this.isActiveProfile = false;
  }

  changeIsActive() {
    this.isActiveProfile = !this.isActiveProfile;
  }
  hideSection() {
    if (this.isActiveProfile === false) {
      this.myFormHome.nativeElement.classList.add('d-none');
      this.isActiveProfile = !this.isActiveProfile;
    }
  }
  displaySection() {
    if (this.isActiveProfile == true) {
      this.myFormHome.nativeElement.classList.remove('d-none');
    }
  }

  getProfileDataFromInputs() {
    this.profileSectionEditInput.section1.first =
      this.mytitlep1.nativeElement.value || this.ProfileData.profileSection.section1.first;
    this.profileSectionEditInput.section1.second =
      this.mytitlep2.nativeElement.value || this.ProfileData.profileSection.section1.second;
    this.profileSectionEditInput.section2.first =
      this.mytitlep3.nativeElement.value || this.ProfileData.profileSection.section2.first;
    this.profileSectionEditInput.section2.second =
      this.mytitlep4.nativeElement.value || this.ProfileData.profileSection.section2.second;
    this.profileSectionEditInput.section3.first =
      this.mytitlep5.nativeElement.value || this.ProfileData.profileSection.section3.first;
    this.profileSectionEditInput.section3.second =
      this.mytitlep6.nativeElement.value || this.ProfileData.profileSection.section3.second;
    this.profileSectionEditInput.section3.third =
      this.mytitlep7.nativeElement.value || this.ProfileData.profileSection.section3.third;
  }

  async updateProfileData() {
    const result = await this.FetchApi.updateData(
      'http://localhost:3000/profile/update',
      'PUT',
      this.profileSectionEditInput
    );
  }
}
