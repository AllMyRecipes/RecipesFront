import { TestBed } from '@angular/core/testing';

import { ApiIngredientService } from './api.ingredient.service';

describe('ApiIngredientService', () => {
  let service: ApiIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
