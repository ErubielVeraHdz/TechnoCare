import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailFormComponent } from './mail-form.component';

describe('MailFormComponent', () => {
  let component: MailFormComponent;
  let fixture: ComponentFixture<MailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
