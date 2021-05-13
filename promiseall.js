{/*function square(n){
    return new Promise(next=>{
        next(n*n)
    })
}

const a = [2,3,4,5]

Promise.all(a.map((e)=>square(e))).then((r)=>console.log(r))*/}

function square(n){
    return new Promise(next=>next(n*n))
}

square(4).then(x=>{
    square(3).then(y=>{
        console.log(x+y+2*4*3)
    })
})