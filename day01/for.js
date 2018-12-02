//let的作用

let arr = [11,22,33,44,55];
arr.b = 66;
for(let i = 0 ; i < arr.length ; i ++ ){//编程式
    console.log(arr[i]);
}
console.log("==========");
arr.forEach(function(item,n){//函数式，不关心内部如何实现，forEach不支持return
    console.log(item);
    console.log(n);
});
console.log("==========");
for(let key in arr){//不使用，typeof取的索引是string不是number.而且会把私有属性b也给打印出来
    console.log(key);
    console.log(arr[key]);
}
console.log("==========");
for(let val of arr){//不能遍历对象，可以return，ES6语法
    console.log(val);
}
console.log("==========");
var obj = {name:"张三",age:"18"};
for(let val of Object.keys(obj)){//利用for of遍历对象
    console.log(obj[val]);
}

//面试题forEach,for in,for of ,for区别
