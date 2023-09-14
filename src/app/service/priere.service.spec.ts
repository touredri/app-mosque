import { TestBed } from '@angular/core/testing';

import { PriereService } from './priere.service';

describe('PriereService', () => {
  let service: PriereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
