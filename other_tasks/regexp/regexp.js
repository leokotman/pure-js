'use strict';

const regexp0 = /1.+1/g;
let text = '000 1221 133331';

console.log(text.match(regexp0)); //жадный поиск
const regexp00 = /1.+?1/g;
console.log(text.match(regexp00));

let bigText = document.querySelector('.big_text');
const regexp1 = /\s?'+?/;
bigText = bigText.replace(regexp1, '"');