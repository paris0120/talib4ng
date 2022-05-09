import { TestBed } from '@angular/core/testing';

import { Talib4ngService } from './talib4ng.service';

describe('Talib4ngService', () => {
  let service: Talib4ngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Talib4ngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
