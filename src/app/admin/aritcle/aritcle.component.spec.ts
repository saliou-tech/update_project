import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AritcleComponent } from './aritcle.component';

describe('AritcleComponent', () => {
  let component: AritcleComponent;
  let fixture: ComponentFixture<AritcleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AritcleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AritcleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
