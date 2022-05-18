'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// this is a test comment from nathan

const countIt = (str) => {
  console.log('BOOMS', str.length)
}

//hi
//Create a array containing a set of arrays with two elements, one with a "character" and the other with occurrence of that character in the query

const getPrompt = () =>  {
  rl.question('Enter your string to count the characters: ', (str) => {
    countIt(str);
    getPrompt();
  });
}

if (typeof describe === 'function') {
  describe('#countIt()', () => {
    it('should be of type function', () => {
      
      assert.equal(typeof countIt, "function");
    });
  });
} else {
  getPrompt();
}