import { CommonModule } from '@angular/common';
import { FetchApi } from './../../fetchingService/fetch-api';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-skills-dash',
  imports: [CommonModule],
  templateUrl: './skills-dash.html',
  styleUrl: './skills-dash.css',
})
export class SkillsDash {
  constructor(private FetchApi: FetchApi) {}
  skillsData: any[] = [];
  isActiveAdd = false;

  newSkill = {
    id: '',
    name: '',
    icon: '',
  };

  async ngOnInit() {
    this.skillsData = await this.FetchApi.fetchData('http://localhost:3000/skills', 'GET');
    console.log(this.skillsData);
  }
  changeIsActive() {
    this.isActiveAdd = !this.isActiveAdd;
  }
  selectedFile!: File;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  @ViewChild('mySkillId') SkillId!: ElementRef;
  @ViewChild('mySkillName') SkillName!: ElementRef;
  @ViewChild('mySkillIcon') SkillIcon!: ElementRef;
  getAddNewSkillInput() {
    this.newSkill.name = this.SkillName.nativeElement.value;
    this.newSkill.id = this.SkillId.nativeElement.value;
    this.addSkill();
  }

  async addSkill() {
    if (this.SkillName.nativeElement.value == '' || this.selectedFile == null) {
      alert('please fill the skill');
      return;
    }
    const formData = new FormData();
    formData.append('name', this.SkillName.nativeElement.value);
    formData.append('icon', this.selectedFile);
    const skill = await this.FetchApi.addFormData(
      'http://localhost:3000/skills/create',
      'POST',
      formData
    );
    alert('Skill Added Successfully');
    this.changeIsActive();
  }

  async deleteSkill(id: number) {
    await this.FetchApi.deleteSkill(id);
    this.skillsData = this.skillsData.filter((x) => x.ids !== id);
  }
}
