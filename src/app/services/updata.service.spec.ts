import { TestBed } from '@angular/core/testing';

import { UpdataService } from './updata.service';

describe('UpdataService', () => {
  let service: UpdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
