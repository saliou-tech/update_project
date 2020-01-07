import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureclientComponent } from './factureclient.component';

describe('FactureclientComponent', () => {
  let component: FactureclientComponent;
  let fixture: ComponentFixture<FactureclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
