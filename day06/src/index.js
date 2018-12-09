//commonjs语法导入模块
let stra = require('./a.js');
console.log(stra);

//es6语法导入(尽量不要混用)
import strb from './b.js';
console.log(strb);

//node中的import和require的区别

let ff = a => b => c => a+b+c;
console.log(ff(1)(2)(3));

//ES7语法
let o1 = {school:'o1'};
let o2 = {school:'o2'};
let oo = {...o1,...o2};
console.log(oo);

import './index.css';//引入css
import './style.less';//引入less

let img = new Image();
img.src='./1.png';//webpack会认为他是个字符串，打包之后图片没有，所以使用import或者一个线上路径
//可以使用下边的方式
import page from './1.png';
img.src=page;
document.body.appendChild(img);