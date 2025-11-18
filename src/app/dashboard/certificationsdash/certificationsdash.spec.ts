import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certificationsdash } from './certificationsdash';

describe('Certificationsdash', () => {
  let component: Certificationsdash;
  let fixture: ComponentFixture<Certificationsdash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certificationsdash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certificationsdash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
