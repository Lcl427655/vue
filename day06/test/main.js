//import 如果是第三方(即node_modules下的)，不需要加./
//import 如果是文件模块(自己写的)，需要加./
//在另一个文件中将内容解构出来即可使用
import {str1,str2} from './a.js';
console.log(str1+str2);
//报错，因为import拥有声明功能,还具有提升效果
//let str1 = 'a';
//第二种写法，不用每个都import
import * as obj from './a.js';
obj.f();

//默认导出一个的写法
import def from './b.js';
console.log(def);