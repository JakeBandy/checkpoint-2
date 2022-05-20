'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// this is a test comment from nathan
const countIt = (str) => {
  let st =str.toLowerCase().replace(/[^a-z]/g,"")
  //console.log(str.toLowerCase().replace(/[^a-z]/g,""))//using a boolean operation in order to remove all none a-z characters
  for(let i=0;i<st.length;i++){
    let op=st[i]//
    //let op=st[i]//for visibility of code
    chars[op].count++;
    // console.log(chars[op])
  }
  console.log(chars)
}
  let alphabet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for(let i=0;i<alphabet.length;i++){//this takes the java object and only outputs characters that are present
    if(chars[alphabet[i]].count!=0){
        console.log(chars[alphabet[i]].char+": "+chars[alphabet[i]].count)
    }
    else{}
  }
  //underneath this it will be a method to clear the object for each questions

  for(let i=0;i<alphabet.length;i++){
    chars[alphabet[i]].count=0;
  }


  


//hi
//Create a array containing a set of arrays with two elements, one with a "character" and the other with occurrence of that character in the query
let chars={
  "a":{
    "char":"a","count":0
  },
  "b":{
    "char":"b","count":0
  },
  "c":{
    "char":"c","count":0
  },
  "d":{
    "char":"d","count":0
  },
  "e":{
    "char":"e","count":0
  },
  "f":{
    "char":"f","count":0
  },
  "g":{
    "char":"g","count":0
  },
  "h":{
    "char":"h","count":0
  },
  "i":{
    "char":"i","count":0
  },
  "j":{
    "char":"j","count":0
  },
  "k":{
    "char":"k","count":0
  },
  "l":{
    "char":"l","count":0
  },
  "m":{
    "char":"m","count":0
  },
  "n":{
    "char":"n","count":0
  },
  "o":{
    "char":"o","count":0
  },
  "p":{
    "char":"p","count":0
  },
  "q":{
    "char":"q","count":0
  },
  "r":{
    "char":"r","count":0
  },
  "s":{
    "char":"s","count":0
  },
  "t":{
    "char":"t","count":0
  },
  "u":{
    "char":"u","count":0
  },
  "v":{
    "char":"v","count":0
  },
  "w":{
    "char":"w","count":0
  },
  "x":{
    "char":"x","count":0
  },
  "y":{
    "char":"y","count":0
  },
  "z":{
    "char":"z","count":0
  }
}
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