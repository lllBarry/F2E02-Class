// API, Application Programming Interface
// JS ----> API ----> JSON (string) ----> JS --轉換--> 物件
// const url = "https://jsonplaceholder.typicode.com/users";

// pending, fulfilled, rejected
// .then ==> fulfilled 完才執行 (promise的一個方法)

// const result = fetch(url);
// result.then((resp)=>{
//     //string -> objects
//     //串聯物件
//     const jsonData = resp.json()
//     jsonData.then((data)=>{
//         console.log(data);
//     });
// });

// result.then((resp)=> resp.json())
// .then((users)=>{
//     users.forEach((user)=>{
//         console.log(user.email);
    // 解構
    // users.forEach(({email})=>{
    //     console.log(email);
//     });
// });

// const urltodo = "https://jsonplaceholder.typicode.com/todos";
// const resultodo = fetch(urltodo);
// resultodo.then((resp)=> resp.json())
// .then((todos)=>{
//     todos.forEach(({title})=>{
//         console.log(title);
//     });
// });


// const urlbike = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
// const resultbike = fetch(urlbike);
// resultbike.then((resp)=> resp.json())
// .then((bikes)=>{
//     bikes.forEach(({sna})=>{
//         console.log(sna);
//     });
// });

// resultbike.then((resp)=> resp.json())
// .then((bikes)=>{
//     bikes.filter((bike)=>{
//         return bike.available_rent_bikes >= 50;
//     })
//     .forEach(({sna})=>{
//         console.log(sna);
//     });
// })
// .catch((err)=>{
//     // 例外處理
//     console.log(err);
// });

// const urlbike = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

// try{
//     const resp = await fetch(urlbike);
//     const stations = await resp.json();
//     stations
//     .filter((station)=>station.available_rent_bikes >= 50)
//     .forEach(({sna})=>console.log(sna));
// }catch{
//     alert("系統忙碌中");
// }


// 處理錯誤
// try{
//     // 可能出錯的code
// } catch{
//     // 例外處理
// }

// stack FILO
// 非同步丟到WebAPI Ex setTimeout()、fetch
// 在task quene 排隊 FIFO   (fetch 優先)
// 等stack 空了 task quene 才丟到 stack

// console.log(1);
// setTimeout(()=>{
//     console.log(2);
// },0);
// console.log(3);

// result=> 1 3 2 


