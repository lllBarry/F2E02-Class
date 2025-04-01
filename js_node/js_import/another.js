function hi(){
    console.log(123);
}

function hey(){
    console.log(456);
    
}

// export const a = 1;
const a = 1;
const b = 2;


export { hi, hey, a }   // named export
export default hey      // default export