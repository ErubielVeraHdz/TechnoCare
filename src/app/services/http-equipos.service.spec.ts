import { TestBed } from '@angular/core/testing';

import { HttpEquiposService } from './http-equipos.service';

describe('HttpEquiposService', () => {
  let service: HttpEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
