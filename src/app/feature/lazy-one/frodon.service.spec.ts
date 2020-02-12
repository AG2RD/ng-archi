import { TestBed } from '@angular/core/testing';

import { FrodonService } from './frodon.service';

describe('FrodonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrodonService = TestBed.get(FrodonService);
    expect(service).toBeTruthy();
  });
});
