/*
 * romantique.decimal
 * 
 *
 * Copyright (c) 2013 Jú Gonçalves
 * Licensed under the MIT license.
 */

'use strict'

// module api exported
exports.validate = function(number){
  switch(typeof number) {
    case 'number':
      return isInt(number)
      break
    case 'string':
      return isInt(parseInt(number))
      break
    default:
      return false
  }
}

exports.evaluate = function(number){
}

// local functions
var isInt = function(x){
  return typeof x === 'number' && x % 1 == 0
}
