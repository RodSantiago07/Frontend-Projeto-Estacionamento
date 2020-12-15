import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSaidaClienteComponent } from './registrar-saida-cliente.component';

describe('RegistrarSaidaClienteComponent', () => {
  let component: RegistrarSaidaClienteComponent;
  let fixture: ComponentFixture<RegistrarSaidaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSaidaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarSaidaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
