//arrow fn 箭头函数不具备this和arguments,自己不具备this就会查找上一级的this
//改变this指向
//1)apply    bind    call
//2)var that = this;
//3)=>
//调用者.被调用者，this指向调用者

//用法
// function a(b){
//     return b + 1;
// }
//改为
let a = b => b + 1;
console.log(a(1));
//或者
//let a = (b) => {return b + 1;}

// function c(d){
//     return function (e){
//         return d + e;
//     }
// }
// console.log(c(1)(2));

let c = d => e =>  d + e;//高阶函数

console.log(c(1)(2));