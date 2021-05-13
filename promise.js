function squarValue(n){
    return new Promise(next=>{
        next(n*n)
    })
}

squarValue(8).then(res=>console.log(res))
console.log('step 1')
squarValue(16).then(res=>console.log(res))
console.log('step 2')

