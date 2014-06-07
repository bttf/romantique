'use strict';

var chai = require('chai')
    , expect = chai.expect
    , arabic = require('../lib/arabic')
    , valids = [
      '1955',       // MCMLV
      1985,         // MCMLXXXV
      4,            // IV 
      99            // XCIX
    ]
    , invalids = [
      'not a number',
      419.9
    ]

describe('Arabic Validator', function() {

  it('should return a boolean', function() {
    expect(arabic.validate(valids[0])).to.be.a('boolean')
    expect(arabic.validate(valids[1])).to.be.a('boolean')
    expect(arabic.validate(invalids[0])).to.be.a('boolean')
    expect(arabic.validate(invalids[1])).to.be.a('boolean')
  });

  it('should return true for valid values', function() {
    expect(arabic.validate(valids[0])).to.be.true;
    expect(arabic.validate(valids[1])).to.be.true;
  });

  it('should return false for invalid values', function() {
    expect(arabic.validate(invalids[0])).to.be.false;
    expect(arabic.validate(invalids[1])).to.be.false;
  });

});

describe('Arabic to Roman', function() {

  it ('should return the Roman equivalent of an Arabic numeral', function() {
    expect(arabic.evaluate(valids[0])).to.be.equal('MCMLV');
    expect(arabic.evaluate(valids[1])).to.be.equal('MCMLXXXV');
    expect(arabic.evaluate(valids[2])).to.be.equal('IV');
    expect(arabic.evaluate(valids[3])).to.be.equal('XCIX');
  });

});
