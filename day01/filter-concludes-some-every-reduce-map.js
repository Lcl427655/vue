//filter:操作的是原数组，回调函数返回值为true则添加至新数组
var arr = [1,2,3,4,5];
var arrs = arr.filter(function(item,index){//index可以省略
    return item > 2 && item < 4;
});
console.log(arr);
console.log(arrs.toString());
console.log("===============");
//map:不操作原数组，返回值为返回值
var marr = [1,2,3,4,5];
let marrs = marr.map(function(item,index){//index可以省略
    //return "<li>" + item + "</li>";
    //`***${变量}***`:ES6模板字符串
    return `<li>${item}</li>`;
});
console.log(marrs);
console.log("===============");
//includes:ES6
console.log(marr.includes(1));
console.log(marr.includes(11));
//find:返回找到的那一项，为true停止,找不到返回undefined
let result = arr.find(function(item,index){
    return item.toString().indexOf(5) > -1;
});
console.log(result);
//some:找到true停止返回true
var rt = arr.some(function(item){
    return item == 5;
});
console.log(rt);
//every:找到false停止返回false
console.log("===============");
//reduce:收敛，4个参数，原数组不变，返回的是叠加
let sum = arr.reduce(function(prev,next,index,item){
    console.log(arguments);
    return 100;//本次的返回值会作为下一次的上一次
    /*[Arguments] { '0': 1, '1': 2, '2': 1, '3': [ 1, 2, 3, 4, 5 ] }
    [Arguments] { '0': 100, '1': 3, '2': 2, '3': [ 1, 2, 3, 4, 5 ] }
    [Arguments] { '0': 100, '1': 4, '2': 3, '3': [ 1, 2, 3, 4, 5 ] }
    [Arguments] { '0': 100, '1': 5, '2': 4, '3': [ 1, 2, 3, 4, 5 ] }*/
});
console.log(sum);
console.log("===============");
//数组求和
let summ = arr.reduce(function(prev,next,index,item){
    //本次的返回值会作为下一次的上一次
    return prev + next;
    //第一次:1+2
    //第二次:(1+2) + 3
    //第三次:((1+2) + 3) + 4
    //第四次:(((1+2) + 3) + 4) + 5
});
console.log(summ);
console.log("===============");
//求和
let sumn = [{price:30,count:2},{price:30,count:3},{price:40,count:4}].reduce(function(prev,next){
    console.log(prev);
    console.log(next);
    return prev + next.price * next.count;
},0);//默认指定第一次的prev
console.log("sumn:"+sumn);
console.log("===============");
//二维数据变为一维数组
let ars = [[1,2],[3,4],[5,6]].reduce(function(prev,next){
    console.log(prev);
    console.log(next);
    return prev.concat(next);
});
console.log(ars);
console.log([[1,2],[3,4],[5,6]].join(",").split(","));