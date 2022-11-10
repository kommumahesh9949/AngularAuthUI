import { TestBed } from '@angular/core/testing';

import { WorkingapiService } from './workingapi.service';

describe('WorkingapiService', () => {
  let service: WorkingapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkingapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
