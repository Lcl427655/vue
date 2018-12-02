//promise:解决回调问题的
let a= "";
function buy(){
    setTimeout(() => {
        a = "test";
    }, 2000);
    //考虑到异步，就考虑到回调函数，就是将后续的处理逻辑传入当前要做的事情
    //事情处理好调用此函数
};
buy();
function cookie(){
    console.log(a);
};
cookie();
//修改成下边的样子
let b = "";
function buyB(callback){
    setTimeout(() => {
        b = "test";
        callback(b);
    }, 2000);
    //考虑到异步，就考虑到回调函数，就是将后续的处理逻辑传入当前要做的事情
    //事情处理好调用此函数
};
buyB(
    (val) => {
        console.log(val);
    }
);
//promise有三个状态 成功态   失败态   等待
console.log(Promise);
//resolve转向成功态
//reject转向失败态
//均是函数
//promise的实例就有一个then方法
//(executor: (resolve: (value?: any) => void, reject: (reason?: any) => void) => void):
let c = "init";
let p = new Promise((res,rej) => {
    setTimeout(() =>{
        c = "suss";
        res(c);//成功
    },2000);
});
//(onfulfilled?: (value: any) => any, onrejected?: (reason: any) => PromiseLike<never>)
p.then((c) => {//成功
    console.log(c);
},() => {//失败

});
console.log("====================");
function buyPack(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(Math.random() > 0.5) {
                resolve("======买=====");
            }else{
                reject("------不买-----");
            }
        }, Math.random() * 1000);
    });
}
buyPack().then((data)=>{
    console.log("买"+data);
},(data)=>{
    console.log("不买"+data);
});