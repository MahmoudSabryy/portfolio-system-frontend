import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDash } from './project-dash';

describe('ProjectDash', () => {
  let component: ProjectDash;
  let fixture: ComponentFixture<ProjectDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectDash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
