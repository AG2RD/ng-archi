import { TestBed, async, inject } from '@angular/core/testing';

import { GandalfGuard } from './gandalf.guard';

describe('GandalfGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GandalfGuard]
    });
  });

  it('should ...', inject([GandalfGuard], (guard: GandalfGuard) => {
    expect(guard).toBeTruthy();
  }));
});
