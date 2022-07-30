import { TestBed } from '@angular/core/testing';

import { HerramientasUIService } from './herramientas-ui.service';

describe('HerramientasUIService', () => {
  let service: HerramientasUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HerramientasUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
