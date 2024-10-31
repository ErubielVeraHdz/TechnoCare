import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FomularioDispositivoComponent } from './formulario-dispositivo.component';

describe('FormularioDispositivoComponent', () => {
  let component: FomularioDispositivoComponent;
  let fixture: ComponentFixture<FomularioDispositivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FomularioDispositivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FomularioDispositivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
