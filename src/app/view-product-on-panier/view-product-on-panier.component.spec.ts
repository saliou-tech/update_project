import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductOnPanierComponent } from './view-product-on-panier.component';

describe('ViewProductOnPanierComponent', () => {
  let component: ViewProductOnPanierComponent;
  let fixture: ComponentFixture<ViewProductOnPanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductOnPanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductOnPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
