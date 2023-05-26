import { TestBed } from '@angular/core/testing';

import { StickynoteService } from './stickynote.service';

describe('StickynoteService', () => {
  let service: StickynoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StickynoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
