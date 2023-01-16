import { TestBed } from '@angular/core/testing';

import { Person3Service } from './person3.service';

describe('PersonService', () => {
  let service: Person3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Person3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
