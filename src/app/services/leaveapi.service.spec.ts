import { TestBed } from '@angular/core/testing';

import { LeaveapiService } from './leaveapi.service';

describe('LeaveapiService', () => {
  let service: LeaveapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
