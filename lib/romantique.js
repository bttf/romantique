/*
 * romantique
 * 
 * How about converting Roman to Arabic?
 *
 * Copyright (c) 2013 Jú Gonçalves
 * Licensed under the MIT license.
 */

'use strict'

var romanNumber = require('./roman')
var arabicNumber = require('./arabic')

exports.roman = {

  validate : function(number){
    return romanNumber.validate(number)
  }
  , toArabic: function(number){
    if(romanNumber.validate(number)){
      return romanNumber.evaluate(number)
    }
    else{
      console.error(number + ' is not a valid roman numeral.')
      return false
    }
  }
    
}

exports.arabic = {

  validate : function(number){
    return arabicNumber.validate(number)
  }
  , toRoman : function(number){
    if(arabicNumber.validate(number)){
      return arabicNumber.evaluate(number)
    }
    else{
      console.error(number + ' is not a valid arabic numeral.')
      return false
    }
  }
  
}

