import { TestBed } from '@angular/core/testing';

import { SamService } from './sam.service';

describe('SamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SamService = TestBed.get(SamService);
    expect(service).toBeTruthy();
  });
});
