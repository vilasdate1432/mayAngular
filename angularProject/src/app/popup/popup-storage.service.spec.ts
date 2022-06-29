import { TestBed } from '@angular/core/testing';

import { PopupStorageService } from './popup-storage.service';

describe('PopupStorageService', () => {
  let service: PopupStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
