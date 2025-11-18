import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceDash } from './experience-dash';

describe('ExperienceDash', () => {
  let component: ExperienceDash;
  let fixture: ComponentFixture<ExperienceDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceDash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
