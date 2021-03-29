'use strict';

const regexp1 = /1.+1/g;
let text = '000 1221 133331';

console.log(text.match(regexp1)); //жадный поиск
const regexp2 = /1.+?1/g;
console.log(text.match(regexp2));