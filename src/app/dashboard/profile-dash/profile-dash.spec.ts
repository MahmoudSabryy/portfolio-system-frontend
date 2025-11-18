import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDash } from './profile-dash';

describe('ProfileDash', () => {
  let component: ProfileDash;
  let fixture: ComponentFixture<ProfileDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
