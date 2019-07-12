'use strict'

function generate(testLengthArray){
  const result = [];

  for (let i = 0; i < testLengthArray.length; i++) {
    const inputLength = testLengthArray[i];
    const item = {
      input: [],
      output: null,
      target: null
    };

    for (let j = 0; j < inputLength; j++) {
      item.input.push(Math.floor(Math.random()*20000 - 10000));
    }

    item.input = item.input.sort((a,b) => {
      return a-b
    });

    if(i == 0) {
      //*Not found*: `input` doesn't contain `target`.
      item.target = 10001;
      item.output = -1;
    }
    
    if(i == 1) {
      //*First index*: `target` is at index `0`.
      item.target = item.input[0];
      item.output = 0;
    }
    
    if(i == 2) {
      //*Last index*: `target` is at index `input.length-1`.
      item.target = item.input[item.input.length - 1];
      item.output = item.input.length - 1;
    }
    
    if(i == 3) {
      //*Last index*: `target` is at index `input.length-1`.
      item.target = item.input[1];
      item.output = 1;
    }

    if(i > 3) {
      item.target = Math.floor(Math.random()*20000 - 10000);
      item.output = item.input.indexOf(item.target);
    }

    result.push(item);
  }

  return result;
}

module.exports = generate
