import { TestBed } from '@angular/core/testing';

import { ModopreparoService } from './modopreparo.service';

describe('ModopreparoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModopreparoService = TestBed.get(ModopreparoService);
    expect(service).toBeTruthy();
  });
});
