function sqr(n){
    return new Promise(next=>{
        next(n*n)
    })
}
function cube(n){
    return new Promise(next=>{
        next(n*n*n)
    })
}

// async function work(){
//     const a = [1,2,3,4]
//     for(let i =0 ; i<a.length;i++){
//         const x = await sqr(a[i])
//         const y = await cube(a[i])

//         console.log(`Loop ${i}`,x,y)
//     }
// }
// work()

for(let i = 0; i<5; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}
for(var i = 0; i<5; i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}