import { TestBed } from '@angular/core/testing';

import { ApiRecipeServiceService } from './api.recipe.service.service';

describe('ApiRecipeServiceService', () => {
  let service: ApiRecipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRecipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
