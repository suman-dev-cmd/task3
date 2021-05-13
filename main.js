// const nextElementAr = [...document.getElementsByClassName('btn')]
// nextElementAr.forEach(item=>console.log(item))
const onButtonClick=(e)=>{
    console.log(e,this)
}

function componentDidMount(e){
    const nextElementAr = [...document.getElementsByClassName('btn')]
    nextElementAr.forEach(item=>item.addEventListener('click',onButtonClick))
}
document.addEventListener('DOMContentLoaded',componentDidMount)