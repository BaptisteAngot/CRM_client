import { TestBed } from '@angular/core/testing';

import { OrigineService } from './origine.service';

describe('OrigineService', () => {
  let service: OrigineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrigineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
