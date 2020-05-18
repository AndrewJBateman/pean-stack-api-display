import { TestBed } from '@angular/core/testing';

import { CountryCheckService } from './country-check.service';

describe('CountryCheckService', () => {
  let service: CountryCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
