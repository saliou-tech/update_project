import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBySouscategorieComponent } from './article-by-souscategorie.component';

describe('ArticleBySouscategorieComponent', () => {
  let component: ArticleBySouscategorieComponent;
  let fixture: ComponentFixture<ArticleBySouscategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleBySouscategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBySouscategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
