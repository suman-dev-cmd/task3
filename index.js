{/*
let age = 17
// let matured = age >=18 ? 'yes' : 'no'
let matured = age >=18 && 'yes' || 'no'
console.log(matured)
*/}

{
    const objectArray = [
        {
            id:1,
            age:18
        },
        {
            id:2,
            age:20
        },
        {
            id:3,
            age:25
        },
        {
            id:4,
            age:17
        },
    ]

    const output = objectArray.find((item,index,array)=> item.age == 19)
    // const tobeDisplayed = output || false
    const tobeDisplayed = output?{...output,error:false} : {error:true}
    console.log(tobeDisplayed)
}