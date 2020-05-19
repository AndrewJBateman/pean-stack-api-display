import { TestBed } from '@angular/core/testing';

import { NytBestsellersService } from './nyt-bestsellers.service';

describe('NytBestsellersService', () => {
  let service: NytBestsellersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NytBestsellersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
