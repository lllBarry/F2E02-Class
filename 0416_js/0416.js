// const arr = [2, 3, 7, 8, 7, 9, 6]

// const newArr =  arr.filter((el)=>el != 7)
// console.log(newArr);


// const idx = arr.findIndex((i)=>i == 7)
// arr.splice(idx, 1)
// console.log(arr);



// function removeNum(array, n){
//     array = array.slice(0, array.length)  //複製
//     const idx = array.findIndex((i)=>i == n);
//     array.splice(idx, 1);   //刪除
//     return array;
// }

// const newArr = removeNum(arr, 7);
// console.log(newArr);
// console.log(arr);




function removeTodo(todos, id){
    const idx = todos.findIndex((todo)=>(todo.id == id))
    if(idx >= 0){
        todos.splice(idx, 1)

    }
}
const todos = [
    { id: 123, content: "cc" },
    { id: 456, content: "dd" },
    { id: 789, content: "ee" },

]

removeTodo(todos, 456)
console.log(todos);
