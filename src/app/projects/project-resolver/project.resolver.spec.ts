import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { projectResolver } from './project.resolver';
import { ProjectResolved } from '../Project';

describe('projectResolver', () => {
  const executeResolver: ResolveFn<ProjectResolved> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => projectResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
