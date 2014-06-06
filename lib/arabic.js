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
  
  var outputStr = ''
  var tmp = number
  var mCount = (tmp / 1000) | 0
  tmp %= 1000
  var cCount = (tmp / 100) | 0
  tmp %= 100
  var xCount = (tmp / 10) | 0
  tmp %= 10
  var iCount = tmp

  for (var i = 0; i < mCount; i++) {
    outputStr += 'M'
  }

  if (cCount == 4) {
    outputStr += 'CD'
  }
  else if (cCount == 9) {
    outputStr += 'CM'
  }
  else if (cCount >= 5) {
    outputStr += 'D'
    cCount -= 5
    for (var i = 0; i < cCount; i++) {
      outputStr += 'C'
    }
  }
  else {
    for (var i = 0; i < cCount; i++) {
      outputStr += 'C'
    }
  }

  if (xCount == 4) {
    outputStr += 'XL'
  }
  else if (xCount == 9) {
    outputStr += 'XC'
  }
  else if (xCount >= 5) {
    outputStr += 'L'
    xCount -= 5
    for (var i = 0; i < xCount; i++) {
      outputStr += 'X'
    }
  }
  else {
    for (var i = 0; i < xCount; i++) {
      outputStr += 'X'
    }
  }

  if (iCount == 4) {
    outputStr += 'IV'
  }
  else if (iCount == 9) {
    outputStr += 'IX'
  }
  else if (iCount >= 5) {
    outputStr += 'V'
    iCount -= 5
    for (var i = 0; i < iCount; i++) {
      outputStr += 'I'
    }
  }
  else {
    for (var i = 0; i < iCount; i++) {
      outputStr += 'I'
    }
  }

  return outputStr
}

// local functions
var isInt = function(x){
  return typeof x === 'number' && x % 1 == 0
}
