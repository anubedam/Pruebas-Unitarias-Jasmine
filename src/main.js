//import { suma } from './suma.js';
const suma = require('./suma.js');

window.addEventListener('load', script);

function script(){
   const num1 = 5;
   const num2 = 3;
   const sum = suma(num1,num2);
   console.log(`La suma de ${num1} y ${num2} es ${sum}`);
}