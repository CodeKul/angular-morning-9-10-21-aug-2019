import { TestBed } from '@angular/core/testing';

import { DtService } from './dt.service';

describe('DtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DtService = TestBed.get(DtService);
    expect(service).toBeTruthy();
  });
});
