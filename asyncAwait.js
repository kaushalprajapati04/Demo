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

function passward(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
            console.log("passward");
        },3000);
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

async function demo(){
    try{

        await login();
        await userDetail();
        await passward();
    }
    catch(error){
        console.log("error", error)
    }
    console.log("all task done");
}

demo();

/// create a 3 task 