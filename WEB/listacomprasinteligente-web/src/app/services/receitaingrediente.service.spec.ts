import { TestBed } from '@angular/core/testing';

import { ReceitaingredienteService } from './receitaingrediente.service';

describe('ReceitaingredienteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceitaingredienteService = TestBed.get(ReceitaingredienteService);
    expect(service).toBeTruthy();
  });
});
