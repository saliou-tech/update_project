import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCommandeComponent } from './client-commande.component';

describe('ClientCommandeComponent', () => {
  let component: ClientCommandeComponent;
  let fixture: ComponentFixture<ClientCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
