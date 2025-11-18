import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDash } from './skills-dash';

describe('SkillsDash', () => {
  let component: SkillsDash;
  let fixture: ComponentFixture<SkillsDash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsDash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsDash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
