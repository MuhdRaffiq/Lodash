const _ = {

  //first method: _.clamp
  clamp (numInput, minNum, maxNum) {
    let newNum;
    if (numInput <= minNum ) {
      newNum = minNum;
    } else if (numInput >= maxNum) {
      newNum = maxNum;
    } else {
      newNum = numInput;
    };
    return newNum;
  },

  // second method _.inRange
  inRange (number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    } if (start > end) {
      let temp = end;
      end = start;
      start = temp;
    }
    let isInRange;
    {if (start <= number && number <= end) {
        return true
      } else {
        return false
      }
    }
    isInRange
  },

  //third method _.words
  words (string) {
    words = string.split(' ');
    return words;
  },

 // 4th method _.pad
  pad (string, length) {
    if (length <= string.length) {
      return string;
    }
    let startPadLength = Math.floor((length - string.length)/2);
    let endPadLength = length - string.length - startPadLength;
    let paddedString = ' ';
    let newStart = paddedString.repeat(startPadLength);
    let newEnd = paddedString.repeat(endPadLength);
    const newPad = newStart.concat(string).concat(newEnd);
    return newPad;
  },

  // 5th method _.has
  has (object, key) {
    const hasValue = object[key] !== undefined;
    return hasValue;
  },

// 6th method _.invert
invert (object) {
  let invertedObject = [];
  for (let key in object){
    let originalValue = object[key];
    invertedObject[originalValue] = key;
  } return invertedObject;
},

  // 7th method _.findkey
  findKey (object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue == true) {
        return key;
      } else {
        return undefined;
      }
    }
  },

  //8th method _.drop
  drop (array, n) {
    if ( !n ) {
     n=1;
    };
   let droppedArray = array.slice(n);
   return droppedArray;
  },

  //9th method _.dropwhile
  dropWhile: function(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },

  //10th method _.chunk
  chunk (array, size) {
    if (size == undefined) {
      size=1;
    }
    let arrayChunks = [];
    for (let i = 0; i < array.length; i+=size) {
      let arrayChunk = array.slice(i, i+size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
