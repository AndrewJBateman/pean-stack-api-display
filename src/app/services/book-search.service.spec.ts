import { TestBed } from '@angular/core/testing';

import { GoogleBookService } from './book-search.service';

describe('BookSearchService', () => {
  let service: GoogleBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
