import { TestBed } from '@angular/core/testing';

import { Person2Service } from './person2.service';

describe('PersonService', () => {
  let service: Person2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Person2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
