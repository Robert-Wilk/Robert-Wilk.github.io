import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStudiesComponent } from './about-studies.component';

describe('AboutStudiesComponent', () => {
  let component: AboutStudiesComponent;
  let fixture: ComponentFixture<AboutStudiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutStudiesComponent]
    });
    fixture = TestBed.createComponent(AboutStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
