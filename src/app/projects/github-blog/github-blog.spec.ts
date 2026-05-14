import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubBlog } from './github-blog';

describe('GithubBlog', () => {
  let component: GithubBlog;
  let fixture: ComponentFixture<GithubBlog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubBlog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubBlog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
