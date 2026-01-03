// callback - a function is passed in another function


// callback function
// function fun(){
//     console.log("hello")
// }


// arrow function 
const fun = ()=>{
    console.log("hello")
}


// high ordder function
function save(cb){
    console.log("save function")
    cb();
}
save(fun)

save(()=>{
    console.log("hello")
})

let arr = [1,2,3,4,5];
function printArrayEle(element){
    console.log(element)
}
arr.forEach(printArrayEle)

arr.forEach((x)=>{
    console.log(x)
})