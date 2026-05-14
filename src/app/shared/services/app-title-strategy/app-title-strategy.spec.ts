import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTitleStrategy } from './app-title-strategy';

describe('AppTitleStrategy', () => {
  let component: AppTitleStrategy;
  let fixture: ComponentFixture<AppTitleStrategy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTitleStrategy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTitleStrategy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
