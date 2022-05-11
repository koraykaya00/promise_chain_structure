function addData(number){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(typeof number === "number"){
                resolve(number + 4);
            }
            else {
                reject(new Error ("Please enter a number..."))
            }
        },5000)
    })
}

addData(25).then(response => {
    console.log(response);
    return response + 6
}).then(response2 => console.log(response2))
.catch(err => console.log(err));
