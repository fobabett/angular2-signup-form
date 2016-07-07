/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {UserValidator} from './user-validator';

describe('UserValidator', () => {
  it('should create an instance', () => {
    expect(new UserValidator()).toBeTruthy();
  });
});
