import { TestBed } from '@angular/core/testing';

import { HttpUsuariosService } from './http-usuarios.service';

describe('HttpUsuariosService', () => {
  let service: HttpUsuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpUsuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
