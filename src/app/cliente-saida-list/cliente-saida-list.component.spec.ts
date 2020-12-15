import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteSaidaListComponent } from './cliente-saida-list.component';

describe('ClienteSaidaListComponent', () => {
  let component: ClienteSaidaListComponent;
  let fixture: ComponentFixture<ClienteSaidaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteSaidaListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteSaidaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
