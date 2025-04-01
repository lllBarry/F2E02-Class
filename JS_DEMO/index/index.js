// ECMAScript==>規範
// JavaScript/ES6

// 變數 variable
// 宣告變數


// 變數提升 Variable Hoisting
// JavaScript 跑兩次
// 1.建立期  名字+初始化
// 2.執行期  指定、賦值、初始化
// console.log(a)
// var a=1;
// undefined

// FIRST-----------
// console.log(a) ==> do nothing
// var a ==> undefined

// SECOND----------
// console.log(a) ==> undefined
// a=1 ==> a=1

// console.log(b)
// let b=1;
// Cannot access 'b' before initialization

// FIRST-----------
// console.log(b) ==> do nothing
// let b

// SECOND----------
// console.log(a) ==> Cannot access 'b' before initialization






// var e=1;
// let e=2;
// console.log(e)


// console.log(c)
// console.log(d)
// var c=5;
// let d=4;


// var vs let
// TDZ Temporal Dead Zone

// 用let不用var
// const>let>>>var

// SSOT = Single Sourse of Truth
// ECMS-262
// a == b vs a === b
// 都會比較資料型態
// undefined == null
// let a = undefined;
// if(a === undefined || a === null){
//     console.log("空");
// } else{
//     console.log("有");
// }


// const a=1;  ==> 無法改變
// a=2
// console.log(a) ==>1

// js string 無法更改
// dd="asdafghhj"
// console.log(dd)
// dd[0]="f"
// console.log(dd)

// const ii=[1,2,3]
// ii[0]=8
// console.log(ii)==> [8,2,3]

// const p=[1,2,3]
// p=[1,2,3]
//  錯誤
//  const 無法re-assign


// a=1
// var a=5
// console.log(a)



// scope
// var: function scope
// let: block scope

// let a=2;
// {
// let a=1;
// console.log(a); ==>1
// }
// console.log(a); ==>2


// const myStudentScore = 100   //駝峰式 (js)
// const my_student_score = 100 //蛇式
// 前面不能放數字


// 流程控制
// && and
// || or
// not >> and >> or

// const age=50

// if(age >= 18){
//     console.log("adult")
// }else if(age >= 0){
//     console.log("teen")
// }else{
//     console.log("wrong")
// }











// const year = 2048

// if(year%400==0){
//     console.log("閏年");
// }else{
//     if(year%100==0){
//         console.log("平年");
//     }else{
//         if(year%4==0){
//             console.log("閏年");
//         }else{
//             console.log("平年");
//         }
//     }
// }

// if(year%4==0){
//     if(year%100==0){
//         if(year%400==0){
//             console.log("閏年");
//         }else{
//             console.log("平年");
//         }
//     }else{
//         console.log("閏年");
//     }
// }else{
//     console.log("平年");
// }
// if((year%4===0 && year%100!==0)||year%400===0){
//     console.log("閏年");
// }else{
//     console.log("平年");
// }


// const abc = 100;
// (abc > 10) && console.log("ok")



// const a = 100;
// switch(a){
//     case 1:
//         console.log(654);
//         break;
//     case 2:
//         console.log(654);
//         break;
//     case 3:
//         console.log(654);
//         break;
//     case 4:
//         console.log(654);
//         break;
//     default:
//         console.log("???");
// }

// for(let i = 0; i < 5; i++){
//     for(let j=10; j>i; j--){
//         console.log(i+j);
// }
// }



// for(let i=2;i<=100;i+=2){
//     console.log(i);
//     if(i==50){
//     break;
//     }
// }

// for(let i=2;i<=100;i+=2){
//     if(i==50){
//     continue;     //   ==>直接到下一步
//     }
//     console.log(i);
// }


// let a=1;
// while(a<5){
//     console.log(a);
//     a++;
// }

// for(let i=1;i<10;i++){
//     for(let j=1;j<10;j++){
//         console.log(i+"X"+j+"="+i*j);
//         console.log(`${i} X  ${j} = ${i*j});
//     }
// }
// let z="";
// for(let x=1;x<=4;x++){
//     let u="";
//     for(let b=4;b-x>=0;b--){
//         u+=" ";
//     }
//     console.log(u+z+"x"+z);
//     z+="x";
// }

// let u=" "; 
// for(let x=1;x<=4;x++){
//     console.log(u.repeat(4-x)+"*".repeat(x*2-1));
// }

// for(let i=1;i<=4;i++){
//     const spaces = " ".repeat(4-i);
//     const stars = "*".repeat(i*2-1);
//     console.log(`${spaces}${stars}`);
// }



// function h(){
//     console.log('gasdasdasdasdasdasdasd');
// }
// h();


// function first(parameter){
//     console.log(`這個是 ${parameter}`);
// }
// first("引數 argument");

// function f(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// f(1,2,3);

// function tree(t=4){
//     for(let i=1;i<=t;i++){
//         const spaces = " ".repeat(t-i);
//         const stars = "*".repeat(i*2-1);
//         console.log(`${spaces}${stars}`);
//     }
// }
// tree();

// hi();        ==> 執行 ==> 建立期不做事 
// function hi(){               ==>建立期已經定義完
//     console.log("hiiiii");
// }

// hey();                       ==> TDZ
// const hey = function(){
//     console.log("hhhhhhhh");
// };


// 一等公民 First Class Cisizen
// const hey = function(){
    //     console.log("hhhhhhhh");
    // };
    // hey();
    
    
// 匿名函數
// const aaa = function(x) {
// };
// // 箭頭函數
// const bbb = (x) => {
// };

// function a(){
//     console.log("aaa");
// }

// // 高階函數 Higher Order Function
// function x(nn){
//     console.log(nn);
// }
// x(a);

// function b(bb){
//     // callback function 回乎函數
//     bb();
// }
// b(a);


// function a(){
//     return 123;
// }

// const r = a();
// console.log(r);



// function add(a,b){
//     return(a+b);
// }
// console.log(add(1,2));
// console.log(add(3,2));

// function roundTo(num,n){
//     num*=10**n;
//     num=Math.round(num);
//     return num
// }

// function calcBMI(height,weight){
//     height/=100;
//     const BMI = weight/height**2;
//     return(Math.round(BMI*100)/100);
// }
// console.log(calcBMI(170,68));



// 陣列 Array
// 元素

// const arr = ["a","b","c","d","e","f"];
// index = 0
// last = 總數 - 1
// console.log(arr[arr.length - 1]);

// break(終止), continue(跳過)
// const arr = ["a","b","c","d","e","f","g"];
// for (i=0;i<arr.length;i++){
    //     if(i>3){
        //     break;
        //     }
        //     console.log(arr[i]);
        // }
      
        

// const arr = ["a","b","c","d","e","f","g"];
        
// arr.forEach(function(el) {
//     console.log(el);
// });
// // 遍歷 Iteration
// arr.forEach((el) => {
//     console.log(el);
// });




// const arr = [1,2,3,4,5];

// const newArr = [];
// for(let i=0;i<arr.length;i++){
//     newArr[i]=arr[i]*2;
//     console.log(newArr[i])
// }
// for(let i=0;i<arr.length;i++){
//     newArr.push=arr[i]*2;
// }
// console.log(newArr);



// arr.forEach((el)=>{
//     newArr.push(el*2);
// })
// console.log(newArr);


// const arr=[1,2,3,4,5,6,7,8,9];
// arr.unshift(0);
// console.log(arr);
// arr.push(10);
// console.log(arr);
// arr.splice(2,0,"a","b","c");
// console.log(arr);

// arr.splice(從哪開始,刪除幾個,插入,插入...)


// const arr=[1,2,3,4,5,6,7];
// const newArr=["a","b","c"];
// arr.splice(1,3,"a","b","c");
// arr.splice(1,3,...newArr);
// console.log(arr);


// arr=[1,2,3,4,5]
// const newArr = arr.map((el) =>{

// });
// console.log(newArr);
// ==>  newArr = [undefined,undefined,undefined,undefined,undefined]


// const newArr = arr.map((el) =>{
//     return el * 2;
// });
// const newArr2 = arr.map((el) => el * 2);


// const arr=[1,2,3,4,5]
// const newArr = arr.map((el) =>el * 2 - 1);
// console.log(newArr);


// const arr=[1,2,3,4,5]
// const newArr = Array.filter((el) => {
//     return true;
// });

// const newArr = Array.filter((el) => {
//     return el - 3;
// });              ==> newArr=[1,2,4,5]
//           js中   -1 為true



// const arr=[1,2,3,4,5]

// const result = arr.every((el) => {
//     return el>3;
// });
// ==>全部符合

// const result = arr.some((el) => {
//     return el>3;
// });
// 部分符合

// const arr=[];
// const result = arr.every((el) => {
//     return false;
// });
// console.log(result);
// ==>true  (沒有不符合條件==>true)

            
            
            
// const arr=[1,2,3,4,5]
// const result = arr.reduce((累進值acc,目前值el)=>{
//     return 累進值acc + 目前值el;
// }, 0);
// ==> 0為acc的初始值    



// const result=arr.reduce((acc,el)=>{
//     return acc+el;
// },0);



// const arr=[1,2,3,4,5,6,7,8,9,10];
// const newArr=[];
// arr.forEach((el)=>{
//         newArr.push(el*2);
// });
// newArr = arr.filter((el) => {
//         return el<=10;
//     });
// const result=newArr.reduce((acc,el)=>{
//     return acc+el;
// },0);
// console.log(result);


// TYPE 1 
// const doubleArr = arr.map((el) => el * 2);
// const filteredArr = doubleArr.filter((el)=>el<10);
// const sumOfArr = filteredArr.reduce((acc,el)=>acc+el);
// console.log(result);

// TYPE 2
// const sumOfArr = arr
// .map((el)=>el *2)
// .filter((el)=>el<10)
// .reduce((acc,el)=>acc+el);

// console.log(sumOfArr);

// TYPE 3 
// const double= (el)=>el *2;
// const lessThan10= (el)=>el <10;
// const sum= (acc,el)=>acc+el;
// const sumOfArr = arr
// .map(double)
// .filter(lessThan10)
// .reduce(sum);
// console.log(sumOfArr);


//物件 Object

// const aa={
//     bb:456,
//     cc:123,
//     "a  a":444,
//     key1:111,
//     key2:222,
//     key3:333,
// };

// console.log(aa.cc);
// console.log(aa["cc"]);

// //  key/value pair

// for(let i=1; i<4; i++){
//     console.log(aa[`key${i}`]);
// }



// const hero ={
//     name: "hero",
//     attack:function(){
//         console.log("attack!!!");
//     },
// };

// const attack = () => console.log("attack!!!");
// const name = "???";
// const hero = { name,  attack };


// console.log(hero.name);
// hero.attack();

//函數 function vs 方法 method
// 物件內的一個函數 => 方法

//DOM, Document Object Model
//JS ---瀏覽器---> HTML
//HTML tag --瀏覽器--> objects <--取用-- JS

// const a = document.querySelector("#abc");
// const a = document.querySelector(".aabbc");
// const a = document.getElementById("abc");
// const a = document.getElementsByClassName("aabbc");
// console.log(a);

// const all = document.querySelectorAll("#abc");
// console.log(all);

// document.addEventListener("click",()=>{
//     console.log("");
// })

// document.addEventListener("DOMContentLoaded",()=>{
//     console.log("");
// })


// const btn = document.querySelector("#hei-btn");
// console.log(btn);
// btn.addEventListener("click",()=>{
//     const txt = document.querySelector("#txt"); 
//     console.log(txt);
//     if(txt.textContent == "Hello"){
//         txt.textContent = "World";
//     }else{
//         txt.textContent = "Hello";
//     }
//     console.log(txt);

// })

// const input1 = document.querySelector("#input1");
// const input2 = document.querySelector("#input2");
// const input3 = document.querySelector("#input3");
// const input4 = document.querySelector("#input4");
// input1.addEventListener("input", () => {
//     console.log("ok");
//     if(input1.value.length == 4){
//         input2.focus();
//     }
// });
// input2.addEventListener("input", () => {
//     console.log("ok");
//     if(input2.value.length == 4){
//         input3.focus();
//     }
// });
// input3.addEventListener("input", () => {
//     console.log("ok");
//     if(input3.value.length == 4){
//         input4.focus();
//     }
// });
// input4.addEventListener("input", () => {
//     console.log("ok");
//     if(input4.value.length == 4){
//         input1.focus();
//     }
// });
// for(let i=1;i<=4;i++){
//     const input = document.querySelector(`#input${i}`);
//     input.addEventListener("input", () => {
//         if(input.value.length == 4){
//             const next = input.dataset.next;
//             const nextOne = document.querySelector(next);
//             nextOne.focus();
//         }
//     });
// }


// const hero = {
//     name: 123,
//     age: 456,
// };

// const name = hero.name;
// const age = hero.age;
//解構
// const {age, name}=hero;
// function hi({ name, age }){
//     console.log(name, age);
// }


// const gotoNextOne = (e) => {
//     const target = e.target;
//     const{ target } = e;
//     if(target.value.length == 4){
//         const next = `#${target.dataset.next}`;
//         const next = `${target.dataset.next}`;
//         const nextOne = document.querySelector(next);
//         nextOne.focus();
//     }
// };
// document.querySelectorAll(".card-input").forEach((input)=>{
//     input.addEventListener("input",gotoNextOne);
// });


// const gotoNextOne = ({target}) => {
//     if(target.value.length == target.getAttribute("maxlength")){
//         const next = `${target.dataset.next}`;
//         const nextOne = document.querySelector(next);
//         nextOne.focus();
//     }
// };
// document.querySelectorAll(".card-input").forEach((input)=>{
//     input.addEventListener("input",gotoNextOne);
// });

