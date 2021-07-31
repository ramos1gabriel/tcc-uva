import { TestBed } from '@angular/core/testing';

import { ListacompraService } from './listacompra.service';

describe('ListacompraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListacompraService = TestBed.get(ListacompraService);
    expect(service).toBeTruthy();
  });
});
