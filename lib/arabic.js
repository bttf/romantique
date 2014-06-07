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
  if (typeof number == 'string') {
    number = parseInt(number)
  }

  var mCount = reduce(number, 1000)
  var cCount = reduce(number, 100)
  var xCount = reduce(number, 10)
  var iCount = reduce(number, 1)

  var outputStr = ''

  for (var i = 0; i < mCount; i++) { outputStr += 'M' }
  outputStr += generateNumerals(100, cCount);
  outputStr += generateNumerals(10, xCount);
  outputStr += generateNumerals(1, iCount);

  return outputStr
}

// local properties & functions
var romanNumerals = {
  1000: 'M'
  , 500: 'D'
  , 100: 'C'
  , 50: 'L'
  , 10: 'X'
  , 5: 'V'
  , 1: 'I'
}
var isInt = function(x){
  return typeof x === 'number' && x % 1 == 0
}

var generateNumerals= function(scale, count){
  var str = ''
  var cur = romanNumerals[scale]
  var nextUp = romanNumerals[scale * 5]
  var twoUp = romanNumerals[scale * 10]

  if (count == 4) {
    str += cur + nextUp
  }
  else if (count == 9) {
    str += cur + twoUp
  }
  else if (count >= 5) {
    str += nextUp
    count -= 5
    for (var i = 0; i < count; i++) {
      str += cur;
    }
  }
  else {
    for (var i = 0; i < count; i++) {
      str += cur;
    }
  }

  return str
}

var reduce = function(num, divisor) {
  for (var i = 1000; i > divisor; i /= 10) {
    num %= i
  }
  return (num / divisor) | 0
}
