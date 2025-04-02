//ESM = ES Module
//CJS = CommonJS
import axios  from "axios"
// https://api.5xcamp.us/
// const url = "https://api.5xcamp.us/api/v1/tenlong";
// CORS
// 限制:針對瀏覽器裡的程式語言

// JS ----> API (X CORS)
// JS ---> MYAPI (NODE) ---> API
// console.log(axios);

// const resp = await axios.get(url)
// console.log(resp.data);
// const {data: books} = await axios.get(url)
// console.log(books);
// books.forEach(({title}) => console.log(title));


// import {hi as HH} from "./eee.js"
// 撞名可用as改名
// var hi = 1;
// console.log(hi);
// console.log(HH);

import Alpine from "alpinejs"
window.Alpine = Alpine

// Alpine.start()



// const btn = document.querySelector("#closeBtn");

// let showArticle = true;

// btn.addEventListener("click",function(){
    //    Event:preventdefault();
//     const article = document.querySelector("#article");
//     //1. article.remove()
//     // 直接移除
//     //2. article.style.display = "none"
//     // console.log(article.classList)
//     //3. if(article.classList.contains("hidden")){
//     //     article.classList.remove("hidden")    
//     // }else{
//     //     article.classList.add("bg-red-700", "text-white", "hidden")
//     // }
//     // 4. showArticle = !showArticle;
//     // if(showArticle){
//     //     article.classList.remove("hidden")    
//     // }else{
//     //     article.classList.add("bg-red-700", "text-white", "hidden")
//     // }
// });


// const inputTxt = document.querySelector("#inputTxt");
// const returnTxt= document.querySelector("#returnTxt");

// inputTxt.addEventListener("input",()=>{
//     returnTxt.textContent= inputTxt.value

    
// })

import hello from "./hello.js"

Alpine.data("hello", hello)
Alpine.start()
