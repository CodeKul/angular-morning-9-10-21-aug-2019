import { TestBed } from '@angular/core/testing';

import { ConService } from './con.service';

describe('ConService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConService = TestBed.get(ConService);
    expect(service).toBeTruthy();
  });
});
