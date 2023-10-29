import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubBlogComponent } from './github-blog.component';

describe('GithubBlogComponent', () => {
  let component: GithubBlogComponent;
  let fixture: ComponentFixture<GithubBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GithubBlogComponent]
    });
    fixture = TestBed.createComponent(GithubBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
