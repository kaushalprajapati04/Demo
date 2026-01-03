console.log(first)

function login(cb){
    setTimeout(() =>{
        console.log("login");
        cb()
    },2000);
}
// setTimeout(()=>{
//     console.log("login");
// },2000);

// setTimeout(() => {
//     console.log("userdetail");
// },1000);

function userDetail(){
    setTimeout(() => {
        console.log("userdetail");
    },1000);
}


console.log("end")