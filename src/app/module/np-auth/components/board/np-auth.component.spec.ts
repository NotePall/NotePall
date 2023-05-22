import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpAuthComponent } from './np-auth.component';

describe('NpAuthComponent', () => {
  let component: NpAuthComponent;
  let fixture: ComponentFixture<NpAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
