'use strict';

var chai = require('chai')
    , expect = chai.expect
    , decimal = require('../lib/decimal')

describe('Decimal Validator', function() {

  it('should return a boolean', function() {
    expect(decimal.validate('1985')).to.be.a('boolean')
    expect(decimal.validate(1955)).to.be.a('boolean')
    expect(decimal.validate('decimal')).to.be.a('boolean')
    expect(decimal.validate(419.9)).to.be.a('boolean')
  });

  it('should return true for valid decimals', function() {
    expect(decimal.validate('1985')).to.be.true;
    expect(decimal.validate(1955)).to.be.true;
  });

  it('should return false for invalid decimals', function() {
    expect(decimal.validate('decimal')).to.be.false;
    expect(decimal.validate(419.9)).to.be.false;
  });

});
