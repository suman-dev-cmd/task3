// const a = ["AB", "BC", "CD"]
// a.map((item)=>console.log(item))

const nameString = "Suman JaAa"

nameString.split(' ').map((word)=>{
    // console.log(word)
    const smallLattes = word.toLowerCase()
    // console.log(`${smallLattes[0].toUpperCase} ${smallLattes.substring(1,smallLattes.length)}`) 
})
//sort
const b = [2,3,1]
const  c = b.sort((a,b) => a-b)
// console.log(c)

const ageArray = [{age:15},12,23,34,{age:19}]

const nextArray = ageArray.map((item)=>{
                        if(!item.age){
                            return{age:item}
                        }
                        return item
                    })
 ageArray.forEach((item,index,array)=>{
    if(!item.age){
        array[index]={age:item}
    }

})

const filtingArray = ageArray.filter((item)=>item.age>20)

const nextReduce = [ { age: 15 }, { age: 12 }, { age: 23 }, { age: 34 }, { age: 19 } ]
nextReduce.reduce((item1,item2)=>{
    // console.log(item1,item2)
    return{age: item1.age + item2.age}
})
const sumnNumber = [1,2,3,4,5]
sumnNumber.reduce((a,b)=> a+b )

// console.log(nextReduce.slice(1,2))
// console.log(nextReduce.splice(1,2))
console.log(nextReduce.splice(1,0,...[{age:33},{age:89}]))
console.log(nextReduce)
// console.log(sumnNumber.reverse())
// console.log(filtingArray)
