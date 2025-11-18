import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Certfications } from './certfications';

describe('Certfications', () => {
  let component: Certfications;
  let fixture: ComponentFixture<Certfications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Certfications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Certfications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
