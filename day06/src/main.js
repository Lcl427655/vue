//commonjs语法导入模块
let stra = require('./a.js');
console.log(stra);
//es6语法导入(尽量不要混用)
import strb from './b.js';
console.log(strb);
//node中的import和require的区别