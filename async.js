

function square(n){
    return new Promise(next=>next(n*n))
}

// async function wait(){
//     const x = await square(4)
//     const y = await square(3)
//     console.log(x+y+2*3*4)
// }
// wait()

// async function wait(){
//    const [x,y] = await Promise.all([3,4].map((e)=>square(e)));
//    console.log(x+y+2*3*4)
// }

async function wait(){
   const [x,y] = await Promise.all([square(3),square(4)]);
   console.log(x+y+2*3*4)
}
wait()