import { TestBed } from '@angular/core/testing';

import { CompanyDetailsResolverService } from './company-details-resolver.service';

describe('CompanyDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyDetailsResolverService = TestBed.get(CompanyDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
