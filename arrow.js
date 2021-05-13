const data = require('./data.json')
console.log(data)
{
const nextData = () =>{
    console.log('data')
}

const parent = {
    firstName:'Suman',
    lastName:'Jana',
    getFullName: ()=>{
        console.log(this)
    }
}
parent.getFullName()
}

