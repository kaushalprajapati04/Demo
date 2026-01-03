function login(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login")
            resolve()
        },2000)
    })
}
function userDetail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("userDetail");
        },1000);
    });
}
login()
    .then(() =>{
        return userDetail()
    })
    .then(()=>{
        crossOriginIsolated.log("all task done")
    }).catch(()=>{
        console.log("error")
    })