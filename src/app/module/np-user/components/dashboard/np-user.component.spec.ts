import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpUserComponent } from './np-user.component';

describe('NpUserComponent', () => {
  let component: NpUserComponent;
  let fixture: ComponentFixture<NpUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
