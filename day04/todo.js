//实现单页开发的方式
//通过hash记录跳转的路径，路径后带上 #***  (实现历史管理)
//通过浏览器自带的history,(H5中有个history.pushState(),需要服务端的支持，否则可能404
//开发使用hash方式，上线只用history方式

//const a = {};
//a.a = "a";可以，内存地址没有变化
//a = {};重新赋值，内存地址发生改变，报错

let vm = new Vue({
    el:"#app",
    data:{
        todoList:[
            {isSelected:false,title:"吃饭"},
            {isSelected:false,title:"睡觉"}
        ],
        title:'',
        curTodo:"",
        hash:''
    },
    methods:{
        addTodoList(){
            this.todoList.push({isSelected:false,title:this.title});
            this.title="";
        },
        removeTodoList(todo){
            this.todoList = this.todoList.filter(item => item != todo);
        },
        changeTitle(todo){
            this.curTodo = todo;
        },
        cancleTitle(){
            this.curTodo = '';
        }
    },
    computed:{
        sum(){
            return this.todoList.filter(item => !item.isSelected).length;
        },
        todoListFilter(){
            if(this.hash === 'do') return this.todoList.filter(item => item.isSelected);
            if(this.hash === 'undo') return this.todoList.filter(item => !item.isSelected);
            return this.todoList;
        }
    },
    directives:{
        //html里focus-aa,此处需要focusAa
        focus(el){
            el.focus();
        }
    },
    watch:{
        /*todoList(){//watch默认只监控一层的数据变化

        }*/
        //改成成深度监控
        todoList:{
            handler(){//默认写成函数，就相当于默认写了个handler
                //localStorage默认存的是字符串，所以将todoList转成json字符串
                //将历史数据存在本地
                //控制台的Application中可以查看记录
                localStorage.setItem("data",JSON.stringify(this.todoList));
                }
            ,
            //true:深度监控
            deep:true
        }
    },
    created(){//ajax取数，数据初始化方法
        //取出方法,不存在为null，则取出默认的
        this.todoList = JSON.parse(localStorage.getItem("data")) || this.todoList;
        //监控页面hash值的变化，如果页面已经有hash了，刷新页面也要重新获取hash
        this.hash = window.location.hash.slice(2) || 'all';//hash不存在默认为all
        console.log(this.hash);
        window.addEventListener('hashchange',()=>{
            //hashchange  链接的hash值改变触发的事件
            //当hash值变化，重新记录操作的数据
            this.hash = window.location.hash.slice(2);
        },false);
    }
});

