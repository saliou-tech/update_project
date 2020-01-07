import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleByCategoryComponent } from './article-by-category.component';

describe('ArticleByCategoryComponent', () => {
  let component: ArticleByCategoryComponent;
  let fixture: ComponentFixture<ArticleByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
