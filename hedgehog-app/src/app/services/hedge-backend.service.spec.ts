import { TestBed } from '@angular/core/testing';

import { HedgeBackendService } from './hedge-backend.service';

describe('HedgeBackendService', () => {
  let service: HedgeBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HedgeBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
