import { TestBed } from '@angular/core/testing';

import { MailreportesService } from './mailreportes.service';

describe('MailreportesService', () => {
  let service: MailreportesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailreportesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
