import { TestBed } from '@angular/core/testing';

import { MailequiposService } from './mailequipos.service';

describe('MailequiposService', () => {
  let service: MailequiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailequiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
