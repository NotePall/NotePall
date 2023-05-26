import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickNoteComponent } from './stick-note.component';

describe('StickNoteComponent', () => {
  let component: StickNoteComponent;
  let fixture: ComponentFixture<StickNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StickNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StickNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
