import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDash } from './education-dash';

describe('EducationDash', () => {
  let component: EducationDash;
  let fixture: ComponentFixture<EducationDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationDash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
