import { TestBed } from '@angular/core/testing';

import { CategoriesServiceApiService } from './api.category.service';

describe('ApiService', () => {
  let service: CategoriesServiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesServiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
