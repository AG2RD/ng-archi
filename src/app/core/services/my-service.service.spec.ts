import { TestBed } from '@angular/core/testing';

import { MyLovelyService } from './my-service.service';

describe('MyServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyLovelyService = TestBed.get(MyLovelyService);
    expect(service).toBeTruthy();
  });
});
