import { TestBed } from '@angular/core/testing';

import { CrudContactosService } from './crud-contactos.service';

describe('CrudContactosService', () => {
  let service: CrudContactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudContactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
