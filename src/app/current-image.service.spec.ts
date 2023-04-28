import { TestBed } from '@angular/core/testing';

import { CurrentImageService } from './current-image.service';

describe('CurrentImageService', () => {
  let service: CurrentImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
