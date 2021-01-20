/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AptDataService } from './aptData.service';

describe('Service: AptData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AptDataService]
    });
  });

  it('should ...', inject([AptDataService], (service: AptDataService) => {
    expect(service).toBeTruthy();
  }));
});
