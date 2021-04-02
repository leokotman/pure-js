'use strict';

const regexp0 = /1.+1/g;
let text = '000 1221 133331';

console.log(text.match(regexp0)); //жадный поиск
const regexp00 = /1.+?1/g;
console.log(text.match(regexp00));

// let bigText = document.querySelector('.big_text');
let bigText = `'Lorem, aren't ipsum dolor sit amet consectetur, adipisicing elit.' Corporis voluptate rerum inventore explicabo harum nulla, omnis quam, placeat, dicta quos autem nostrum asperiores incidunt odit? 'Fugiat odit veritatis tenetur nisi voluptas consectetur natus nostrum ad reprehenderit unde, autem sit accusantium sequi saepe, voluptates magnam consequuntur rerum quidem eius ullam enim repellat cumque id cupiditate in?' Mollitia consequatur ex libero nesciunt expedita pariatur ipsam corporis ea praesentium perspiciatis voluptate in, ipsum, modi minima autem quasi, molestiae architecto non totam illum iste? 'Ex sequi voluptate molestias nulla hic non voluptates, voluptatum reprehenderit iste ea facilis, beatae et laboriosam nisi qui, totam doloremque.'`;
const regexp1 = /\s?'[^t]/gm;
//здесь у меня заменяется и первая буква в тексте после кавычки. не понял, как убрать замену одного элемента после кавычки
bigText = bigText.replace(regexp1, '"');
document.querySelector('.big_text').innerHTML = bigText;

//задание 3*
//сделал валидацию в форме в html. использую атрибут pattern, вместе с title - делают проверку. не вижу смысла добавлять еще js конкретно для этой задачи. или можно сделать красивее?