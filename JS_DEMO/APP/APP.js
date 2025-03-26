// 物件導向程式設計 Object-Oriented Programming, OOP
// 面對對象編程(中國用語)
// 每個物件都有__proto__屬性
// 每個函數都有prototype 屬性 => { }
// prototype chain 原型鏈

// const actions = {
//     attack: function () {
//         console.log("ATTACK!!!");
//     },
//     sleep: function () {
//         console.log("zzZ");
//     },

// };

// function heroCreator(name, age){
//     const hero={
//         name,
//         age,
//     };
//     hero.__proto__ = actions;
//     return hero;
// };

// function heroCreatorV2(name, age){
//     const hero = Object.create(actions);
//     // = hero.__proto__ = actions;
//     hero.name = name;
//     hero.age = age;

//     return hero;
// };

// function heroCreatorV3(name, age) {
//     // 1. this -> {  }
//     // 2. this.__proto__ ==> 生它的函數.prototype => { }
//     this.name = name;
//     this.age = age;
//     // 3. return this
//     };
// heroCreatorV3.prototype = actions;
// const h3 = new heroCreatorV3("cc", 18);



// class 類別
// instance 實體 = class new 出來的東西

// class heroCreatorV4 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   };

//   attack() {
//     console.log("ATTACK");
//   };

//   sleep() {
//     console.log("ZZZZ");
//   };
// };

// const h4 = new heroCreatorV4("dd", 100);





// class Animal {
//     sleep() {
//       console.log("ZZZZ");
//     }
//   }
  
//   // 繼承 inheritance
//   class HeroCreatorV4 extends Animal {
//     constructor(name, age) {
//       super();
//       this.name = name;
//       this.age = age;
//     }
  
//     attack() {
//       console.log("ATTACK");
//     }
//   }



// this
// 1. 誰呼叫誰就是 this ; 沒人呼叫，this = 全域變數( window )
// 2. 是否有使用箭頭函數 (沒有 this / arguments)
    // => 箭頭函數無法使用 new
// 3. 是否有使用 new
// 4. 是否有使用 call / apply / bind
// 5. 是否使用 嚴格模式 Strict Mode  
// "use strict";(type="module" 預設為嚴格模式)


// function hi(){
//     console.log(this);
// }
// // hi(); => 呼叫 hi();
// console.log();



// const hero = {
//     name : "cc",
//     power : 100,
//     attack: function(a,b){
//         console.log(a,b);
//         console.log(this);
        
//     },
    
// };

// const o = {cc:123};

// hero.attack.call(o,1,2);
// hero.attack.call(o,...[1,2]);
// hero.attack.apply(o,[1,2]);





// 閉包 closure
// var 在function中 執行完會消失
// for(var i = 0; i<3 ; i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },100);
// }
// for(let i = 0; i<3 ; i++){
//     // 捕捉 自由變數 free variable
//     setTimeout(()=>{
//         console.log(i);
        
//     },100);
// }